import { Image, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 41.38014194388779,
            longitude: -72.10416578021255,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            key={0}
            coordinate={{
              latitude: 41.38014194388779,
              longitude: -72.10416578021255,
            }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
});
