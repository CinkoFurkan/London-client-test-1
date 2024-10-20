import axios from 'axios';
import { addToCart } from './slice';

const addToCartAPI =
  (item_id, size_id, salad_toppings, sauce_toppings) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/cart/api/add_to_cart`,
        {
          item_id,
          size_id,
          salad_toppings,
          sauce_toppings,
        }
      );
      dispatch(addToCart(data));
    } catch (error) {
      console.log('Sepete eklerken hata oluştu: ' + error.message);
    }
  };

export { addToCartAPI };
