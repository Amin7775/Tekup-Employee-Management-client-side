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

const AllEmployeeList = () => {
  const [allEmployeesData, refetch] = UseAllEmployees();
  //   console.log(allEmployeesData);
  const axiosSecure = useAxiosSecure();
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

  const handleFire = (rowInfo) =>{
    const id = rowInfo?.row?.original?._id;
    const fired = rowInfo?.row?.original?.isFired;
    console.log(id,fired)
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
  }

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
        console.log(isFired);
        return (
          <div>
            {isFired ? (
              <div><p className=" text-red-500 font-medium ml-2">Fired</p></div>
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
      cell: (props) => <p>{props.getValue()}</p>,
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
      <div className="overflow-auto w-full">
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployeeList;
