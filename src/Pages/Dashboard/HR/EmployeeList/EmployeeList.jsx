import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useAllUsers from "../../../../hooks/useAllUsers";
import { RxCross1 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// stripe key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const EmployeeList = () => {
  const [users, refetch] = useAllUsers();
  const axiosSecure = useAxiosSecure();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
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
  //   handleDetails
  const handleDetails = (item) => {
    console.log(item.row.original);
  };
  //   handle verified
  const toggleVerified = (userId, isVerfied) => {
    axiosSecure.patch(`/users/${userId}`, { isVerfied }).then((res) => {
      console.log(res);
      refetch();
    });
  };

  // handle payment
  const handlePayClick = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };
  // const handlePaySubmit = () => {
  //   Handle the payment logic here, e.g., update the database, etc.
  //   console.log(
  //     `Paying ${selectedEmployee.salary} to ${selectedEmployee.name} for ${selectedMonth}/${selectedYear}`
  //   );
  //   setModalOpen(false);
  // };

  const columns = [
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
        <p onClick={() => handleDetails(props)} className="btn">
          Details
        </p>
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
      <div className="overflow-auto w-full">
        <table className="table w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
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
              <div className="mb-4">
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
              <CheckoutForm employeeName={selectedEmployee.name} salary={selectedEmployee.salary} bank_account_no={selectedEmployee.bank_account_no} selectedMonth={selectedMonth} selectedYear={selectedYear}></CheckoutForm>
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
