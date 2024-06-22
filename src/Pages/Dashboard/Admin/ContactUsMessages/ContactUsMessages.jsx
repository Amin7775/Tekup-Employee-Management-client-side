import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useContactUsData from "../../../../hooks/useContactUsData";
import DashboardHeader from "../../../../Components/DashBoardHeader/DashboardHeader";
import { Helmet } from "react-helmet-async";

const ContactUsMessages = () => {
  const [ContactUsInfo, refetch] = useContactUsData();
  const columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.row.index + 1}</p>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "message",
      header: "Message",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];
  const table = useReactTable({
    data: ContactUsInfo,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Helmet>
        <title>Tekup - Messages</title>
      </Helmet>
      <DashboardHeader text={"Contact Us Messages"}></DashboardHeader>
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

export default ContactUsMessages;
