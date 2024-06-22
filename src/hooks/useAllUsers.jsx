import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    // tan stack query 
    const axiosSecure = useAxiosSecure();
    const {refetch, data: users = [],isLoading : usersLoading } = useQuery({
        queryKey: ['users'], 
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/employees`)
            return res.data;
        }
    })
    return [users,refetch,usersLoading]
};

export default useAllUsers;