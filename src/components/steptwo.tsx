import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React, { useEffect, useState } from "react";
import axios from "axios";

export function StepTwo() {
  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => {
        axios.get("https://api-v3.mbta.com/routes/Green-E")
          .then(response => {
            const trainData = {
              srcStation: response.data.data.attributes.direction_destinations[0],
              terminalStation: response.data.data.attributes.direction_destinations[1]
            }
            console.log(trainData);
            console.table(trainData);
            setData(trainData);
          }).catch(console.log)}
    },
    []
  );

  const [data, setData] = useState({ srcStation: "", terminalStation: "" });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api-v3.mbta.com/routes/Green-E');
      const trainData = {
        srcStation: result.data.data.attributes.direction_destinations[0],
        terminalStation: result.data.data.attributes.direction_destinations[1]
      }
      setData(trainData);
    }

    fetchData();
  }, [])

  return (
    <View style={containerStyle}>
      <Text style={textStyle} wordWrap={true}>
        {`
          <p>Testing API Calls using the MBTA's Routes API to get the standard origin and terminal for trains running on the Green Line's "E" Branch (which is the only branch to run through to Lechmere Station)</p>
          <p>Trains originate at: ${data.srcStation}</p>
          <p>Trains terminate at: ${data.terminalStation}</p>
        `}
      </Text>
    </View>
  )

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
