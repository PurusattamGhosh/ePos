import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'

export default function Home({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={()=>{navigation.navigate('login')}}>To Login</Button>
    </View>
  )
}

const styles = StyleSheet.create({})