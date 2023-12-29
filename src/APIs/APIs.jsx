import axios from "axios";

const axiosRequest = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
});

export const saveUserToDB = async (userInfo) => {
   const { data } = await axiosRequest.post("/user", userInfo);
   return data;
};
