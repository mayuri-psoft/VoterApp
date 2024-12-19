import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import logo from './assets/ladkibahin.png';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function GovtPolicy({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Government Policy</Text>
            </View>
            <View style={styles.topseparator} />
            <ScrollView>
                <View style={styles.content}>
                    {/* SVG at the top */}
                        <Image source={logo} style={styles.logo} />

                    {/* Content inside the div */}
                    <View style={styles.div}>
                        {/* Headings */}
                        <Text style={styles.heading}>Ladki Bahin Yojan will continue</Text>
                        <Text style={styles.heading}>Maharashtra Govt Scheme</Text>

                        {/* Subheadings */}
                        <Text style={styles.subheading}>
                            Chief Minister Devendra Fadnavis had said in view of complaints about some beneficiaries of the scheme not conforming with the parameters, scrutiny of applications is necessary.{'\n'}{'\n'}
                            “My government is implementing the Mukhyamantri Majhi Ladki Bahin Yojana for empowerment of women in the age group of 21 to 65 years in the state. An amount of Rs 1,500 per month is being given to more than 2 crore 34 lakh beneficiary women under this scheme and five monthly instalments from July to November 2024 have been paid. The scheme will continue onwards,” said Radhakrishnan, in his speech to the joint session of the state legislature.{'\n'}{'\n'}
                            माझी लाडकी बहिन योजना{'\n'}{'\n'}
                            हमीपत्र PDF फॉर्म{'\n'}{'\n'}
                            फॉर्म की स्थिति जांचें{'\n'}{'\n'}
                            नारी शक्ति दूत ऐप{'\n'}{'\n'}
                            डीबीटी बैंक सीडिंग स्थिति{'\n'}{'\n'}
                            आधार बैंक लिंक की स्थिति जाचें
                        </Text>

                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.buttomseparator} />

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white',

    },
    div: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 0,
        marginVertical: 15,
        borderRadius: 8,
        elevation: 5,
    },
    backButton: {
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },

    header: {
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'stretch',
        width:'100%',
        padding:0,
        marginVertical:10,
        borderRadius: 15,
    },

    dateText: {
        verticalAlign: 'middle',
        color: "#667085",
        flex: 1,
    },
    calendarIcon: {
        marginLeft: 10,
    },

    title: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    topseparator: {
        height: 1,
        backgroundColor: "#D0D5DD",
        marginTop: 15,
    },
    buttomseparator: {
        height: 1,
        backgroundColor: "#D0D5DD",
        marginBottom: 15,
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA'
    },
    fieldLabel: {
        fontSize: 14,
        color: '#344054',
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        fontSize: 14,
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
        marginBottom: 15,
        justifyContent: 'center',
        color: '#000000',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkBoxText: {
        fontSize: 14,
        color: '#667085',
    },
    add: {
        color: '#175A63',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 15,

    },
    svgContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10, // Space between headings and subheadings
    },
    subheading: {
        fontSize: 14,
        color: '#475467',
        marginBottom: 10, // Space between subheadings
        lineHeight: 20, // Improve readability
    },
    termsText: {
        color: '#175A63',
    },
    privacyPolicyText: {
        color: '#175A63',
    },
    continueButton: {
        width: '90%',
        backgroundColor: '#DC6803',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'center'
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


