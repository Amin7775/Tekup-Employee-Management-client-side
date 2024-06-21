import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import UseAllEmployees from "../../../../hooks/UseAllEmployees";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { LiaHireAHelper } from "react-icons/lia";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaMoneyCheck } from "react-icons/fa";
import { useState } from "react";

const AllEmployeeList = () => {
  const [allEmployeesData, refetch] = UseAllEmployees();
  //   console.log(allEmployeesData);
  const axiosSecure = useAxiosSecure();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [tableView, setTableView] = useState(true);
  // handle make hr
  const handleMakeHr = (rowInfo) => {
    // console.log(rowInfo.row.original);
    const id = rowInfo?.row?.original?._id;
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make HR!",
    }).then((result) => {
      if (result.isConfirmed) {
        const isHR = "HR";
        axiosSecure.patch(`/employees/${id}`, { isHR }).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Role Changed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        });
      }
    });
  };

  const handleFire = (rowInfo) => {
    const id = rowInfo?.row?.original?._id;
    const fired = rowInfo?.row?.original?.isFired;
    console.log(id, fired);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Fire!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/employees/fire/${id}`, { fired }).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Role Changed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        });
      }
    });
  };

  const handleSalary = (rowInfo) => {
    setSelectedEmployee(rowInfo.row?.original);
    setModalOpen(true);
  };
  const handleNewSalary = (e) => {
    e.preventDefault();
    const newSalary = e.target.newSalary.value;
    // console.log(newSalary);
    const previousSalary = parseInt(selectedEmployee.salary);
    // console.log(previousSalary);
    // console.log(selectedEmployee)
    if (newSalary < previousSalary) {
      Swal.fire({
        title: "Error",
        text: "New salary must be more than previous salary",
        icon: "error",
      });
    } else {
      axiosSecure
        .patch(`/employee/salary/${selectedEmployee?._id}`, { newSalary })
        .then((res) => {
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Updated",
              text: `New updated salary is : ${newSalary}`,
              icon: "success",
            });
            refetch();
            setModalOpen(false);
          }
        });
    }
  };

  //   handle view
  const handleView = () => {
    setTableView(!tableView);
  };
  // table
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
      accessorKey: "designation",
      header: "Designation",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "role",
      header: "Make HR",
      cell: (props) => {
        const isHR = props.row.original.role === "HR";
        return (
          <button
            className={`btn ${
              isHR
                ? "bg-custom_Dark text-white hover:bg-custom_Dark"
                : "bg-custom_Dark text-white hover:bg-custom_Dark   "
            }`}
            onClick={() => handleMakeHr(props)}
            disabled={isHR}
          >
            {isHR ? <p>HR</p> : <MdDone className="text-lg" />}
          </button>
        );
      },
    },
    {
      accessorKey: "isFired",
      header: "Fire",
      cell: (props) => {
        const isFired = props.row.original.isFired;
        // console.log(isFired);
        return (
          <div>
            {isFired ? (
              <div>
                <p className=" text-red-500 font-medium ml-2">Fired</p>
              </div>
            ) : (
              <div>
                <button
                  className="btn"
                  onClick={() => handleFire(props)}
                  disabled={isFired}
                >
                  <RxCross1 className="text-lg text-red-500 font-bold" />
                </button>
              </div>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "salary",
      header: "Adjust Salary",
      cell: (props) => {
        return (
          <button className="btn ml-5" onClick={() => handleSalary(props)}>
            <FaMoneyCheck className="text-lg font-bold" />
          </button>
        );
      },
    },
  ];
  const table = useReactTable({
    data: allEmployeesData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="min-h-screen">
      <DashboardHeader text={"All Employees"}></DashboardHeader>
      <div className="overflow-auto w-full mt-16">
        <div className="flex justify-end px-5">
          <button
            onClick={handleView}
            className="btn my-5 bg-custom_Dark text-white hover:bg-custom_Dark transform hover:scale-105"
          >
            Change View
          </button>
        </div>
        {tableView ? (
          <div>
            <table className="table w-full border">
              <thead className="w-full">
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 md:gap-6 lg:gap-10">
            {allEmployeesData?.map((singleEmployeeData) => (
              <div
                key={singleEmployeeData._id}
                className="card bg-base-100 drop-shadow-sm border"
              >
                <figure>
                  <img
                    src={singleEmployeeData.photoURL}
                    className="h-80 w-full object-cover"
                    alt="image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singleEmployeeData.name}</h2>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Email: </span>
                      {singleEmployeeData.email}
                    </p>
                    <p>
                      <span className="font-medium">Designation: </span>
                      {singleEmployeeData.designation}
                    </p>
                    <p>
                      <span className="font-medium">Role: </span>
                      {singleEmployeeData.role}
                    </p>
                    <p>
                      <span className="font-medium">salary: </span>
                      {singleEmployeeData.salary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* modal */}
      {modalOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box border-2 bg-custom_grey">
            <h3 className="font-bold text-xl">
              Current Salary : {selectedEmployee?.salary}
            </h3>

            <form
              className="mt-5 flex items-center gap-2"
              onSubmit={handleNewSalary}
            >
              <input
                type="number"
                name="newSalary"
                placeholder="Enter New Salary"
                className="w-full py-2.5 px-3 rounded-lg border-2 drop-shadow-sm"
              />
              <div className="">
                <input
                  type="submit"
                  className="btn  bg-custom_Dark text-white px-5"
                  value="Update"
                />
              </div>
            </form>
            {/* <label htmlFor="month" className="block mb-2">New Salary:</label>   */}
            <div className="modal-action flex justify-center">
              <button
                className="btn bg-custom_Dark px-5 text-white"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AllEmployeeList;
