import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  //NativeModules,
} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { requireNativeComponent } from 'react-native';

// const SkyPlayerView = requireNativeComponent('SkyPlayerView');
// const { PipModule } = NativeModules;

const DATA = [
  {
    id: '1',
    title: 'Bitcoin',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
  },
  {
    id: '2',
    title: 'Ethereum',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026',
  },
  {
    id: '3',
    title: 'Litecoin',
    image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=026',
  },
   {
    id: '4',
    title: 'Bitcoin',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
  },
  {
    id: '5',
    title: 'Ethereum',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026',
  },
  {
    id: '6',
    title: 'Litecoin',
    image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=026',
  },
   {
    id: '7',
    title: 'Bitcoin',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
  },
  {
    id: '8',
    title: 'Ethereum',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026',
  },
  {
    id: '9',
    title: 'Litecoin',
    image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=026',
  },
   {
    id: '10',
    title: 'Bitcoin',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026',
  },
  {
    id: '11',
    title: 'Ethereum',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026',
  },
  {
    id: '12',
    title: 'Litecoin',
    image: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=026',
  },
];

export default function AndroidPlayerScreen() {
  const playerContainerRef = useRef(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const playerHeight = (screenWidth * 9) / 16;

  const handleScroll = (event) => {
    if (playerContainerRef.current) {
      playerContainerRef.current.measure((x, y, width, height, pageX, pageY) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        setIsMiniPlayer(pageY + height < scrollY);
      });
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <Text style={styles.header}>Sky fluid SDK Inline Mini-Player</Text>
           <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />

        <View ref={playerContainerRef} style={{ marginBottom: 40 }}>
          {/* {!isMiniPlayer && (
            <SkyPlayerView style={{ width: screenWidth, height: playerHeight }} />
          )} */}
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        />
      </ScrollView>

      {isMiniPlayer && (
        <View style={styles.miniPlayer}>
          <View style={styles.miniPlayerWrapper}>
            {/* <SkyPlayerView style={{ flex: 1 }} /> */}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  container: {
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    zIndex: 999,
  },
  miniPlayerWrapper: {
    width: 200,
    height: 120,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
});
