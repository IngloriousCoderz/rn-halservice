import { StyleSheet, Text, View } from "react-native";
import Mapbox, { MarkerView } from "@rnmapbox/maps";
import { useEffect } from "react";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiaWNlb25maXJlIiwiYSI6ImNtOGVtM2J3YjAzajcybXNkbm9tcjR0bDQifQ.SW2DPZyR0Ck70bdXTb_qpA"
);

const defaultCamera = {
  centerCoordinate: [12.4596857, 41.9102302],
  zoomLevel: 14,
};

export default function Index() {
  useEffect(() => {
    Mapbox.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera defaultSettings={defaultCamera} />
        <MarkerView coordinate={[12.4596857, 41.9102302]}>
          <Text style={styles.marker}>Home</Text>
        </MarkerView>
      </Mapbox.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  marker: {
    color: "white",
    backgroundColor: "cornflowerblue",
    padding: 8,
    borderRadius: 8,
  },
});
