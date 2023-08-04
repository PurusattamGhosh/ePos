import React, { useState } from "react"
import { View, Text, Image, StyleSheet, Touchable } from "react-native"
import Styles from '../components/Styles'
import { TextInput, Button } from 'react-native-paper';
import { TouchableOpacity } from "react-native-web";
import uuid from 'react-native-uuid';

const CustomerDetails = ({ navigation }) => {
  const [fname, setFname] = useState('');

  const savedata = () => {
    console.log(fname);
  }

  const x = uuid.v4();
  return (
    <View style={Styles.maincontainer}>
      <View style={{ minWidth: "100vw", height: "100vh", flexDirection: "row", flex: 1 }}>  {/*main div*/}
        <View style={{ height: "100%", flex: 1 }}>   {/*sub div1*/}
          <Image style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/login-img.jpg")} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: "2%", }}>  {/*sub div2*/}
          <Text style={styles.FormHeading}>Customer Details</Text>

          <TextInput
            style={{ fontSize: 15, height: 40, marginBottom: 10 }}
            mode="outlined"
            value={"Order Id : " + x}
          />
          <TextInput
            label="First Name"
            mode="outlined"
            value={fname}
            onChangeText={(text) => { setFname(text) }}
            style={{ fontSize: 15, height: 40, marginBottom: 10, justifyContent: "center" }}
            left={<TextInput.Icon icon="account" style={{ paddingTop: "20%" }} />}
          />
          <TextInput
            label="Middle Name"
            mode="outlined"
            // value="mname"
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="account" style={{ paddingTop: "20%" }} />}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            // value="text"
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="account" style={{ paddingTop: "20%" }}/>}
          />
          <TextInput
            label="Phone Number"
            mode="outlined"
            // value={number}
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="phone" style={{ paddingTop: "20%" }}/>}
          />
          <TextInput
            label="Alternative Phone Number"
            mode="outlined"
            // value={number}
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="phone" style={{ paddingTop: "20%" }}/>}
          />
          <TextInput
            label="Email"
            mode="outlined"
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="email" style={{ paddingTop: "20%" }}/>}
          />
          <TextInput
            label="Address"
            mode="outlined"
            style={{ fontSize: 15, height: 40, marginBottom: 10, }}
            left={<TextInput.Icon icon="home" style={{ paddingTop: "20%" }}/>}
          />
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('product')}
              style={{ height: 40, width: 150,borderRadius:3, backgroundColor: "#e3e2de", borderWidth: 2, borderColor: "black", justifyContent: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "500", textAlign: 'center', }}>Back To Order</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={savedata}
              style={{ height: 40, width: 150,borderRadius:3, backgroundColor: "#2452d1", justifyContent: "center" }}>
              <Text style={{ fontSize: 15, fontWeight: "500", textAlign: 'center', color: "white" }}>Proceed to Payment</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  )
}
export default CustomerDetails


const styles = StyleSheet.create({
  FormHeading: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: "3%",
    marginTop: "5%"
    
  }
})