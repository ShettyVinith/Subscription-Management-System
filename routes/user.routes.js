import { Router } from "express";
import {
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "CREATE new users" }));

userRouter.put("/:id", authorize, updateUser);

userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user" }));

export default userRouter;
