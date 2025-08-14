import { Platform } from 'react-native';
import AndroidPlayerScreen from './src/AndroidPlayerScreen';
import IOSPlayerScreen from './src/IOS/IOSPlayerScreen';


//import NewsDetailScreen from './src/NewsDetailScreen';
//import NewsListScreen from './src/NewsListScreen';

export default function App() {
 return Platform.OS === 'android' ? <AndroidPlayerScreen /> : <IOSPlayerScreen />;
}
