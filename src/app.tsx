import { Text, Image, Window, hot, View } from "@nodegui/react-nodegui";
import React from "react";
import { QIcon, QPixmap } from "@nodegui/nodegui";
import path from "path";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import nodeguiIcon from "../assets/LS-Logo.png";

const minSize = { width: 1280, height: 720 };
const winIcon = new QIcon(path.resolve(__dirname, nodeguiIcon));

function App() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="LeagueSandbox Client"
        minSize={minSize}
        styleSheet={styleSheet}
      >
        <View id="rootView" style={containerStyle}>
          <Text id="welcome-text"></Text>
          <Image src={path.resolve(__dirname, nodeguiIcon)} />
          <Text id="step-1">1. Play around</Text>
          <StepOne />
          <Text id="step-2">2. Debug</Text>
          <StepTwo />
        </View>
      </Window>
    );
}

const containerStyle = `
  flex: 1; 
`;

const styleSheet = `
  #rootView {
    background-color: white;
  }
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    qproperty-alignment: 'AlignHCenter';
    font-family: 'sans-serif';
  }

  #step-1, #step-2 {
    font-size: 18px;
    padding-top: 10px;
    padding-horizontal: 20px;
  }
`;

export default hot(App);
