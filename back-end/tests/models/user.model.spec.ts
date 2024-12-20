
import { describe, it, expect } from '@jest/globals';
import { User } from '../model/user'; // Adjust path if needed

describe('User Model', () => {
  it('should create a User with correct properties', () => {
    // ...given...
    const userData = {
      id: 1,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Password123!',
      role: 'user',
      phone_number: '1234567890',
      birth_date: new Date('1990-01-01')
    };

    // ...when...
    const user = new User(userData);

    // ...then...
    expect(user.getEmail()).toBe(userData.email);
  });

  it('should fail when required properties are missing', () => {
    // ...given...
    const invalidUserData = {
      name: '',
      email: '',
      password: '',
      role: '',
      phone_number: '',
      birth_date: new Date('')
    };

    // ...when & then...
    expect(() => new User(invalidUserData)).toThrow();
  });

  it('should consider two identical users as equal', () => {
    // ...given...
    const userData1 = {
      id: 1,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Password123!',
      role: 'user',
      phone_number: '1234567890',
      birth_date: new Date('1990-01-01')
    };

    const userData2 = {
      id: 1,
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'Password123!',
      role: 'user',
      phone_number: '1234567890',
      birth_date: new Date('1990-01-01')
    };

    const user1 = new User(userData1);
    const user2 = new User(userData2);

    // ...when...
    const areEqual = user1.equals(user2);

    // ...then...
    expect(areEqual).toBe(true);
  });
});