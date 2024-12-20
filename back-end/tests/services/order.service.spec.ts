
import { describe, it, expect, jest } from '@jest/globals';
import orderService from '../../service/order.service';

describe('Order Service', () => {
  it('should create a new order', async () => {
    jest.spyOn(orderService, 'createOrder').mockResolvedValue({ id: 1, totalPrice: 100 });
    const result = await orderService.createOrder('test@example.com');
    expect(result.id).toBe(1);
    expect(result.totalPrice).toBe(100);
  });

  it('should retrieve orders by user email', async () => {
    jest.spyOn(orderService, 'getOrdersByUserEmail').mockResolvedValue([{ id: 1 }]);
    const orders = await orderService.getOrdersByUserEmail('test@example.com');
    expect(orders.length).toBe(1);
  });
});