import apiservice from "./apiservice";

//api call for adding resume -> called by stepss component
export const addResumeAPI= async(reqBody)=>{
   return await apiservice('POST','/allResumes',reqBody)
   //reqBody is the data in the resume
}
//get single resume api called by view component
export const getResumeAPI=async(resumeId)=>{
   return await apiservice("GET",`/allResumes/${resumeId}`,{})
}

//edit resume api called by edit component
export const editResumeAPI=async(resumeId,reqBody)=>{
   return await apiservice("PUT",`/allResumes/${resumeId}`,reqBody)
}

//add history api called by view component
export const addHistoryAPI=async(reqBody)=>{
   return await apiservice("POST",'/history',reqBody)
}

//get  history api called by history component
export const getHistoryAPI=async()=>{
   return await apiservice("GET",'/history',{})
}

// delete history
export const deleteHistoryAPI=async(historyId)=>{
   return await apiservice("DELETE", `/history/${historyId}`, {})
}