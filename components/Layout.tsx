import {Grid, GridItem} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import SideNav from "./layout/SideNav";
import TopNav from "./layout/TopNav";

type Props = {
  children: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <Grid
      h="100vh"
      templateColumns="minmax(50px, min-content) auto"
      templateRows="60px auto"
    >
      <TopNav />
      <SideNav />
      <GridItem>{children}</GridItem>
    </Grid>
  );
};

export default Layout;
