// App.js
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './Login/login';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <View style={styles.container}>
            {user ? (
                <View>
                <Text style={styles.texto}>Bem-vindo, {user.email}</Text>
                </View>
            ) : (
                <Login setUser={setUser} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#ACF5AA',
        padding: 20,
        
    },
    texto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF'
    }
});

export default App;
