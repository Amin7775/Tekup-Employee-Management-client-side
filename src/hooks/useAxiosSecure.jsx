import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://tekup-server.vercel.app'
})

const useAxiosSecure = () => {
    const {logOut}=useAuth()
    const navigate = useNavigate()


    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log("request stopped by interceptors,", token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        // do something with request error
        // console.log(error, "from secure")
        return Promise.reject(error);
    })

    // intercept 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status = error.response.status;
        console.log("status error in the interceptor", status)
        if(status===401 || status===403){
            await logOut()
            navigate('/login')
        }


        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;