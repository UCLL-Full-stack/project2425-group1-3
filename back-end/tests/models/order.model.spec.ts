
import { describe, it, expect } from '@jest/globals';
import { Order } from '../../model/order';
import { Product } from '../../model/product';
import { User } from '../../model/user';
import { Role } from '../../types';

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
      user: {
          id: 1, name: 'User 1',
          email: '',
          password: '',
          role: 'user',
          phone_number: '',
          birth_date: new Date(),
          getId: function (): number | undefined {
              throw new Error('Function not implemented.');
          },
          getName: function (): string {
              throw new Error('Function not implemented.');
          },
          getBirthDate: function (): Date {
              throw new Error('Function not implemented.');
          },
          getPassword: function (): string {
              throw new Error('Function not implemented.');
          },
          getPhoneNumber: function (): string {
              throw new Error('Function not implemented.');
          },
          getEmail: function (): string {
              throw new Error('Function not implemented.');
          },
          getRole: function (): Role {
              throw new Error('Function not implemented.');
          },
          validate: function (user: { name: string; birth_date: Date; password: string; phone_number: string; email: string; role: Role; }): void {
              throw new Error('Function not implemented.');
          },
          equals: function (user: User): boolean {
              throw new Error('Function not implemented.');
          }
      },
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
      user: {
        id: 1,
        name: 'User 1',
        email: '',
        password: '',
        role: 'user',
        phone_number: '',
        birth_date: new Date(),
        getId: function (): number | undefined {
            throw new Error('Function not implemented.');
        },
        getName: function (): string {
            throw new Error('Function not implemented.');
        },
        getBirthDate: function (): Date {
            throw new Error('Function not implemented.');
        },
        getPassword: function (): string {
            throw new Error('Function not implemented.');
        },
        getPhoneNumber: function (): string {
            throw new Error('Function not implemented.');
        },
        getEmail: function (): string {
            throw new Error('Function not implemented.');
        },
        getRole: function (): Role {
            throw new Error('Function not implemented.');
        },
        validate: function (user: { name: string; birth_date: Date; password: string; phone_number: string; email: string; role: Role; }): void {
            throw new Error('Function not implemented.');
        },
        equals: function (user: User): boolean {
            throw new Error('Function not implemented.');
        }
      },
      products: [product1, product2],
    });

    order.getTotalPrice();

    expect(order.getTotalPrice()).toBe(300);
  });
});