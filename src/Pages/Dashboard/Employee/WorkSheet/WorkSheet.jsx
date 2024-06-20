import { useState } from "react";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkSheet = () => {
  const [selectedTask, setSelectedTask] = useState("");
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
  console.log(selectedTask);
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
      console.log("inside");
      return (
        selectedDate.getDate() +
        "/" +
        parseInt(selectedDate.getMonth() + 1) +
        "/" +
        selectedDate.getFullYear()
      );
    };
    const date = formatDateFn(startDate);
    console.log(task, workingHour, date);
  };

  //   const handleChangeDates = (date) =>{
  //     const res = formatDateFn(date)
  //     console.log(res)
  //   }
  return (
    <div className="min-h-screen">
      <DashboardHeader text={"Work Sheet"}></DashboardHeader>
      {/* container */}
      <div className="grid grid-cols-1">
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
        <div></div>
      </div>
    </div>
  );
};

export default WorkSheet;
