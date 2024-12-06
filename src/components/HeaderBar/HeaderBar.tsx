import {AppShellHeader, Container, Text } from "@mantine/core";
import classes from './HeaderBar.module.css';

export default function HeaderBar() {
  return <AppShellHeader className={classes.headerBar}>
    <Container fluid className={classes.container}>
      <Text size="sm">Extra small text</Text>
    </Container>
  </AppShellHeader>
}
