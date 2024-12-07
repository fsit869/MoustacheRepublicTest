import {useState} from "react";
import {Button, Image, Menu, Text} from "@mantine/core";
import classes from "./CartButton.module.css";
import { useAtom } from "jotai";
import {cartAtom, cartTotal, cartTotalAtom} from "@/atoms/cartAtom";
import CartItem from "@/components/CartItem/CartItem";
export default function CartButton() {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const [cartTotal, setCartTotal] = useAtom(cartTotalAtom);


  function getCartItems() {
    if (cartItems.length == 0) {
      return <Text>No items in cart</Text>
    }

    return cartItems.map((item, index) => {
      return <CartItem
        name={item.product.title}
        quantity={item.quantity}
        price={item.product.price}
        size={item.product.sizeOptions[0]}
      />
    })
  }

  return <Menu trigger="click-hover">
    <Menu.Target>
      <Button className={classes.button}>
        <Text size="xs" className={classes.text}>My Cart ( {cartTotal} )</Text>
      </Button>
    </Menu.Target>

    <Menu.Dropdown>
      {getCartItems()}
    </Menu.Dropdown>
  </Menu>

}
