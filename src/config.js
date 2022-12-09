import mongodb from "./database/mongodb/database.js";

export default (() => {
  return {
    databaseService: mongodb()
    //other service eg. service for image upload
  }
})();
