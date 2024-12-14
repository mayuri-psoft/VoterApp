import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import img from './assets/imgg.png';
import fam from './assets/frnd.svg';
import loc from './assets/loc.svg';
import lock from './assets/lock.svg';
import vote from './assets/vote.svg';
import frnd from './assets/frnd.svg';
import setting from './assets/setting.svg';
import help from './assets/help.svg';
import comp from './assets/comp.svg';
import logout from './assets/logout.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const arrowRightSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18l6-6-6-6"></path>
</svg>
`;


const Account = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
                    <TouchableOpacity
                        style={styles.uploadButton}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={styles.buttonText}>Update Profile</Text>
                    </TouchableOpacity>

                    {/* Individual Links */}
                    <View style={styles.div}>
                        {/* Your Location */}
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Location')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={loc} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Your Location</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        {/* Family Details */}
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Family')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={fam} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Family Details</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        {/* Voting Slip */}
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('VotingSlip')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={vote} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Voting Slip</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        {/* Invite Friends */}
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('invitefriends')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={frnd} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Invite Friends</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Settings')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={setting} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Notification Settings</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                        {/* Help Center */}
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('helpcenter')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={help} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Help Center</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                          {/* Help Center */}
                          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Complain')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={comp} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Complaint</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                          {/* Help Center */}
                          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('PrivacyPolicy')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={lock} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Privacy Policy</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
                        <View style={styles.separator} />

                          {/* Help Center */}
                          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Complain')}>
                            <View style={styles.linkLeft}>
                                <SvgXml xml={logout} style={styles.linkIcon} />
                                <Text style={styles.linkText}>Logout</Text>
                            </View>
                            <SvgXml xml={arrowRightSvg} style={styles.arrowIcon} />
                        </TouchableOpacity>
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
