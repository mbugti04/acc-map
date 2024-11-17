import { Image, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [coordinates, setCoordinates] = useState<{ id: number; latitude: number; longitude: number; marker_title: string; marker_description: string }[]>([]);

  useEffect(() => {
    fetch('http://129.133.74.40:5001/location')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCoordinates(data);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => console.error('Error fetching coordinates:', error));
  }, []);

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
        {coordinates.map((coordinate) => (
          <Marker
            key={coordinate.id}
            coordinate={{
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
            }}
            title={coordinate.marker_title}
            description={coordinate.marker_description}
          />
        ))}
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
