import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const EmployeeDetails = () => {
  const { employeeID } = useParams();
  // console.log(employeeID);
  // employee details - single user info
  const axiosSecure = useAxiosSecure();
  //   user info fetch
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
  // console.log(singleUser);
  //   payment info fetch
  const { data: singleUserPayment = [] } = useQuery({
    queryKey: ["singleUserPayment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${employeeID}`);
      return res.data;
    },
  });
  // console.log(singleUserPayment);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="min-h-screen">
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
      <div className="mt-10 overflow-auto">
        {singleUserPayment.length == 0 ? (
          <>
            <div className="h-full w-full flex justify-center items-center text-2xl font-semibold min-h-[50vh]">
              No Payment Data Found
            </div>
          </>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-center mt-10 mb-14">
              Payment History
            </h1>
            <div className="w-full flex justify-center">
              <BarChart
                width={1000}
                height={300}
                data={singleUserPayment}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="paidFor" />
                <YAxis />
                <Bar
                  dataKey="salary"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {singleUserPayment.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
