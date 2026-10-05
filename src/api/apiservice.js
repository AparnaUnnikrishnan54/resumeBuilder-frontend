import axiosInstance from "./axiosinstance";

//create function for api call
const apiservice=async (httpmethod,url,reqbody)=>{
// httpmethod → GET, POST, PUT, DELETE
// url → API endpoint
// reqbody → data to send to the backend

    // Creates the Axios request configuration.
    const reqConfig={
        method:httpmethod,
        url,
        data:reqbody
    }

    try{
        // Axios sends the request and waits for the response
        const result=await axiosInstance (reqConfig)
        return result
    }
    //If the API request fails, the error is returned
    catch(err){
        return err
    }
}
export default apiservice