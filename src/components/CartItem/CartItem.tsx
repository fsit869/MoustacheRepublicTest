import SizeOption from "@/models/SizeOption";
import {Image, Menu, Text} from "@mantine/core";
import classes from "./CartItem.module.css";

interface CartItemProps {
  name: string;
  quantity: number;
  price: number;
  size: SizeOption | null;
}

export default function CartItem(props: CartItemProps) {
  return <Menu.Item leftSection={<Image width={120} height={120} src="src/pages/ProductPage/tempPhoto.jpg"/>}>
    <Text>{props.name}</Text>
    <Text>{props.quantity}x <span style={{ fontWeight: 'bold' }}>${props.price.toFixed(2)}</span></Text>
    <Text>Size: {props.size !== null ? props.size.label : "N/A"}</Text>
  </Menu.Item>
}
