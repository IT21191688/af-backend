import { Router } from "express";
import UserMiddleware from "../middleware/user-middleware";

import {
  RegisterUser,
  GetUserProfile,
  GetAllUsers,
  EditUserDetails,
  EditUserDetailsUserId,
  UserLogin,
  DeleteUserDetails,
  GetOneUserDetails,
  // getAuth,
} from "../controller/user-controller";
import constants from "../utils/constants";

const UserRouter = Router();

UserRouter.post("/register", RegisterUser);

UserRouter.post("/login", UserLogin);

UserRouter.get(
  "/profile",
  UserMiddleware.authorize([constants.USER.ROLES.USER]),
  GetUserProfile
);

UserRouter.get(
  "/getAllUser",
  UserMiddleware.authorize([
    constants.USER.ROLES.USER,
    constants.USER.ROLES.ADMIN,
  ]),
  GetAllUsers
);

UserRouter.put(
  "/updateUser",
  UserMiddleware.authorize([constants.USER.ROLES.USER]),
  EditUserDetails
);

UserRouter.put(
  "/updateUser/:userId",
  UserMiddleware.authorize([constants.USER.ROLES.USER]),
  EditUserDetailsUserId
);

UserRouter.delete(
  "/deleteUser/:userId",
  UserMiddleware.authorize([
    constants.USER.ROLES.USER,
    constants.USER.ROLES.ADMIN,
  ]),
  DeleteUserDetails
);

UserRouter.get(
  "/getOneUser/:userId",
  UserMiddleware.authorize([constants.USER.ROLES.USER]),
  GetOneUserDetails
);
export default UserRouter;
