import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useContactUsData = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: ContactUsInfo = [],isLoading : ContactUsLoading } = useQuery({
        queryKey: ['contact-Us'], 
        queryFn: async () =>{
            const res = await axiosSecure.get(`/contactUs`)
            return res.data;
        }
    })
    return [ContactUsInfo,refetch,ContactUsLoading]
};

export default useContactUsData;