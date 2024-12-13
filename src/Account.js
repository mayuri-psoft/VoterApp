import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import img from './assets/imgg.png';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const arrowRightSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"></path>
  <path d="M12 5l7 7-7 7"></path>
</svg>
`;

const placeholderIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
</svg>
`;

const Account = ({ navigation }) => {
    const links = [
        'Your Location',
        'Family Details',
        'Voting Slip',
        'Invite Friends',
        'Notification Settings',
        'Help Center',
        'Complaint',
        'Privacy Policy',
        'Logout',
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>My Account</Text>
            </View>
            <View style={styles.topSeparator} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image source={img} style={styles.image} />
                    </View>

                    {/* Upload Photo Button */}
                    <TouchableOpacity style={styles.uploadButton} onPress={() => {
                                        navigation.navigate("Profile");
                                }}>
                        <Text style={styles.buttonText}>Update Profile</Text>
                    </TouchableOpacity>

                    <View style={styles.div}>
                        {links.map((link, index) => (
                            <View key={index}>
                            <TouchableOpacity style={styles.link}>
                                <View style={styles.linkLeft}>
                                    <SvgXml xml={placeholderIconSvg} style={styles.linkIcon} />
                                    <Text style={styles.linkText}>{link}</Text>
                                </View>
                                <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                            </TouchableOpacity>
                            <View style={styles.separator} />
                        </View>
                        
                        ))}
                    </View>
                </View>
            </ScrollView>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white',
    },
    div: {
        backgroundColor: 'white',
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
    topSeparator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginTop: 15,
    },
    bottomSeparator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginBottom: 15,
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
    },
    link: {
        flexDirection: 'row', // Arrange items in a row
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space out items
        paddingVertical: 14, // Vertical padding for the link
        paddingHorizontal: 12, // Horizontal padding
    },
    
    linkLeft: {
        flexDirection: 'row', // Align the icon and text in a row
        alignItems: 'center', // Center vertically
    },
    
    linkIcon: {
        width: 20, // Adjust icon size
        height: 20,
        marginRight: 10, // Space between the icon and the text
    },
    
    linkText: {
        fontSize: 16, // Adjust text size
        color: '#344054', // Text color
    },
    arrowIcon: {
        width: 16, // Adjust arrow size
        height: 16,
    },
    separator: {
        height: 1,
        backgroundColor: '#D0D5DD',
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    image: {
        marginTop: 15,
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    uploadButton: {
        backgroundColor: '#DC6803',
        width: '30%',
        paddingVertical: 12,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    footer: {
        backgroundColor: 'white',
    },
    continueButton: {
        width: '90%',
        backgroundColor: '#DC6803',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'center',
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Account;
