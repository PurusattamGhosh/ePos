import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import Styles from '../components/Styles'
import Catagory from '../components/Catagories'
import { FlatList } from 'react-native-web'
import Menus from '../components/Menus'
import { AntDesign } from '@expo/vector-icons';

const product = ({ navigation }) => {
    const [selectedMenu, setSelectedMenu] = useState({})
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
                                    margin: 6,
                                    height: "100px"
                                }}
                                onPress={() => {
                                    setSelectedMenu((prevSelectedMenu) => ({
                                        ...prevSelectedMenu,
                                        [item.id]: { name: item.name, qnt: 1 ,price:item.price}
                                    }));
                                }}
                            >
                                <View style={[{ flex: 1, flexDirection: "row", justifyContent: "space-around" }, styles.shadowProp]}>
                                    <View style={{ justifyContent: "space-around", flex: 1, alignItems: "center" }}>
                                        <Image source={item.url} style={{ height: 50, width: 50 }} />
                                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    </View>
                                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                                        <Text style={{ fontSize: 15, textAlign: "left" }}>{item.desc}</Text>
                                        <Text style={{ fontSize: 15, textAlign: "left" }}>{item.price}</Text>
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
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View style={[{ flex: 3 }, styles.shadowProp]}>
                            <FlatList
                                data={Object.keys(selectedMenu)}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            marginHorizontal:2,
                                            marginVertical: 7,
                                            height:"30%"
                                        }}>
                                        <View style={{flex:3}}>
                                            <Text>name: {selectedMenu[item].name}</Text> 
                                            <Text>price: {selectedMenu[item].price}</Text> 
                                        </View>
                                        <View style={{ flex: 1, flexDirection:"row",borderColor:"black",borderWidth:"2"}}>
                                            <TouchableOpacity 
                                                onPress={()=>increseQnt(item)}
                                            >

                                                <AntDesign name="plus" size={24} color="black" />
                                            </TouchableOpacity>
                                            <Text>{selectedMenu[item].qnt}</Text>
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
                        
                        <View style={[{ flex:1}, styles.shadowProp]}>

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