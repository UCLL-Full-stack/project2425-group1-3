import express, { Request, Response, NextFunction } from 'express';
import orderService from '../service/order.service';
import { isAuthenticated } from '../util/jwt';

const orderRouter = express.Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create an order for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Order created successfully.
 *       400:
 *         description: Error creating order.
 */
orderRouter.post('/', isAuthenticated, async (req: Request, res: Response, next: NextFunction) => {
    const request = req as Request & { auth: { email: string } };
    const { email } = request.auth;

    try {
        const newOrder = await orderService.createOrder(email);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve all orders for the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of user orders.
 *       400:
 *         description: Error retrieving orders.
 */
orderRouter.get('/', isAuthenticated, async (req: Request, res: Response, next: NextFunction) => {
    const request = req as Request & { auth: { email: string } };
    const { email } = request.auth;

    try {
        const orders = await orderService.getOrdersByUserEmail(email);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ status: 'error', errorMessage: (error as Error).message });
    }
});

export { orderRouter };
