
import {Product} from "@/models/Product";
import axios from 'axios';
// Temporary hardcoded
const url = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'

export const fetchProduct = async (): Promise<null | Product> => {
  try {
    const res = await axios.get<Product>(url);
    return res.data as Promise<null| Product>;
  } catch (e) {
    throw new Error(e.message);
  }
}
