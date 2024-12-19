import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import logo from '../assets/internet.svg'; // Replace with your SVG file

const NoInternet = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <SvgXml xml={logo} style={styles.svg} />
                <Text style={styles.heading}>No Internet Connections !</Text>
                <Text style={styles.subheading}>
                    No Internet Connection Available' signals the absence of online access.           
                         </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enable WIFI</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NoInternet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    box: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 25,
        alignItems: 'center',
    },
    svg: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: '900',
        color: '#000000',
        marginBottom: 15,
    },
    subheading: {
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',
        color: '#475467',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#175A63',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
