import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [payments, refetch] = usePaymentHistory();
  console.log(payments);

  const columns = [
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

export default PaymentHistory;
