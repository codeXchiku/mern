 import { Router } from "express";
 import { getAllUsers,getAllContacts } from "../controller/admin-controller.js";
 import userMiddleware from "../middleware/auth-middleware.js";
import adminMiddleware from "../middleware/admin-middleware.js";

 const AllUserRouter  = Router();

 AllUserRouter.route("/users").get(userMiddleware,adminMiddleware,getAllUsers)
 AllUserRouter.route("/contacts").get(userMiddleware,adminMiddleware,getAllContacts)

 export default AllUserRouter;