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

// Retrieve user from DB
export const getUser = async (email) => {
   const { data } = await axiosRequest.get(`/user/${email}`);
   return data;
};

// Check if repo is already exist
export const findRepo = async (repoName, email) => {
   const { data } = await axiosRequest.get(
      `/repositories/find?repoName=${repoName}&email=${email}`
   );
   return data;
};

// Create new repository
export const createNewRepo = async (repoInfo) => {
   const { data } = await axiosRequest.post("/repositories", repoInfo);
   return data;
};

// Get all repositories
export const getRepositories = async () => {
   const { data } = await axiosRequest.get("/repositories");
   return data;
};

// Get repos by user email
export const getRepoByUser = async (email) => {
   const { data } = await axiosRequest.get(`/repositories/user?email=${email}`);
   return data;
};

// Create new pull request
export const createNewPull = async (pullInfo) => {
   const { data } = await axiosRequest.post("/pull-request", pullInfo);
   return data;
};

// Get pull request by repo id
export const getPullRequests = async (repoId) => {
   const { data } = await axiosRequest.get(`/pull-request?repoId=${repoId}`);
   return data;
};

// Update repo watcher
export const updateRepoWatcher = async (userId, repoId) => {
   const { data } = await axiosRequest.put(
      `/repositories/watcher?repoId=${repoId}`,
      { userId }
   );

   return data;
};

// Remove watcher
export const removeWatcher = async (userId, repoId) => {
   const { data } = await axiosRequest.put(
      `/repositories/remove-watcher?repoId=${repoId}`,
      { userId }
   );

   return data;
};

// Get user watching repositories
export const userWatchingRepos = async (userId) => {
   const { data } = await axiosRequest.get(
      `/repositories/user-watching?userId=${userId}`
   );
   return data;
};
