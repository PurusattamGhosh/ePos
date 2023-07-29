import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import product from './src/screens/product';
import Home from './src/screens/Home';
import LogIn from './src/screens/LogIn';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <PaperProvider theme={"light"}>
      
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='login' component={LogIn} options={{headerShown:false}}/>
          <Stack.Screen name='product' component={product} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

