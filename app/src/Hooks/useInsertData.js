import { baseUrl } from "../Api/baseUrl";

const useInsertData = async (url, params) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    const res = await baseUrl.post(url, params, config);

    return res;
}

const useInsertImage = async (url, parmas) => {
    const config = {
        headers:{"Content-Type":"multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}`}
    }
    
    const res = await baseUrl.post(url, parmas ,config);

    return res;
}

export {useInsertData, useInsertImage};