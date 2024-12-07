import {useState} from "react";
import {Button, Text} from "@mantine/core";
import classes from "./CartButton.module.css";
import { useAtom } from "jotai";
import {cartAtom, cartTotal} from "@/atoms/cartAtom";
export default function CartButton() {
  const [cartItems, setCartItems] = useAtom(cartTotal);

  return <Button className={classes.button}>
    <Text size="xs" className={classes.text}>My Cart ( {cartItems} )</Text>
  </Button>
}
