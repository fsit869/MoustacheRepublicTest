import { atom } from "jotai";
import {CartItem} from "@/models/CartItem";
import SizeOption from "@/models/SizeOption";

export const cartAtom = atom<CartItem[]>([]);
export const cartTotalAtom = atom(0)

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
    set(cartTotalAtom, get(cartTotalAtom)+1)
    set(cartAtom, currentCart);
  }
);
