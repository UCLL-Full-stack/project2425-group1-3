import express, { NextFunction, Request, Response, response } from 'express';
import userService from '../service/user.service';
import { Role, UserInput } from '../types/index';

const userRouter = express.Router();

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get the authenticated user's information.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns user profile info.
 *       400:
 *         description: Error retrieving user info.
 */
userRouter.get('/me', async (req: Request, res: Response, next: NextFunction) => {
    const request = req as Request & { auth: { email: string; role: Role } };
    const { email } = request.auth;

    try {
        const user = await userService.getUserByEmail(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Log in a user and obtain a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email.
 *               password:
 *                 type: string
 *                 description: User password.
 *     responses:
 *       200:
 *         description: Authentication successful with token.
 *       400:
 *         description: Authentication error.
 */
userRouter.post('/login',async (req: Request, res: Response, next: NextFunction) => {

    try {
        const userInput = <UserInput>req.body;
        const respone = await userService.authenticate(userInput);
        res.status(200).json({message: "Authentication succesful", ...respone});
    } catch (error) {
        next(error);
    }
})

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: User created successfully.
 *       400:
 *         description: User creation error.
 */
userRouter.post('/signup',async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userInput = <UserInput>req.body;
        const user = await userService.createUser(userInput);
        res.status(200).json(user);
    } catch (error : any) {
        res.status(400).json({ message: error.message || 'An unexpected error occurred' });        
        next(error);
    }
})

export { userRouter };