import { Text, View } from "@nodegui/react-nodegui";
import React, { Component } from "react";
const dogImg = require('./dog');

export class StepOne extends React.Component {
  render() { 
    return (
      <View style={containerStyle}>
        <Text wordWrap={true}>
          Hello from React NodeGUI!!!
        </Text>
        <Text>
          {`
            <p style="color: rgb(255,72,38);"> 
              <center>
                <img src="${dogImg}" alt="doggy" />  
              </center>
              <center>You can even use <i><strong>Rich Html</strong></i> text like this if you want 😎.</center>
            </p>
            <hr />
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
