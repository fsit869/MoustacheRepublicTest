import {AppShell} from "@mantine/core";
import {Outlet} from "react-router-dom";
import HeaderBar from "@/components/HeaderBar/HeaderBar";

export default function MainLayout() {
  return <AppShell
    header={{height: 60}}
    padding="md"
  >

    <HeaderBar/>

    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>

}
