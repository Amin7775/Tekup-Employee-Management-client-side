import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [currentPage, setCuerrentPage] = useState(0);
//   const [payments, refetch] = usePaymentHistory();
  const [payments,setPayment] = useState([])
  const axiosSecure = useAxiosSecure();
  //   pagination
  const paymentPerPage = 5;
  const [paymentCount, setPaymentCount] = useState(0);
  //   console.log(payments);
  useEffect(() => {
    axiosSecure.get(`/paymentCount`).then((res) => {
      setPaymentCount(res.data.count);
    });
  }, [currentPage]);
  const numberOfPages = Math.ceil(paymentCount / paymentPerPage);
  const pages = [...Array(numberOfPages).keys()];
  //   console.log(paymentCount, pages);
  useEffect(()=>{
    axiosSecure.get(`/payment-history?page=${currentPage}`)
    .then(res=>{
        setPayment(res.data)
    })
  },[currentPage])
  //   table
  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.row.index + 1}</p>,
    },
    {
      accessorKey: "paymentMonth",
      header: "Month",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "paymentYear",
      header: "Year",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "salary",
      header: "Amount",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "transactionId",
      header: "Transaction Id",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  const table = useReactTable({
    data: payments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="">
      <Helmet>
        <title>Tekup - Payment History</title>
      </Helmet>
      <DashboardHeader text={"Payment History"}></DashboardHeader>
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
        {/* pagination btn */}
        <div className="flex md:justify-center my-5 flex-wrap gap-4">
          {pages.length > 1 &&
            pages?.map((page, id) => (
              <button
                onClick={() => setCuerrentPage(page)}
                className={
                  currentPage == page
                    ? `selected bg-custom_Dark text-white drop-shadow-sm px-2 py-1 text-sm`
                    : `bg-gray-300 drop-shadow-sm px-2 py-1 text-sm`
                }
                key={id}
              >
                {page+1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
