import apiService from "../api/apiServices";

//saveResumeAPI: add resume details to JSON server
export const saveResumeAPI=async(resumeDetails)=>{
    return await apiService('POST',"/resumes",resumeDetails)
}

// viewResumeAPI: called by view resume component when resume is added
export const viewResumeAPI=async(resumeId)=>{
    return await apiService('GET',`/resumes/${resumeId}`,{})
}


// allResumesAPI : called by allresume component when resume is added
export const allResumesAPI=async()=>{
    return await apiService('GET',`/resumes`,{})
}

// downloadResumeAPI: called by viewresume component when resume get displayed
export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST', `/downloads`,resumeDetails)
}

//getAllDownloadsResumeAPI: called by downloadsccomponent when resume get downloaded

export const getAllDownloadsResumeAPI = async()=>{
    return await apiService('GET', `/downloads`,{})
}

// updateResumeAPI: Called by edit component when resume got changes

export const updateResumeAPI = async(resumeId,resumeDetails)=>{
    return await apiService('PUT', `/resumes/${resumeId}`,resumeDetails)
}

/////deleteResumeAPI: Called by all resume components when delete button clicked

export const deleteResumeAPI = async(resumeId)=>{
    return await apiService('DELETE', `/resumes/${resumeId}`,{})
}