import { StyleSheet, Image, Platform } from 'react-native';
import { useEffect, useState } from 'react';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Feed</ThemedText>
      </ThemedView>
      {coordinates.map(coordinate => (
        <ThemedView key={coordinate.id} style={styles.postContainer}>
          <ThemedText type="title">{coordinate.marker_title}</ThemedText>
          <ThemedText>{coordinate.marker_description}</ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  postContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
