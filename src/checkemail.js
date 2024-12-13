import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import logo from './assets/email.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const Checkemail = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <SvgXml xml={logo} width="100" height="100" style={styles.svg} />

            <Text style={styles.header}>Check your email</Text>
            <Text style={styles.subHeader}>We sent a password reset link to smith@example.com</Text>
            <TouchableOpacity style={styles.continueButton}onPress={() => {
                    navigation.navigate("otp");
                }}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Didn't receive the email?</Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Click to resend</Text>
                </TouchableOpacity>
            </View>
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

export default Checkemail;

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
        marginTop: 80
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
        marginBottom: 25,
        fontWeight: '500',
        lineHeight: 25,
        width: '60%',
        alignSelf: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
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

    continueButton: {
        backgroundColor: '#DC6803',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 25,
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
        marginBottom: 20,

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
