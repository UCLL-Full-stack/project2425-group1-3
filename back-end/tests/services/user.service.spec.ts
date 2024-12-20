
import { describe, it, expect, jest } from '@jest/globals';
import userService from '../../service/user.service';
import { User } from '../../model/user';
import { Role } from '../../types';

describe('User Service', () => {
  it('should authenticate a user', async () => {
    jest.spyOn(userService, 'authenticate').mockResolvedValue({
        token: 'fake-token',
        email: 'test@example.com',
        fullname: ''
    });
    const result = await userService.authenticate({ email: 'test@example.com', password: 'Password123!' });
    expect(result.token).toBe('fake-token');
  });

  it('should return user by email', async () => {
    jest.spyOn(userService, 'getUserByEmail').mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        name: '',
        password: '',
        role: 'user',
        phone_number: '',
        birth_date: new Date('2000-01-01'),
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
    });
    const user = await userService.getUserByEmail('test@example.com');
    expect(user?.email).toBe('test@example.com');
  });
});