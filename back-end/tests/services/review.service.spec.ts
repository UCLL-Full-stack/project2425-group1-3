
import { describe, it, expect, jest } from '@jest/globals';
import reviewService from '../../service/review.service';

describe('Review Service', () => {
  it('should create a review for a product', async () => {
    jest.spyOn(reviewService, 'createReviewForProduct').mockResolvedValue({
      id: 1,
      rating: 5,
      text: 'Excellent!'
    });

    const review = await reviewService.createReviewForProduct({ rating: 5, text: 'Excellent!' }, 1, 'test@example.com');
    expect(review?.id).toBe(1);
    expect(review?.rating).toBe(5);
  });
});