import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const WorkProgress = () => {
  const axiosSecure = useAxiosSecure();
  const [workData, setWorkData] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  useEffect(() => {
    axiosSecure.get(`/allworks?selectedMonth=${selectedMonth}&selectedName=${selectedName}`).then((res) => {
      setWorkData(res.data);
    });
  }, [selectedMonth,selectedName]);
  const uniqueNames = [
    ...new Set(workData.map((singleWork) => singleWork.employeeName)),
  ];
//   console.log(workData, uniqueNames);
  // table
  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.row.index + 1}</p>,
    },
    {
      accessorKey: "employeeName",
      header: "Employee Name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "employeeEmail",
      header: "Employee Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "task",
      header: "Task",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "workingHour",
      header: "Working Hour",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];
  const table = useReactTable({
    data: workData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
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
//   console.log(selectedMonth,selectedName)
  const handleSubmit = () => {
    setSelectedName("");
    setSelectedMonth("");
  };
  return (
    <div className="min-h-screen">
      <DashboardHeader text={"Work Progress"}></DashboardHeader>
      {/* form */}
      <div className="bg-custom_grey py-6 px-5 md:px-10 border border-b-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* name */}
          <div className="flex gap-1">
            <select
              id="employeeName"
              name="EmployeeName"
              className="input input-bordered w-full"
              value={selectedName}
              required
              onChange={(e) => setSelectedName(e.target.value)}
            >
              <option value="" disabled>
                Select Name
              </option>
              {uniqueNames?.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          {/* select month */}
          <div className="flex gap-1">
            <select
              id="months"
              name="months"
              className="input input-bordered w-full"
              value={selectedMonth}
              required
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled>
                Select Month
              </option>
              {months?.map((month, index) => (
                <option key={index} value={index+1}>
                  {index+1}. {month}
                </option>
              ))}
            </select>
          </div>
          
          
          <div className="w-full flex ">
            <p
              className="btn w-full bg-custom_Dark text-white hover:bg-custom_Dark transform hover:scale-105"
              onClick={handleSubmit}
            >
              Reset
            </p>
          </div>
        </div>
      </div>
      {/* table */}
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

export default WorkProgress;
