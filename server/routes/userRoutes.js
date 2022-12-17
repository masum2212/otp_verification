import express from 'express'
const router = express.Router();
import UserController from '../controller/userController.js';


router.post('/login',UserController.userLogin);


export default router