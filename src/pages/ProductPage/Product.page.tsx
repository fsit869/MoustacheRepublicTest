import {
  AppShell,
  Text,
  Burger,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Grid,
  Center,
  useMantineTheme
} from "@mantine/core";
import classes from './Product.module.css';
export function ProductPage() {

  return (
    <>
      <Grid
        className={classes.root}
      >
        <Grid.Col span={6} className={classes.leftColumn}>
          <Center>
            <Image
              className={classes.productImage}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />
          </Center>
        </Grid.Col>

        <Grid.Col span={6} className={classes.rightColumn}>
          <Stack>
            <Text size="xl">Product Title</Text>
            <Text size="md" className={classes.priceText} fw={500}>Price</Text>
            <Text size="sm" c="gray.6">Product Description</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
    );
}
