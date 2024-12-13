import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import logo from './assets/Set_password.svg';
import google from './assets/google.svg';


const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;
const NewPassword = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [isEightCharacters, setIsEightCharacters] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

    const validatePassword = (text) => {
        setPassword(text);
        setIsEightCharacters(text.length >= 8);
        setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(text));
    };

    return (
        <View style={styles.container}>
            <SvgXml xml={logo} width="100" height="100" style={styles.svg} />

            <Text style={styles.header}>Set new password</Text>
            <Text style={styles.subHeader}>Your new password must be different to previously used passwords.</Text>

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#667085"
                secureTextEntry
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor="#667085"
                secureTextEntry
            />
            <View style={styles.checkBoxContainer}>
                <View style={styles.checkBoxRow}>
                    <CheckBox
                        value={isEightCharacters}
                        disabled
                        style={{ borderRadius: 10 }}
                        tintColors={{ true: '#175A63', false: '#D0D5DD' }}
                    />
                    <Text style={[styles.checkBoxText, isEightCharacters && styles.activeCheckBoxText]}>
                        Must be at least 8 characters
                    </Text>
                </View>
                <View style={styles.checkBoxRow}>
                    <CheckBox
                        value={hasSpecialCharacter}
                        disabled
                        tintColors={{ true: '#175A63', false: '#D0D5DD' }}
                    />
                    <Text
                        style={[styles.checkBoxText, hasSpecialCharacter && styles.activeCheckBoxText]}
                    >
                        Must contain one special character
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={() => {
                    navigation.navigate("pwreset");
                }}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

        
            <TouchableOpacity style={styles.googleButton}>
                <SvgXml xml={backArrowSvg} />
                <Text>  </Text>
                <Text style={styles.googleButtonText}>
                    Back to log in
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NewPassword;

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
        marginTop: -6
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
