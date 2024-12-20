
import { describe, it, expect } from '@jest/globals';
import { Order } from '../model/order';
import { Product } from '../model/product';

describe('Order Model', () => {
  it('should create an Order with correct properties', () => {
    const product1 = new Product({
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      rating: 4,
    });

    const product2 = new Product({
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      rating: 5,
    });

    const order = new Order({
      id: 1,
      totalPrice: 300,
      orderDate: new Date(),
      userId: 1,
      products: [product1, product2],
    });

    expect(order.getId()).toBe(1);
    expect(order.getTotalPrice()).toBe(300);
    expect(order.getProducts()).toEqual([product1, product2]);
  });

  it('should calculate totalPrice if applicable', () => {
    const product1 = new Product({
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      rating: 4,
    });

    const product2 = new Product({
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      rating: 5,
    });

    const order = new Order({
      id: 1,
      totalPrice: 0,
      orderDate: new Date(),
      userId: 1,
      products: [product1, product2],
    });

    order.calculateTotalPrice();

    expect(order.getTotalPrice()).toBe(300);
  });
});