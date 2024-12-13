import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import logo from './assets/signup.svg';
import google from './assets/google.svg';

const Login = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [isRemembered, setIsRemembered] = useState(false);


    return (
        <View style={styles.container}>
            <SvgXml xml={logo} width="100" height="100" style={styles.svg} />

            <Text style={styles.header}>Log in to your account</Text>
            <Text style={styles.subHeader}>Welcome back! Please enter your details.</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                 placeholder="Enter your password"
                placeholderTextColor="#667085"
                secureTextEntry
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#667085"
                secureTextEntry
            />

            <View style={styles.checkBoxRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        value={isRemembered}
                        onValueChange={setIsRemembered}
                        tintColors={{ true: '#175A63', false: '#D0D5DD' }}
                    />
                    <Text style={styles.checkBoxText}>Remember Me</Text>
                </View>
                <TouchableOpacity style={{ marginLeft: 'auto' }}onPress={() => {
                                        navigation.navigate("forgetpass");
                                }}>
                    <Text style={styles.footerLink}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.continueButton} onPress={() => {
                                        navigation.replace("Dashboard");
                                }}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <SvgXml xml={google} />
                <Text>  </Text>
                <Text style={styles.googleButtonText}>
                    Sign in with Google
                </Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    svg: {
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 50
    },
    header: {
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 15,
    },
    subHeader: {
        fontSize: 14,
        textAlign: 'center',
        color: '#475467',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    input: {
        fontSize: 14,
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        color: '#000000',
    },
    checkBoxContainer: {
        marginBottom: 20,
        backgroundColor:'red'
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop:-7
    },
    checkBoxText: {
        fontSize: 14,
        color: '#475467',
        fontWeight: 'bold',
    },
    activeCheckBoxText: {
        color: '#175A63',
    },
    continueButton: {
        backgroundColor: '#DC6803',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    googleButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#344054',
        marginTop: -3
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#475467',
    },
    footerLink: {
        fontSize: 14,
        color: '#175A63',
        marginLeft: 5,
        fontWeight: 'bold',
    },
});
