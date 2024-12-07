import { atom } from "jotai";
import {CartItem} from "@/models/CartItem";
import SizeOption from "@/models/SizeOption";

export const cartAtom = atom<CartItem[]>([]);
export const cartTotal = atom(0)

export const addToCartAtom = atom(
  null,
  (get, set, cartItem: CartItem) => {
    const currentCart = [...get(cartAtom)];

    const index = currentCart.findIndex((item) =>
      item.product.id === cartItem.product.id &&
      item.product.sizeOptions[0].id === cartItem.product.sizeOptions[0].id
    )

    if (index !== -1) {
      currentCart[index].quantity += cartItem.quantity;
    } else {
      currentCart.push(cartItem);
    }

    console.log(currentCart)
    set(cartTotal, get(cartTotal)+1)
    set(cartAtom, currentCart);
  }
);
