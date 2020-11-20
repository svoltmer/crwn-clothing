import React from "react";

import { HomePageContainer } from './HomePage.styles';
import Directory from "./../../components/directory/Directory";
import MenuItem from "../../components/menu-item/MenuItem";

const HomePage = () => (
  <HomePageContainer>
      <Directory />
  </HomePageContainer>
);

export default HomePage;
