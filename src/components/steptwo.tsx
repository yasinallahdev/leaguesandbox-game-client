import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React, { useEffect } from "react";
import open from "open";
import axios from "axios";

export async function StepTwo() {
  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => open("https://react.nodegui.org").catch(console.log)
    },
    []
  );

  let currentJSX;

  await axios.get(`https://api-v3.mbta.com/routes/Green-B`)
    .then(response => {
      currentJSX = (
        <View style={containerStyle}>
          <Text style={textStyle} wordWrap={true}>
            {`
              <p>Trains originate at: ${response.data.data.attributes.direction_destinations[0]}</p>
              <p>Trains terminate at: ${response.data.data.attributes.direction_destinations[1]}</p>
            `}
          </Text>
        </View>
      );
    })
    .catch(err => {
      currentJSX =  (
        <View style={containerStyle}>
          <Text style={textStyle} wordWrap={true}>
            {`
              <p>There was an error!</p>
            `}
          </Text>
        </View>
      );
    })

    return currentJSX;

  // return (
  //   <View style={containerStyle}>
  //     <Text style={textStyle} wordWrap={true}>
  //       {`
  //         <ol>
  //           <li>
  //               Open chrome and navigate to chrome://inspect. You should see a target below with your app.
  //           </li>
  //           <br/>
  //             <li>
  //                 Next click on  "Open dedicated DevTools for Node"
  //             </li>
  //             <br/>
  //           <li>
  //               On the dedicated devtools. Click on Source > Node > "Your node process"
  //           </li>
  //         </ol>
  //       `}
  //     </Text>
  //     <Button
  //       style={btnStyle}
  //       on={btnHandler}
  //       text={`Open React NodeGui docs`}
  //     ></Button>
  //   </View>
  // );
}

const containerStyle = `
  flex: 1;
  justify-content: 'space-around';
`;

const textStyle = `
  padding-right: 20px;
`;

const btnStyle = `
  margin-horizontal: 20px;
  height: 40px;
`;
