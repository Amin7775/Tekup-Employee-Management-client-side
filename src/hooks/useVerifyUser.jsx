
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useVerifyUser = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: user = [],isLoading : userLoading } = useQuery({
        queryKey: ['user'], 
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user`)
            return res.data;
        }
    })
    return [user,refetch,userLoading]
};

export default useVerifyUser;