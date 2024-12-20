
import { describe, it, expect } from '@jest/globals';
import { Review } from "../../model/review";
import { User } from '../../model/user';
import { Product } from '../../model/product';

describe('Review Model', () => {
  it('should create a Review with correct properties', () => {
    const reviewData = {
      id: 1,
      rating: 5,
      text: 'Great product!',
      createdAt: new Date(),
      user: { id: 1, name: 'Test User', email: 'test@example.com' } as User,
      product: { id: 1, name: 'Test Product', description: 'A test product' } as Product
    };

    const review = new Review(reviewData);

    expect(review.id).toBe(reviewData.id);
    expect(review.rating).toBe(reviewData.rating);
    expect(review.text).toBe(reviewData.text);
    expect(review.createdAt).toBe(reviewData.createdAt);
    expect(review.user).toBe(reviewData.user);
    expect(review.product).toBe(reviewData.product);
  });

  it('should fail when required properties are missing', () => {
    const invalidReviewData = {
      rating: 5,
      text: 'Great product!',
      createdAt: new Date(),
      user: { id: 1, name: 'Test User', email: 'test@example.com' } as User,
      product: { id: 1, name: 'Test Product', description: 'A test product' } as Product
    };

    expect(() => new Review(invalidReviewData)).toThrow();
  });
});