import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import product from './src/screens/product';
import Home from './src/screens/Home';
import LogIn from './src/screens/LogIn';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function App() {
  const Stack = createNativeStackNavigator()
  const [ipInfo, setIpInfo] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ipinfo.io?token=5fa6bad942cd55'); 
        setIpInfo(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(ipInfo)
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

