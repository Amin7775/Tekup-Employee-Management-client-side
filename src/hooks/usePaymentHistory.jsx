import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {
   // tan stack query 
   const axiosSecure = useAxiosSecure();
   const {refetch, data: payments = [],isLoading : paymentsLoading } = useQuery({
       queryKey: ['cart'], 
       queryFn: async () =>{
           const res = await axiosSecure.get(`/payment-history`)
           return res.data;
       }
   })
   return [payments,refetch,paymentsLoading]
};

export default usePaymentHistory;