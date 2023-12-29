import axios from "axios";

const axiosRequest = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
});

// Check if user already exist in database
export const findUser = async (username) => {
   const { data } = await axiosRequest.get(`/user?username=${username}`);
   return data;
};

// Save new registered user to database
export const saveUserToDB = async (userInfo) => {
   const { data } = await axiosRequest.post("/user", userInfo);
   return data;
};

// Create new repository
export const createNewRepo = async (repoInfo) => {
   const { data } = await axiosRequest.post("/repositories", repoInfo);
   return data;
};
