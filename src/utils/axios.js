import axioss from "axios";
export const axios=axioss.create({
    baseURL:"http://localhost:8080",
    withCredentials:false,
    header:{
        tokenX:"myToken",
        "Content-Type":"application/json"
    }
});