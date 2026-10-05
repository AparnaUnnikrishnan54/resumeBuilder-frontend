import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'https://resumebuilder-backend-msvq.onrender.com',
    timeout:5000
})
// response interceptor global common error

axiosInstance.interceptors.response.use(


    (response)=>{
        return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("unauthorised access...pleaselogin");
                
            }
            else if(status==404){
                console.log("api not found");
                
            }
            else if(status==500){
                console.log("server error!!");
                
            }
            else if(error.request){
                console.log("no response frm server");
                
            }
            else{
                console.log("error:"+ error.message);
                
            }
            return Promise.reject(err)
        }
    }
)
export default axiosInstance