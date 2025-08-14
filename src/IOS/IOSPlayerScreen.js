import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import SkyFluidPlayer from './SkyFluidPlayer';

export default function IOSPlayerScreen() {
  const [news] = useState([
    {
      id: '1',
      title: 'Breaking: Market hits record high',
      thumbnail:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60',
      time: '2h ago',
    },
    {
      id: '2',
      title: 'Sports: Local team wins championship',
      thumbnail:
        'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=60',
      time: '3h ago',
    },
    {
      id: '3',
      title: 'World: Leaders meet for summit',
      thumbnail:
        'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60',
      time: '5h ago',
    },
  ]);

 

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    
     <SafeAreaView style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>News Live</Text>
            </View>
            <View style={styles.playerContainer}>
              <SkyFluidPlayer style={{ flex: 1 }} />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#bb1919',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  playerContainer: {
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerPlaceholder: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.7,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  thumbnail: {
    width: '100%',
    height: 180,
  },
  cardText: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  cardTime: {
    fontSize: 12,
    color: '#666',
  },
});
