import { Renderer, Text, Image, Window, hot, View } from "@nodegui/react-nodegui";
import React, { useEffect, useRef, useMemo, useState } from "react";
import { 
  AspectRatioMode, 
  QMainWindow, 
  QIcon } from "@nodegui/nodegui";
import path from "path";
import { StepOne } from "./components/stepone";
import { StepTwo } from "./components/steptwo";
import nodeguiIcon from "../assets/LS-Logo.png";

const winIcon = new QIcon(path.resolve(__dirname, nodeguiIcon));

function App() {

  const winRef = useRef<QMainWindow>(null);

  const [fileUrl, setFileUrl] = useState();
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    if(winRef.current) {
      winRef.current.resize(1280, 720);
      setFileUrl('../assets/LS-Logo.png');
      setImageSrc(fileUrl);
    }
  }, []);



  return (
    <Window
      ref={winRef}
      windowIcon={winIcon}
      windowTitle="LeagueSandbox Client"
      styleSheet={styleSheet}
    >
      <View id="rootView" style={containerStyle}>
        <Text id="welcome-text"></Text>
        <Image 
          id="image" 
          aspectRatioMode={AspectRatioMode.KeepAspectRatio}
          src={imageSrc} />
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
  justify-content: space-around;
`;

const styleSheet = `
  #rootView {
    background-color: white;
  }

  #image {
    flex: 1;
    qproperty-alignment: 'AlignCenter';
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
