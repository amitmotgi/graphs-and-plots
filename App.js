import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import { VictoryLine, VictoryTheme, VictoryChart, VictoryArea } from "victory-native";

export default class App extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={{
          textAlign: 'center',
          marginTop: 40
        }}>Future Realtime Plots</Text>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea
            style={{ data: { fill: "#08c4d1" } }}
            animate={{
              duration: 2000,
              onLoad: { duration: 40000 }
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
        />
        </VictoryChart>

        <VictoryLine
          style={{
            parent: {
              border: "1px solid #ccc"
            },
            data: {
              stroke: "#c43a31", strokeWidth: 3
            },
            labels: {
              fontSize: 15, fill: "#c43a31"
            }
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 30000 }
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
          labels={(d) => d.x}
        />

        <VictoryArea
          style={{
            parent: {
              border: "1px solid #ccc"
            },
            data: {
              fill: "#553e98", fillOpacity: 0.7, stroke: "#553e98", strokeWidth: 3
            },
            labels: {
              fontSize: 15, fill: "#c43a31"
            }
          }}
          animate={{
            duration: 1000,
            onLoad: { duration: 2000 }
          }}
          data={[
            { x: 1, y: 2, y0: 0 },
            { x: 2, y: 3, y0: 1 },
            { x: 3, y: 5, y0: 1 },
            { x: 4, y: 4, y0: 2 },
            { x: 5, y: 6, y0: 2 }
          ]}
          labels={(d) => d.x}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
