import cartService from '../service/cart.service';
import cartDb from '../repository/cart.db';
import productDb from '../repository/product.db';
import { Cart } from '../model/cart';
import { Product } from '../model/product';
import { User } from '../model/user';
import { Role } from '../types';

jest.mock('../repository/cart.db');
jest.mock('../repository/product.db');

let product: Product;
let cart: Cart;

beforeEach(() => {
    product = new Product({ id: 1, name: 'Product 1', price: 100, description: 'Description 1', rating: 4 });
    cart = new Cart({ id: 1, products: [], user: {
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
    } });
});

afterEach(() => {
    jest.clearAllMocks();
});

test('given carts in the database, when getAllCarts is called, then all carts are returned', () => {
    // given
    const carts = [cart, new Cart({ id: 2, products: [], user: {
        id: 2, name: 'User 2',
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
    } })];
    (cartDb.getAllCarts as jest.Mock).mockReturnValue(carts);

    // when
    const result = cartService.getAllCarts({ email: 'test@example.com', role: 'admin' });

    // then
    expect(result).toEqual(carts);
});

test('given a product and a cart, when putProductInCart is called, then the product is added to the cart', () => {
    // given
    (productDb.getAllproducts as jest.Mock).mockReturnValue([product]);
    (cartDb.getAllCarts as jest.Mock).mockReturnValue([cart]);
    (cartDb.putProductToCart as jest.Mock).mockReturnValue(cart);

    // when
    const result = cartService.addProductToCart('test@example.com', 1);

    // then
    expect(result).toEqual(cart);
});

test('given no cart in the database, when putProductInCart is called, then an error is returned', () => {
    // given
    (productDb.getAllproducts as jest.Mock).mockReturnValue([product]);
    (cartDb.getAllCarts as jest.Mock).mockReturnValue([]);

    // when
    const result = cartService.addProductToCart('test@example.com', 1);

    // then
    expect(result).toBe('Cart with ID 999 not found');
});

test('given no product in the database, when putProductInCart is called, then an error is returned', () => {
    // given
    (productDb.getAllproducts as jest.Mock).mockReturnValue([]);
    (cartDb.getAllCarts as jest.Mock).mockReturnValue([cart]);

    // when
    const result = cartService.addProductToCart('test@example.com', 999);

    // then
    expect(result).toBe('Product not found in the available products list.');
});
