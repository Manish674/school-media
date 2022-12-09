import express from "express";
import apiRoute from "./router/index.js";
import projectDependencies from "./config.js";

const app = express();

projectDependencies.databaseService.connect().then(() => {
  app.use('/api', apiRoute(projectDependencies))

  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
}).catch((e) => console.log("There is something wrong with database", e));
  
// connect()
//   .then(() => {

//     app.use('/api', apiRoute(projectDependencies))

//     app.listen(3000, () => {
//       console.log("listening on port 3000");
//     });
//   })
//   .catch((e) => console.log("There is something wrong with database", e));
