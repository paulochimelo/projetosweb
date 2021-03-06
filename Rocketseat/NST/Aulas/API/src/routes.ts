import {Router} from 'express';
import {UserControler} from "./controllers/UserController";

const router = Router();

const userController = new UserControler;

router.post("/users", userController.create);

export{router};