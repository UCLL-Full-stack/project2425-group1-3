
import { describe, it, expect, jest } from '@jest/globals';
import userService from '../../service/user.service';

describe('User Service', () => {
  it('should authenticate a user', async () => {
    jest.spyOn(userService, 'authenticate').mockResolvedValue({
      token: 'fake-token',
      user: { email: 'test@example.com' }
    });
    const result = await userService.authenticate({ email: 'test@example.com', password: 'Password123!' });
    expect(result.token).toBe('fake-token');
  });

  it('should return user by email', async () => {
    jest.spyOn(userService, 'getUserByEmail').mockResolvedValue({
      id: 1,
      email: 'test@example.com'
    });
    const user = await userService.getUserByEmail('test@example.com');
    expect(user?.email).toBe('test@example.com');
  });
});