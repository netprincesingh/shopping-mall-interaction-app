import { createStackNavigator } from '@react-navigation/stack';
import StoreDirectory from './index';
import Dior from './list/Dior';
import Rolex from './list/Rolex';
import Adidas from './list/Adidas';
import Apple from './list/Apple';
import Samsung from './list/Samsung';
import Armani from './list/Armani';

const Stack = createStackNavigator();

export default function StoreDirectoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StoreDirectoryMain" component={StoreDirectory} />
      <Stack.Screen name="Dior" component={Dior} />
      <Stack.Screen name="Rolex" component={Rolex} />
      <Stack.Screen name="Armani" component={Armani} />
      <Stack.Screen name="Adidas" component={Adidas} />
      <Stack.Screen name="Samsung" component={Samsung} />
      <Stack.Screen name="Apple" component={Apple} />
    </Stack.Navigator>
  );
}