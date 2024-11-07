import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Registro de Estudiante' }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalle del Estudiante' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

