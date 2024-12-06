import {AppShell, Container, px} from "@mantine/core";
import {Outlet} from "react-router-dom";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import classes from './MainLayout.module.css';

export default function MainLayout() {
  return <AppShell
    header={{height: 60}}
  >
      <HeaderBar/>
      <AppShell.Main className={classes.mainContent} >
        <Outlet />
      </AppShell.Main>
    </AppShell>
}
