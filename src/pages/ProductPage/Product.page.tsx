import {
  Text,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Center,
} from "@mantine/core";
import classes from './Product.module.css';
import SizeOptions from "@/components/SizeOptions/SizeOptions";
import {useEffect, useState} from "react";
import {Product} from "@/models/Product";
import {fetchProduct} from "@/api/Product";
import { notifications } from '@mantine/notifications';
import {addToCartAtom} from "@/atoms/cartAtom";
import {useAtom} from "jotai";
import {CartItem} from "@/models/CartItem";

export function ProductPage() {

  const [product, setProduct] = useState<Product>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [, addCart] = useAtom(addToCartAtom);

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchProduct();
        if (res === null) {
          throw new Error('Product is null');
        }
        setProduct(res);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    }
    getData()
  }, []);

  function onAddToCartButton() {

    if (selectedSize === null) {
      notifications.show({
        title: 'Size not selected',
        message: 'Please select a size'
      })
      return;
    }

    addCart({
      product: {
        ...product,
        sizeOptions: [
          product.sizeOptions.find(size => size?.label === selectedSize) || null
        ]
      },
      quantity: 1
    } as CartItem)

    notifications.show({
      title: 'Item Added',
      message: 'You can continue shopping'
    })
  }

  if (loading) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text>Error loading product</Text>
      </Container>
    );
  }

  return (
    <>
      <Flex
        className={classes.root}
        wrap="wrap"
        gap="md"
        justify="space-between"
      >
        <Flex
          className={classes.leftColumn}
          direction="column"
          justify="center"
          align="center"
        >
          <Center>
            <Image
              className={classes.productImage}
              src="src/pages/ProductPage/tempPhoto.jpg"
            />
          </Center>
        </Flex>

        <Flex
          className={classes.rightColumn}
          direction="column"
        >
          <Stack>
            <Text size="xl">{product.title}</Text>
            <Text size="md" className={classes.priceText} fw={500}>${product.price.toFixed(2)}</Text>
            <Text size="sm" c="gray.6">{product.description}</Text>
            <SizeOptions sizes={product.sizeOptions} setSizeState={setSelectedSize} sizeState={selectedSize}/>
            <Button className={classes.addToCart} onClick={() =>
              onAddToCartButton()
            }>
              ADD TO CART
            </Button>
          </Stack>

        </Flex>
      </Flex>
    </>
    );
}
