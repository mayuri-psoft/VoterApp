import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import logo from '../assets/oops.svg'; // Replace with your SVG file

const NoPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {/* SVG */}
                <SvgXml xml={logo} style={styles.svg} />

                {/* Heading */}
                <Text style={styles.heading}>No Notifications Yet </Text>

                {/* Subheading */}
                <Text style={styles.subheading}>
                    Notifications are on their way, but haven't arrived just yet. Keep an eye out!
                </Text>

                {/* Button */}
                <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate("Dashboard");
                    }}>
                    <Text style={styles.buttonText}>Back To Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NoPage;

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
        marginHorizontal: 15,
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
        textAlign: 'center', // Ensures the text is centered, even for multiline text
        color: '#475467',
        marginBottom: 20,
        width: 250,
        lineHeight: 20, // Optional, adjusts spacing between lines
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
