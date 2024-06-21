import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";

const EmployeeDetails = () => {
  const { employeeID } = useParams();
  console.log(employeeID);
  // employee details - single user info
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: singleUser = [],
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["singleUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${employeeID}`);
      return res.data;
    },
  });
  console.log(singleUser);

  return (
    <div>
      <DashboardHeader text={"Employee Information"}></DashboardHeader>
      {/* user info */}
      <div className="bg-custom_grey py-10 px-5 md:px-10 flex flex-col xl:flex-row gap-6">
        {/* image */}
        <div className="  flex-grow-0 mx-auto">
          <img
            className="h-52 rounded-sm border drop-shadow-sm"
            src={singleUser?.photoURL}
            alt="Employee Image"
          />
        </div>
        {/* text */}
        <div className="flex-1">
          <div className="w-full flex flex-col justify-center h-full  space-y-3">
            <p className="text-xl">
              <span className="font-medium">Name : </span>
              {singleUser?.name}
            </p>
            <p className="text-xl">
              <span className="font-medium">Email : </span>
              {singleUser?.email}
            </p>
            <p className="text-xl">
              <span className="font-medium">Designation : </span>
              {singleUser?.designation}
            </p>
            <p className="text-xl">
              <span className="font-medium">Salary : </span>
              {singleUser?.salary}/-
            </p>
            <p className="text-xl">
              <span className="font-medium">Employee Since : </span>
              {singleUser?.CreatedTime}
            </p>
          </div>
        </div>
      </div>
      {/* chart */}
      <div></div>
    </div>
  );
};

export default EmployeeDetails;
