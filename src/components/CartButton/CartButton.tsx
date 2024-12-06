import {useState} from "react";
import {Button, Text} from "@mantine/core";
import classes from "./CartButton.module.css";
import { useAtom } from "jotai";
import {cartAtom} from "@/atoms/cartAtom";
export default function CartButton() {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  return <Button className={classes.button}>
    <Text size="xs" className={classes.text}>My Cart ( {cartItems.length} )</Text>
  </Button>
}
