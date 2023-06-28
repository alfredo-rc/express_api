import { Router } from 'express';

// import all controllers
import UserController  from '../controllers/userController.js';

const userRoutes = new Router();
const userController = new UserController();

// Add routes
userRoutes.get('/users', userController.get);

export default userRoutes