import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseAllEmployees = () => {
   // tan stack query 
   const axiosSecure = useAxiosSecure();
   const {refetch, data: allEmployeesData = [],isLoading : employeesLoading } = useQuery({
       queryKey: ['allEmployees'], 
       queryFn: async () =>{
           const res = await axiosSecure.get(`/employees`)
           return res.data;
       }
   })
   return [allEmployeesData,refetch,employeesLoading]
};

export default UseAllEmployees;