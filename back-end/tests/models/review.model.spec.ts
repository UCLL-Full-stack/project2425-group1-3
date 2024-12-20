
import { describe, it, expect } from '@jest/globals';
import { Review } from '../model/review';

describe('Review Model', () => {
  it('should create a Review with correct properties', () => {
    const reviewData = {
      id: 1,
      rating: 5,
      text: 'Great product!',
      createdAt: new Date(),
      userId: 1,
      productId: 1
    };

    const review = new Review(reviewData);

    expect(review.id).toBe(reviewData.id);
    expect(review.rating).toBe(reviewData.rating);
    expect(review.text).toBe(reviewData.text);
    expect(review.createdAt).toBe(reviewData.createdAt);
    expect(review.userId).toBe(reviewData.userId);
    expect(review.productId).toBe(reviewData.productId);
  });

  it('should fail when required properties are missing', () => {
    const invalidReviewData = {
      rating: 5,
      text: 'Great product!',
      createdAt: new Date()
    };

    expect(() => new Review(invalidReviewData)).toThrow();
  });
});