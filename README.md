
## GitFormed Frontend

This is the frontend of `GitFormed` project. You will find the backend [here](https://github.com/mdrobin45/GitFormed-Server)
## Run Locally

Clone the project

```bash
https://github.com/mdrobin45/GitFormed-Client.git
```

Go to the project directory

```bash
cd GitFormed-Client
```

Install dependencies

```bash
npm install
```



#### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`VITE_FIREBASE_APIKEY`

`VITE_FIREBASE_AUTHDOMAIN`

`VITE_FIREBASE_PROJECTID`

`VITE_FIREBASE_STORAGEBUCKET`

`VITE_FIREBASE_MESSAGINGSENDERID`

`VITE_FIREBASE_APPID`

`VITE_SERVER_API`

For easier to setup environment variables, you can just rename `.env.development` file to `.env` from root of the project directory.

**Please Note:** You may need to edit `VITE_SERVER_API` from `.env.development` file base on your port of running server.

#### Start Server
  Open project folder in terminal and run following command
```bash
  npm run dev
```
## Used Technology



**Technologies:** React, React Hook Form, Firebase, React Router Dom v6


