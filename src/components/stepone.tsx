import { Text, View } from "@nodegui/react-nodegui";
import React, { Component } from "react";
const dogIcon = '../../assets/dog.png';
import { QIcon } from "@nodegui/nodegui";
import path from "path";
const dogImage = new QIcon(path.resolve(__dirname, dogIcon));

export class StepOne extends React.Component {
  render() { 
    return (
      <View style={containerStyle}>
        <Text wordWrap={true}>
          {`
          <p>Hello from React NodeGUI!!!</p>
          <p>This is the beginning stages to building a client for LeagueSandbox, an open-source project that builds a sandbox server for League of Legends 4.20.</p>
          <p>(Disclaimer: this client is intended for development usage only. It is not designed for player use)</p>
          `}
        </Text>
      </View>
    );
  }
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
