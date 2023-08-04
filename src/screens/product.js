import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper'
import Styles from '../components/Styles'
import Catagory from '../components/Catagories'
import { FlatList } from 'react-native-web'
import Menus from '../components/Menus'
import { AntDesign } from '@expo/vector-icons';


const product = ({ navigation }) => {
    const [selectedMenu, setSelectedMenu] = useState({})
    const[amount,setAmount]=useState(0)
    console.log("amount",amount)
    console.log(selectedMenu)
    const increseQnt = (itemId) =>{
        setSelectedMenu((prevSelectedMenu)=>{
            const oldState = {...selectedMenu}
            oldState[itemId].qnt += 1
            return oldState
        })
    }
    const decreaseQnt = (itemId) =>{
        setSelectedMenu((prevSelectedMenu)=>{
            const oldState = {...selectedMenu}
            oldState[itemId].qnt -= 1
            if(oldState[itemId].qnt==0){
                delete oldState[itemId]
            }
            return oldState
        })
    }
    const selectMenu = (item) =>{
        if(!selectedMenu[item.id]=== undefined){
            
        }
    }
    const calculateTotalAmount = (itemId) => {
        let totalAmount = 0;
        for (const itemId in selectedMenu) {
            const itemPrice = selectedMenu[itemId].price;
            const itemQuantity = selectedMenu[itemId].qnt;
            totalAmount = itemPrice *itemQuantity;
        }
        return totalAmount;
    };
    useEffect(() => {
        setAmount(() => {
          const keys = Object.keys(selectedMenu); 
          let amount = 0;
          keys.map((key) => {
            amount += selectedMenu[key].price * selectedMenu[key].qnt;
          });
          return amount;
        });
      }, [selectedMenu]);
    return (
        <View style={Styles.maincontainer}>
            <View style={styles.prductMain}>
                <ScrollView style={[styles.productCatagory, styles.shadowProp]}>
                    <Text style={styles.productSubHeading}>Catagory</Text>
                    {
                        Catagory.map((element, index) => (
                            <>
                                <TouchableOpacity key={index}>
                                    <View style={[styles.prductCatagoryElement, styles.shadowProp]}>
                                        <Image source={element.url} style={styles.productCatagoryElementLogo} />
                                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>
                                            {element.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ))
                    }
                </ScrollView>
                <View style={[styles.productMenu, styles.shadowProp]}>
                    <Text style={styles.productSubHeading}>Menu</Text>
                    <FlatList
                        data={Menus.Burger}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    margin: 15,
                                    marginBottom:15,
                                    height: "100%"
                                }}
                                onPress={() => {
                                    if(selectedMenu[item.id]===undefined){
                                        setSelectedMenu((prevSelectedMenu) => ({
                                            ...prevSelectedMenu,
                                            [item.id]: { name: item.name, qnt: 1 ,price:item.price}
                                        }))
                                    }    
                                }}
                            >
                                <View style={[{ flex: 1, flexDirection: "row", justifyContent: "space-around",marginVertical:6 }, styles.shadowProp]}>
                                    <View style={{ justifyContent: "space-around", flex: 1, alignItems: "center" }}>
                                        <Image source={item.url} style={{ height: 50, width: 50 }} />
                                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    </View>
                                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                                        <Text style={{ fontSize: 15, textAlign: "left" }}>{item.desc}</Text>
                                        <Text style={{ fontSize: 20, textAlign: "center",fontWeight:"600" }}>Rs.{item.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        horizontal={false}
                        scrollEnabled={true}
                    />
                </View>
                <View style={[styles.productCart, styles.shadowProp]}>
                    <Text style={styles.productSubHeading}>Cart</Text>
                    <View style={{ flex: 1, flexDirection: "column" ,backgroundColor:'#f1f2e9'}}>
                        <View style={[{ flex: 3 }, styles.shadowProp]}>
                            <FlatList 
                                data={Object.keys(selectedMenu)}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            width:"90%",
                                            height:"80%",
                                            flexDirection: 'column',
                                            alignSelf:'center',
                                            marginVertical: '2%',
                                            borderStyle: "solid",
                                            borderWidth:2,
                                            borderColor:"black",
                                            borderRadius:2
                                        }}>
                                            
                                        <View style={[{flex:3,flexDirection:"row",backgroundColor:'white'},styles.shadowProp]}>
                                            <Text style={[{width:"60%", fontSize: 20, textAlign: "center",fontWeight:"600" },styles.shadowProp]}>{selectedMenu[item].name}</Text> 
                                            <View style={{width:"40%",}}>
                                            <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",margintop:"10%"}}>price: {selectedMenu[item].price}</Text> 
                                            <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",margintop:"10%"}}>Amount: {selectedMenu[item].price*selectedMenu[item].qnt}</Text>
                                            </View>
                                            
                                        </View>
                                        <View 
                                            style={{ 
                                                flex: 1,
                                                backgroundColor:"yellow", 
                                                flexDirection:"row",width:"100%",
                                                alignSelf:"center",borderRadius:2,
                                                justifyContent:'space-around',
                                                padding:'2%',
                                                borderStyle: "solid",
                                                borderTopWidth:2,
                                                borderTopColor:"black",
                                                borderRadius:2
                                            }}
                                        >
                                            <TouchableOpacity onPress={()=>increseQnt(item)}>
                                                <AntDesign name="plus" size={24} color="black" fontWeight="800" />
                                            </TouchableOpacity>
                                            <Text style={{fontSize:25,fontWeight:"400",alignSelf:'center'}}>{selectedMenu[item].qnt}</Text>
                                            <TouchableOpacity
                                                onPress={()=>decreaseQnt(item)}
                                            >
                                                <AntDesign name="minus" size={24} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={(item) => item}
                                numColumns={1}
                                horizontal={false}
                                scrollEnabled={true}
                            />
                        </View>
                        
                        <View style={[{ flex:1,flexDirection:"row",backgroundColor:"yellow", borderColor:"black",borderWidth:2,}, styles.shadowProp]}>
                            <View style={[{ flex:1,}, styles.shadowProp]}>
                                <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",marginVertical:"2%"}}>Price: {amount}</Text>
                                <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",marginVertical:"2%"}}>Tax & Charges:{amount*(18/100)}</Text>
                                <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",marginVertical:"2%"}}>CGST:9%</Text>
                                <Text style={{fontSize:15,fontWeight:"500",marginLeft:"10%",marginVertical:"2%"}}>SGST:9%</Text>
                            </View>
                            <View style={[{ flex:1, flexDirection:'column',justifyContent:'space-between'}, styles.shadowProp]}>
                                <Text style={{fontSize:20,fontWeight:"500",marginLeft:"5%",marginTop:"5%"}}>Payable:{amount+(amount*(18/100))}</Text>
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('CustomerDetails')}
                                    style={{
                                        height:'30%',
                                        backgroundColor:'white',
                                        justifyContent:'center',
                                        borderStyle: "solid",
                                        borderWidth:2,
                                        borderColor:"black",
                                        borderRadius:2
                                    }}
                                >
                                    <Text style={{fontSize:15,fontWeight:"500", textAlign:'center'}}>Check-Out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default product

const styles = StyleSheet.create({
    prductMain: {
        height: '100vh',
        minWidthwidth: '100vw',
        flexDirection: 'row',

    },
    productCatagory: {
        flex: 1,
    },
    productMenu: {
        flex: 4,
        height: '100%',
        textAlign: 'center',
    },
    productCart: {
        flex: 2,
        height: '100%',

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // borderColor:"black",
        // borderWidth:2,
    },
    prductCatagoryElement: {
        height: 80,
        paddingLeft: "5%",
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 5
    },
    productCatagoryElementLogo: {
        height: "40%",
        width: "15%",
        borderRadius: 80,
        borderWidth: 2,
        borderColor: "black",
        overflow: "hidden",
    },
    productSubHeading: {
        margin: 20,
        fontSize: 30
    }
})