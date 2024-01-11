import axios from "axios";
import useAuth from "./useAuth";

const useAPI = () => {
   const { user } = useAuth();
   const axiosRequest = axios.create({
      baseURL: import.meta.env.VITE_SERVER_API,
   });

   // Check if user already exist in database
   const findUser = async (username) => {
      const { data } = await axiosRequest.get(`/user?username=${username}`);
      return data;
   };

   // Save new registered user to database
   const saveUserToDB = async (userInfo) => {
      const { data } = await axiosRequest.post("/user", userInfo);
      return data;
   };

   // Retrieve user from DB
   const getUser = async (email) => {
      const { data } = await axiosRequest.get(`/user/${email}`);
      return data;
   };

   // Check if repo is already exist
   const findRepo = async (repoName, email) => {
      const { data } = await axiosRequest.get(
         `/repositories/find?repoName=${repoName}&email=${email}`
      );
      return data;
   };

   // Create new repository
   const createNewRepo = async (repoInfo) => {
      const { data } = await axiosRequest.post("/repositories", repoInfo);
      return data;
   };

   // Get all repositories
   const getRepositories = async () => {
      const { data } = await axiosRequest.get("/repositories");
      return data;
   };

   // Get repos by user email
   const getRepoByUser = async (email) => {
      const { data } = await axiosRequest.get(
         `/repositories/user?email=${email}`
      );
      return data;
   };

   // Create new pull request
   const createNewPull = async (pullInfo) => {
      const { data } = await axiosRequest.post("/pull-request", pullInfo);
      return data;
   };

   // Get pull request by repo id
   const getPullRequests = async (repoId) => {
      const { data } = await axiosRequest.get(`/pull-request?repoId=${repoId}`);
      return data;
   };

   // Update repo watcher
   const updateRepoWatcher = async (userId, repoId) => {
      const { data } = await axiosRequest.put(
         `/repositories/watcher?repoId=${repoId}`,
         { userId }
      );

      return data;
   };

   // Remove watcher
   const removeWatcher = async (userId, repoId) => {
      const { data } = await axiosRequest.put(
         `/repositories/remove-watcher?repoId=${repoId}`,
         { userId }
      );

      return data;
   };

   // Get user watching repositories
   const userWatchingRepos = async (userId) => {
      const { data } = await axiosRequest.get(
         `/repositories/user-watching?userId=${userId}`
      );
      return data;
   };

   // Repository filter
   const filterRepository = async (repo, sortBy, myWatching, pageNumber) => {
      const { data } = await axiosRequest.get(
         `/repositories/sort?email=${user?.email}&repo=${repo}&sortBy=${sortBy}&myWatching=${myWatching}&pageNumber=${pageNumber}`
      );
      return data;
   };

   // Pull notification
   const pullNotification = async (repoId) => {
      const { data } = await axiosRequest.get(
         `/pull-request/notification?repoId=${repoId}`
      );
      return data;
   };

   return {
      findUser,
      filterRepository,
      pullNotification,
      userWatchingRepos,
      removeWatcher,
      updateRepoWatcher,
      getPullRequests,
      createNewPull,
      getRepoByUser,
      getRepositories,
      createNewRepo,
      findRepo,
      getUser,
      saveUserToDB,
   };
};

export default useAPI;
