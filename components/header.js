import React from "react";

//styled component
import {
  HeaderButton,
  HeaderTitle,
  HeaderView,
  colors,
} from "./../styles/appStyles";

//Icon from expo vertical Icons
import { Entypo } from "@expo/vector-icons";
const Header = ({ handleClearTodos }) => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton onPress={handleClearTodos}>
        <Entypo name="trash" size={25} color={colors.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
