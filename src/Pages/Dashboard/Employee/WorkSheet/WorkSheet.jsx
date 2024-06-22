import { useState } from "react";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useWorkData from "../../../../hooks/useWorkData";
import { Helmet } from "react-helmet-async";

const WorkSheet = () => {
  const [worksData, refetch] = useWorkData();
  const [selectedTask, setSelectedTask] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const formTasks = [
    "Sales",
    "Support",
    "Content",
    "Paperwork",
    "Development",
    "Design",
    "Marketing",
    "HR",
    "Finance",
    "Operations",
    "Customer Service",
    "Logistics",
    "Quality Assurance",
    "Training",
    "Research",
    "Administration",
    "Legal",
    "Procurement",
    "IT Support",
    "Maintenance",
  ];
  // console.log(selectedTask);
  //   react date picker
  const [startDate, setStartDate] = useState(new Date());

  //   handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = selectedTask;
    const workingHour = form.workingHour.value;
    const formatDateFn = (date) => {
      const selectedDate = new Date(date);

      return (
        selectedDate.getDate() +
        "/" +
        parseInt(selectedDate.getMonth() + 1) +
        "/" +
        selectedDate.getFullYear()
      );
    };
    const getMonth = (date) => {
      const selectedDate = new Date(date);
      return parseInt(selectedDate.getMonth() + 1);
    };
    const getYear = (date) => {
      const selectedDate = new Date(date);
      return parseInt(selectedDate.getFullYear());
    };
    const date = formatDateFn(startDate);
    const monthOnly = getMonth(startDate);
    const yearOnly = getYear(startDate);
    const workInfo = {
      task,
      workingHour: parseInt(workingHour),
      date: date,
      monthOnly: parseInt(monthOnly),
      yearOnly: parseInt(yearOnly),
      employeeEmail: user?.email,
      employeeName: user?.displayName,
    };
    // console.log(workInfo);
    axiosSecure
      .post("/works", workInfo)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Work Has Been Submitted",
            showConfirmButton: true,
          })
          .then(()=>{
            refetch()
          })
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Please Try Again Later",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Try Again Later",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  //   table
  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.row.index + 1}</p>,
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
    data: worksData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Tekup - Work Sheet</title>
      </Helmet>
      <DashboardHeader text={"Work Sheet"}></DashboardHeader>
      {/* container */}
      <div className="grid grid-cols-1 gap-14">
        {/* form */}
        <div className="bg-custom_grey py-6 px-5 md:px-10">
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-1">
              <select
                id="tasks"
                name="tasks"
                className="input input-bordered w-full"
                value={selectedTask}
                required
                onChange={(e) => setSelectedTask(e.target.value)}
              >
                <option value="" disabled>
                  Select Task
                </option>
                {formTasks.map((task, index) => (
                  <option key={index} value={task}>
                    {task}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="number"
                id="year"
                name="workingHour"
                placeholder="Enter Working Hour"
                className="input input-bordered w-full"
                min="0"
              />
            </div>
            <div className="w-full flex items-center gap-2 overflow-x-hidden">
              <label htmlFor="year" className="">
                Select Date:
              </label>
              <DatePicker
                className="py-2.5 px-2 rounded-lg border-2 "
                name="startDate"
                selected={startDate}
                selectsStart
                startDate={startDate}
                // endDate={endDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/YYYY"
              />
            </div>
            <div className="w-full flex ">
              <input
                className="btn w-full bg-custom_Dark text-white hover:bg-custom_Dark transform hover:scale-105"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
        {/* table */}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
