import React, { FC } from "react";
import { View } from "react-native";

interface AtomWrapperComponetType {
  children?: React.ReactNode;
}

const AtomWrapperComponet: FC<AtomWrapperComponetType> = (props) => {
  const { children } = props;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};
export default AtomWrapperComponet;
