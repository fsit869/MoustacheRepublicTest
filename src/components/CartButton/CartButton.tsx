import {useState} from "react";
import {Button, Text} from "@mantine/core";
import classes from "./CartButton.module.css";
export default function CartButton() {
  const [cartItems, setCartItems] = useState(0)

  return <Button className={classes.button}>
    <Text size="xs" className={classes.text}>My Cart ( {cartItems} )</Text>
  </Button>
}
