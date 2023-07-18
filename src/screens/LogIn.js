import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput,Button } from 'react-native-paper';
import Styles from '../components/Styles'

const LogIn = (props) => {
   const {navigation} = props;
    return (
    <View style={Styles.maincontainer}>
      <View style={styles.loginMain}>
        <View style={styles.poster}>
            <Image
            source={require("../../assets/images/login-img.jpg")}
            style={styles.img}/>
        </View>
        <View style={styles.loginForm}>
            <Image
            source={require("../../assets/images/hamburger.png")}
            style={styles.loginFormLogo}
            />
            <Text style={styles.loginFormHeading}>SignIn</Text>
            {/* <Text style={styles.loginFormFieldDescription}>Username</Text> */}
            <TextInput
                label="Email"
                mode="outlined"
                style={styles.loginFormPlaceholder}
                left={<TextInput.Icon icon="account"/>}
            />    
            {/* <Text style={styles.loginFormFieldDescription}>Password</Text> */}
            <TextInput
                label="Password"
                mode="outlined"
                style={styles.loginFormPlaceholder}
                left={<TextInput.Icon icon="lock"/>}
            /> 
            <Button mode="contained"  style={styles.LogInButton}
                onPress={()=>navigation.navigate('product')}
            >
                <Text style={{fontSize:20}}>LogIn</Text>
            </Button>
        </View>
      </View>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
    loginMain:{
        minWidth:"100vw",
        height:"100vh",
        flexDirection:"row",
        flex:1
    },
    poster:{
        height:"100%",
        // width:"500px",
        flex:1
    },
    img:{
        height:"100%",
        width:"100%"
    },
    loginForm:{
       flex:1,
       justifyContent:'center',
       paddingHorizontal:"2%"
    },
    loginFormFieldDescription:{
        fontSize:20,
        fontWeight:400
    },
    loginFormPlaceholder:{
        fontSize:15,
        height:40, 
        marginBottom:10,
    },
    loginFormHeading:{
        fontSize:30,
        fontWeight:500,
        textAlign:"center"
    },
    loginFormLogo:{
        height:"10%",
        width:"10%",
        alignSelf:"center",
        marginBottom:2,
        borderRadius:2
    },
    LogInButton:{
        width:"100%",
        marginTop:10,
        borderRadius:4,
        height:50,
        justifyContent:"center"
    }
    
})