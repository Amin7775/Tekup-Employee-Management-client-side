import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useWorkData = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: worksData = [],isLoading : workDataLoading } = useQuery({
        queryKey: ['works'], 
        queryFn: async () =>{
            const res = await axiosSecure.get(`/works`)
            return res.data;
        }
    })
    return [worksData,refetch,workDataLoading]
};

export default useWorkData;