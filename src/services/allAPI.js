import serverUrl from "./baseURL"
import commonAPI from "./commonAPI"



//upload video  API must called by Add component
export const uploadVideoAPI = async(uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}allVideos`,uploadVideo)   
}


//get all videos API must called by view component
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}allVideos`,"")
}


//store watch history api must called by VideoCard
export const storeHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}history`,videoDetails)
}

//gethistory api must called history component
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET", `${serverUrl}history`,"")
}

//removehistoryAPI api must called history component
export const removeHistoryAPI = async (historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}history/${historyId}`,{})
}

//remove video api  called by videoCard component
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE", `${serverUrl}allVideos/${videoId}`,{})
}

//add category api
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}categories`,categoryDetails)
}
//getallcategory api 
export const getCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("GET",`${serverUrl}categories`,categoryDetails)
}
//removecategory api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}categories/${categoryId}`,{})
}