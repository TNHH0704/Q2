import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DefaultTheme } from '@react-navigation/native';


const Login = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} >

            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#EF506B',
        border: '#E0E0E0',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 48,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: AppTheme.colors.primary,
        marginBottom: 24,
        marginTop: 72,
    },
    input: {
        borderColor: AppTheme.colors.border,
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        borderRadius: 10,
        paddingLeft: 12
    },
    button: {
        backgroundColor: AppTheme.colors.primary,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF'
    },
})