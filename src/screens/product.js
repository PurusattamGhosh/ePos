import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Styles from '../components/Styles'

const product = ({navigation}) => {
  return (
    <View style={Styles.maincontainer}>
      <View style={styles.prductMain}>
        <View style={[styles.productCatagory,styles.shadowProp]}>
            <Text>Catagory</Text>
        </View>
        <View style={[styles.productMenu,styles.shadowProp]}>
            <Text>Menu</Text>
        </View>
        <View style={[styles.productCart,styles.shadowProp]}>
            <Text>Cart</Text>
        </View>
      </View>
    </View>
  )
}

export default product

const styles = StyleSheet.create({
    prductMain:{
        height:'100vh',
        minWidthwidth:'100vw',
        flexDirection:'row'
    },
    productCatagory:{
        flex:1,
        height:'100%'
    },
    productMenu:{
        flex:4,
        height:'100%',
        
    },
    productCart:{
        flex:2,
        height:'100%'
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: {width: 4, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})