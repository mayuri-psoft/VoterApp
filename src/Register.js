import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
// import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import logo from './assets/signup.svg';
import google from './assets/google.svg';

GoogleSignin.configure({
    webClientId: '436174361962-tdm6p890if0uilh56t7alvg9gs7m7nnc.apps.googleusercontent.com'
});

const CustomCheckbox = ({ isChecked }) => {
    return (
        <View
            style={[
                styles.roundCheckBox,
                isChecked ? styles.roundCheckBoxActive : styles.roundCheckBoxInactive,
            ]}
        >
            <Text style={styles.tick}>✔</Text>
        </View>
    );
};

const RegisterPage = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [isEightCharacters, setIsEightCharacters] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

    const validatePassword = (text) => {
        setPassword(text);
        setIsEightCharacters(text.length >= 8);
        setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(text));
    };

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    
            const signInResult = await GoogleSignin.signIn();
    
            const idToken = signInResult.data?.idToken;
    
            if (!idToken) {
                throw new Error('No ID token found');
            }
    
            console.log('ID Token:', idToken);
    
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
            await auth().signInWithCredential(googleCredential);
    
            console.log('User signed in successfully with Google!');
        } catch (error) {
            // Handle specific errors
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Sign in is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available or outdated');
            } else {
                console.error('Error during Google Sign-In:', error);
            }
        }
    };
    

    return  (
        <View style={styles.container}>
            <SvgXml xml={logo} width="100" height="100" style={styles.svg} />

            <Text style={styles.header}>Create an account</Text>
            <Text style={styles.subHeader}>Start your journey to explore.</Text>

            <Text style={styles.label}>Email*</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#667085"
            />

            <Text style={styles.label}>Password*</Text>
            <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor="#667085"
                secureTextEntry
                onChangeText={validatePassword}
                value={password}
            />

            <View style={styles.checkBoxContainer}>
                <View style={styles.checkBoxRow}>
                    <CustomCheckbox isChecked={isEightCharacters} />
                    <Text style={[styles.checkBoxText, isEightCharacters && styles.activeCheckBoxText]}>
                        Must be at least 8 characters
                    </Text>
                </View>
                <View style={styles.checkBoxRow}>
                    <CustomCheckbox isChecked={hasSpecialCharacter} />
                    <Text
                        style={[styles.checkBoxText, hasSpecialCharacter && styles.activeCheckBoxText]}
                    >
                        Must contain one special character
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('register2')}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
                <SvgXml xml={google} />
                <Text> </Text>
                <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.footerLink}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



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
        marginBottom: 5,
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
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    checkBoxText: {
        fontSize: 14,
        color: '#475467',
        marginLeft: 10,
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
    checkBoxContainer: { marginBottom: 20 },
    checkBoxRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
    checkBoxText: { marginLeft: 10, color: '#6b6b6b' },
    activeCheckBoxText: { color: '#175A63' },
    roundCheckBox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    roundCheckBoxActive: { backgroundColor: '#175A63', borderColor: '#175A63' },
    roundCheckBoxInactive: { backgroundColor: '#D0D5DD', borderColor: '#D0D5DD' },
    tick: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
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
export default RegisterPage;
