import {Product} from "@/models/Product";

export interface CartItem {
  quantity: number,
  product: Product
}
