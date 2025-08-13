import React,{useEffect} from 'react';
import { View, Text, StyleSheet ,NativeModules, Alert } from 'react-native';

export default function IOSPlayerScreen() {
    const { SkyFluidModule } = NativeModules;

    useEffect(() => {
  SkyFluidModule.setPiPVisible(true);

  // No fetchAllVideos!
  SkyFluidModule.startPlayer();

  return () => {
    SkyFluidModule.removePlayer();
  };
}, [SkyFluidModule]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is iOS Player Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

