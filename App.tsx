import { StatusBar } from "expo-status-bar";
import React from "react";
import { AtomText } from "./build";
import AtomWrapperComponet from "./core/@atoms/AtomWrapper";
import AtomTextComponet from "./core/@atoms/AtomText";

export default function App() {
  return (
    <AtomWrapperComponet>
      <StatusBar style="light" />
      <AtomText />
    </AtomWrapperComponet>
  );
}
