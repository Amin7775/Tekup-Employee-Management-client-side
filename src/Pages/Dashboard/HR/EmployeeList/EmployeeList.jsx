import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useAllUsers from "../../../../hooks/useAllUsers";
import { RxCross1 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const EmployeeList = () => {
  const [users,refetch] = useAllUsers();
  const axiosSecure = useAxiosSecure()
//   console.log(users);
//   handleDetails
  const handleDetails = item =>{
    console.log(item.row.original)
  }
//   handle verified
  const toggleVerified = (userId,isVerfied) => {
   axiosSecure.patch(`/users/${userId}`,{isVerfied})
   .then((res)=>{
    console.log(res)
    refetch()
   })
  };

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "bank_account_no",
      header: "Bank Account",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "isVerfied",
      header: "Verified",
      cell: (props) => {
        const isVerified = props.row.original.isVerfied;
        return(
            <button
            className={`btn ${isVerified ? 'bg-custom_Dark text-white hover:bg-custom_Dark' : ''}`}
            onClick={() => toggleVerified(props.row.original._id,props.row.original.isVerfied)}
          >
            {isVerified ? <MdDone className="text-lg" /> : <RxCross1 className="text-lg" />}
          </button>
        )
      },
    },
    {
      accessorKey: "pay",
      header: "Pay",
      cell: (props) => {
        const isVerified = props.row.original.isVerfied;
        return (
          <button
            className={`btn ${isVerified ? 'bg-custom_Dark text-white  hover:bg-custom_Dark transform hover:scale-105' : 'btn-disabled'}`}
            disabled={!isVerified}
          >
            Pay
          </button>
        );
      },
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: (props) => <p onClick={()=>handleDetails(props)} className="btn">a</p>,
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="overflow-auto w-full">
        <table className="table w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
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

export default EmployeeList;
