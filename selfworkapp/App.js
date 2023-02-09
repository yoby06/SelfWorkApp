import { StyleSheet, Text, View } from 'react-native';
import ImageCarousel from './src/components/ImageCarousel/ImageCarousel';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageCarousel/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
