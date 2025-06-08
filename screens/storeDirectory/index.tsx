import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

type StoreDirectoryStackParamList = {
  StoreDirectoryMain: undefined;
  Dior: undefined;
  Rolex: undefined;
  Armani: undefined;
  Apple: undefined;
  Samsung: undefined;
  Adidas: undefined;
};

export default function StoreDirectory() {
  const navigation = useNavigation<StackNavigationProp<StoreDirectoryStackParamList>>();

  const stores = [
    { 
      name: 'Dior', 
      screen: 'Dior',
      image: require('./img/dior.jpg') 
    },
    { 
      name: 'Rolex', 
      screen: 'Rolex',
      image: require('./img/rolex.jpg') 
    },
    { 
      name: 'Armani', 
      screen: 'Armani',
      image: require('./img/armani.png') 
    },
    { 
      name: 'Apple', 
      screen: 'Apple',
      image: require('./img/apple.jpg') 
    },
    { 
      name: 'Samsung', 
      screen: 'Samsung',
      image: require('./img/samsung.jpg') 
    },
    { 
      name: 'Adidas', 
      screen: 'Adidas',
      image: require('./img/adidas.jpg') 
    },
  ];

  return (
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >


      <Text style={styles.title}>Store Directory</Text>
      {stores.map((store, index) => (
        <TouchableOpacity
          key={index}
          style={styles.storeItem}
          onPress={() => navigation.navigate(store.screen)}
        >
          <Image 
            source={store.image} 
            style={styles.storeImage}
            resizeMode="contain"
          />
          <Text style={styles.storeName}>{store.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40, // Extra padding at the bottom
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#c8b1f0',
    borderRadius: 8,
    marginBottom: 15,
  },
  storeImage: {
    width: 150,
    height: 150,
    marginRight: 15,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});