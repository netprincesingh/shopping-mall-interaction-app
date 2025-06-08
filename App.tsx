import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthProvider } from './context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import the stack navigator instead of the direct component
import StoreDirectoryStack from './screens/storeDirectory/navigation';

import dashboard from './screens/dashboard';
import map from './screens/map';
import dealsAndOffers from './screens/dealsAndOffers';
import authentication from './screens/authentication';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'dashboard') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'map') {
                  iconName = focused ? 'compass' : 'compass-outline';
                } else if (route.name === 'storeDirectory') {
                  iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'dealsAndOffers') {
                  iconName = focused ? 'heart' : 'heart-outline';
                } else if (route.name === 'authentication') {
                  iconName = focused ? 'account' : 'account-outline';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#3b82f6',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                position: 'absolute',
                height: 70,
                paddingBottom: 10,
                paddingTop: 10,
                backgroundColor: 'white',
                borderTopWidth: 0,
                elevation: 10,
                shadowOpacity: 0.1,
                shadowRadius: 10,
              },
              headerShown: false,
            })}
          >
            <Tab.Screen name="dashboard" component={dashboard} options={{ title: 'Dashboard' }} />
            <Tab.Screen name="map" component={map} options={{ title: 'Map' }} />
            <Tab.Screen 
              name="storeDirectory" 
              component={StoreDirectoryStack} 
              options={{ title: 'Store Dir' }} 
            />
            <Tab.Screen name="dealsAndOffers" component={dealsAndOffers} options={{ title: 'Deals' }} />
            <Tab.Screen name="authentication" component={authentication} options={{ title: 'Profile' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}