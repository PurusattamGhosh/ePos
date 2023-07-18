import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Styles from '../components/Styles'
import Catagory from '../components/Catagories'

const product = ({navigation}) => {
  return (
    <View style={Styles.maincontainer}>
      <View style={styles.prductMain}>
        <ScrollView style={[styles.productCatagory,styles.shadowProp]}>
            <Text style={styles.productSubHeading}>Catagory</Text>
            {
                Catagory.map((element, index) =>(
                    <>
                        <View style={[styles.prductCatagoryElement,styles.shadowProp]}>
                            <Image source={element.url} style={styles.productCatagoryElementLogo}/>
                            <Text style={{fontSize:20, marginLeft:'2%'}}>
                                {element.name}
                            </Text>
                        </View>
                    </>
                ))
            }
        </ScrollView>
        <View style={[styles.productMenu,styles.shadowProp]}>
            <Text style={styles.productSubHeading}>Menu</Text>
            {/* <Image source={require("../../assets/images/hamburger.png")} style={styles.productCatagoryElementLogo}/> */}
        </View>
        <View style={[styles.productCart,styles.shadowProp]}>
            <Text style={styles.productSubHeading}>Cart</Text>
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
        flexDirection:'row',
        
    },
    productCatagory:{
        flex:1,
    },
    productMenu:{
        flex:4,
        height:'100%',
        textAlign:'center', 
    },
    productCart:{
        flex:2,
        height:'100%',
        
    },
    shadowProp:{
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    prductCatagoryElement:{
        height:80,
        paddingLeft:"5%",
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection:"row",
        borderRadius:5
    },
    productCatagoryElementLogo:{
        height:"40%",
        width:"15%",
        borderRadius:80,
        borderWidth:2,
        borderColor:"black",
        overflow:"hidden",
    },
    productSubHeading:{
        margin:20, 
        fontSize:30
    }
})