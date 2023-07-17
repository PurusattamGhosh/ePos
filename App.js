import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './src/screens/login';
import { PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    <PaperProvider theme={"light"}>
      <LogIn />
    </PaperProvider>
  );
}

