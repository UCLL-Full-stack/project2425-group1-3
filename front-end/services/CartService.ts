import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/carts/me';

class CartService {
    async getCart() {
        const response = await axios.get(API_URL, {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
            }
        });
        return response.data;
    }
}

export default new CartService();