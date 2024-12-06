import {AppShellHeader, Container, Text } from "@mantine/core";
import classes from './HeaderBar.module.css';
import CartButton from "@/components/CartButton/CartButton";

export default function HeaderBar() {
  return <AppShellHeader className={classes.headerBar}>
    <Container fluid className={classes.container}>
      <CartButton />
    </Container>
  </AppShellHeader>
}
