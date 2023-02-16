import React, { FC } from "react";
import { Text } from "react-native";

interface AtomTextComponentType {
  textTest?: string;
}

const AtomTextComponent: FC<AtomTextComponentType> = (props) => {
  const { textTest } = props;
  return <Text> {textTest} </Text>;
};
export default AtomTextComponent;
