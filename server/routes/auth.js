import express from "express";
import { 
    login, 
    register, 
    getUserByUserName, 
    updateUser, 
    searchUser,
    isFriend,
    setFriendShip,
    confirmFriendShip,
    deleteFriendShip,
    getUserFriendList
} from "../controller/user.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/getuser/:userName", getUserByUserName);
authRouter.put("/update", updateUser);
authRouter.get("/searchuser/:userName", searchUser);
authRouter.get("/isfriend/:user1/:user2", isFriend);
authRouter.post("/setfriendship/:user1/:user2", setFriendShip);
authRouter.post("/confirmfriendship/:user1/:user2", confirmFriendShip);
authRouter.delete("/deletefriendship", deleteFriendShip);
authRouter.get("/getfriendlist/:userName", getUserFriendList);

export default authRouter;