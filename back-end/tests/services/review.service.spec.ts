
import { describe, it, expect, jest } from '@jest/globals';
import reviewService from '../../service/review.service';
import { Product } from '../../model/product';
import { Review } from '../../model/review';
import { User } from '../../model/user';

describe('Review Service', () => {
  it('should create a review for a product', async () => {
    jest.spyOn(reviewService, 'createReviewForProduct').mockResolvedValue({
        id: 1,
        rating: 5,
        text: 'Excellent!',
        user: { id: 1, name: 'Test User', email: 'test@example.com' } as User,
        product: { id: 1, name: 'Test Product', description: 'A test product' } as Product,
        getId: function (): number | undefined {
            throw new Error('Function not implemented.');
        },
        getRating: function (): number {
            throw new Error('Function not implemented.');
        },
        getText: function (): string {
            throw new Error('Function not implemented.');
        },
        getCreatedAt: function (): Date | undefined {
            throw new Error('Function not implemented.');
        },
        getUser: function (): User {
            throw new Error('Function not implemented.');
        },
        getProduct: function (): Product {
            throw new Error('Function not implemented.');
        },
        validate: function (review: { rating: number; text: string; user: User; product: Product; }): void {
            throw new Error('Function not implemented.');
        },
        equals: function (review: Review): boolean {
            throw new Error('Function not implemented.');
        }
    });

    const review = await reviewService.createReviewForProduct({ rating: 5, text: 'Excellent!' }, 1, 'test@example.com');
    expect(review?.id).toBe(1);
    expect(review?.rating).toBe(5);
  });
});