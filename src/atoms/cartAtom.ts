import { atom } from "jotai";
import {CartItem} from "@/models/CartItem";

export const cartAtom = atom<CartItem[]>([]);

export const addToCartAtom = atom(
  null,
  (get, set, product: CartItem) => {
    const currentCart = get(cartAtom);
    set(cartAtom, [...get(cartAtom), product]);
  }
);
