import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
    const [payments,refetch]=usePaymentHistory()
    console.log(payments)

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

    return (
        <div>
            
        </div>
    );
};

export default PaymentHistory;