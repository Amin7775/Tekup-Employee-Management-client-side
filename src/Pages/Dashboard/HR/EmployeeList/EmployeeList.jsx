import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useAllUsers from "../../../../hooks/useAllUsers";
import { RxCross1 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import { Helmet } from "react-helmet-async";
// stripe key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const EmployeeList = () => {
  const [users, refetch] = useAllUsers();
  const axiosSecure = useAxiosSecure();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [monthNo,setMonthNo]=useState(null)
  //   console.log(users);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  useEffect(()=>{
    function getMonthNumber(selectedMonth) {
      const monthIndex = months.indexOf(selectedMonth);
      if (monthIndex === -1) {
        throw new Error("Invalid month name");
      }
      return monthIndex + 1; // Adding 1 because months are 1-indexed
    }
    setMonthNo(getMonthNumber(selectedMonth))
  },[selectedMonth])
  // console.log(monthNo)
  //   handleDetails
  const handleDetails = (item) => {
    console.log(item.row.original);
  };
  //   handle verified
  const toggleVerified = (userId, isVerfied) => {
    axiosSecure.patch(`/users/${userId}`, { isVerfied }).then((res) => {
      // console.log(res);
      refetch();
    });
  };

  // handle payment
  const handlePayClick = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };
  

  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.row.index + 1}</p>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "bank_account_no",
      header: "Bank Account",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "isVerfied",
      header: "Verified",
      cell: (props) => {
        const isVerified = props.row.original.isVerfied;
        return (
          <button
            className={`btn ${
              isVerified ? "bg-custom_Dark text-white hover:bg-custom_Dark" : ""
            }`}
            onClick={() =>
              toggleVerified(
                props.row.original._id,
                props.row.original.isVerfied
              )
            }
          >
            {isVerified ? (
              <MdDone className="text-lg" />
            ) : (
              <RxCross1 className="text-lg" />
            )}
          </button>
        );
      },
    },
    {
      accessorKey: "pay",
      header: "Pay",
      cell: (props) => {
        const isVerified = props.row.original.isVerfied;
        return (
          <button
            className={`btn ${
              isVerified
                ? "bg-custom_Dark text-white  hover:bg-custom_Dark transform hover:scale-105"
                : "btn-disabled"
            }`}
            disabled={!isVerified}
            onClick={() => handlePayClick(props.row.original)}
          >
            Pay
          </button>
        );
      },
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: (props) => (
        <Link to={`employee-detail/${props?.row?.original?._id}`}>
        <p onClick={() => handleDetails(props)} className="btn">
          Details
        </p>
        </Link>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Tekup - Employee List</title>
      </Helmet>
      <DashboardHeader text={"Employee List"}></DashboardHeader>
      <div className="overflow-auto w-full">
        <table className="table w-full border">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-custom_grey text-lg" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{header.column.columnDef.header}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && selectedEmployee && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box">
            <h3 className="font-bold text-xl">Pay : {selectedEmployee.name}</h3>
            <p className="pt-4 text-lg font-medium">
              Salary: {selectedEmployee.salary}
            </p>
            <p className="pb-4 text-lg font-medium">
              Bank Account No: {selectedEmployee.bank_account_no}
            </p>
            <label htmlFor="month" className="block mb-2">Select Month:</label>
            <select
                id="month"
                className="input input-bordered w-full"
                value={selectedMonth}
                required
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="" disabled>Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
              <div className=" mt-2 mb-4">
              <label htmlFor="year" className="block mb-2">Enter Year:</label>
              <input
                type="number"
                id="year"
                className="input input-bordered w-full"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                min="2000"
                max={new Date().getFullYear()}
              />
              {/* checkout form */}
              <div className="mt-5">
              <Elements stripe={stripePromise}>
              <CheckoutForm employeeName={selectedEmployee?.name} salary={selectedEmployee?.salary} bank_account_no={selectedEmployee?.bank_account_no} selectedMonth={selectedMonth} selectedYear={selectedYear} employeeId={selectedEmployee?._id} employeeEmail={selectedEmployee?.email} refetch={refetch} setModalOpen={setModalOpen} monthNo={monthNo}></CheckoutForm>
              </Elements>
              </div>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setModalOpen(false)}>
                Close
              </button>
              {/* <button className="btn btn-primary" onClick={handlePaySubmit}>
                Pay
              </button> */}
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EmployeeList;
