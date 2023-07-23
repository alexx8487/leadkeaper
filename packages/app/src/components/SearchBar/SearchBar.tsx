import React, { FC } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as Styles from "./SearchBar.styles";

interface SearchBarProps {
  style?: StyleProp<TextStyle>;
  value: string;
  onValueChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { style, value, onValueChange } = props;

  return (
    <Styles.Box style={style}>
      <Styles.Icon />

      <Styles.Input
        value={value}
        placeholder="Search"
        onChangeText={onValueChange}
      />
    </Styles.Box>
  );
};

export default SearchBar;
