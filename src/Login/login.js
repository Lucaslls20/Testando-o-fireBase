// components/Login.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../services/FirebaseConfig";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({ setUser }) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, password, nome)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <View style={styles.container}>
          <View style={styles.viewTexto}>
            <Text style={styles.texto}>Testando o FireBase</Text>
          </View>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor='black'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor='black'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor='black'
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    {/*<Icon name="google" size={30} color="#DB4437" /> */}
                   <Image source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/19/25/github-154769_1280.png'}} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    {/*<Icon name="facebook" size={30} color="#4267B2" />*/}
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2016/12/22/04/28/facebook-1924510_1280.png'}} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    {/*<Icon name="facebook" size={30} color="#4267B2" />*/}
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png'}} style={styles.iconImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                   {/*} <Icon name="github" size={30} color="#333" /> */}
                   <Image source={{uri:'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png'}} style={styles.iconImage} />
                </TouchableOpacity>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#ACF5AA',
        
    },
    viewTexto:{
    alignItems:'center',
    padding:20,
    marginTop:10
    },
    texto:{
    fontSize:25,
    fontWeight:'bold',
    color:'black'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        color:'black'
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    iconButton: {
        padding: 10,
    },
    iconImage: {
      width: 30,
      height: 30,
  },
});

export default Login;
