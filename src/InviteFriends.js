import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import inviteSvg from './assets/Gift.svg';
const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;


const InviteFriends = ({ navigation }) => {
    const handleCopyCode = () => {
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Invite Friends</Text>
            </View>
            <View style={styles.topSeparator} />
            <View style={styles.contentBox}>
                <SvgXml xml={inviteSvg} width="160" height="160" style={styles.inviteImage} />
                <View style={styles.content}>

                    <Text style={styles.heading}>Invite Your Friends and Family</Text>

                    {/* Subtext */}
                    <Text style={styles.subText}>Share! Only invite your friend and family who lives in Thane Ghodbunder Road to join us.</Text>

                    {/* Code Box */}
                    <View style={styles.codeBox}>
                        <Text style={styles.codeText}>AXIS2024</Text>
                        <TouchableOpacity style={styles.copyButton} onPress={handleCopyCode}>
                            <View style={styles.copyContainer}>
                                <MaterialCommunityIcons name="content-copy" size={20} color="#667085" />
                                <Text style={styles.copyText}>Copy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Social Media Share */}
                    <Text style={styles.shareText}>Share via social network</Text>

                    {/* Social Media Icons */}
                    <View style={styles.socialIcons}>
                        <MaterialCommunityIcons name="facebook" size={24} color="#3b5998" style={styles.icon} />
                        <MaterialCommunityIcons name="twitter" size={24} color="#1DA1F2" style={styles.icon} />
                        <MaterialCommunityIcons name="snapchat" size={24} color="black" style={styles.icon} />
                        <MaterialCommunityIcons name="telegram" size={24} color="#0088CC" style={styles.icon} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40, // To avoid header overlap
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
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
    contentBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        elevation: 6,
        borderRadius: 15
    },
    inviteImage: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subText: {
        fontSize: 12,
        color: '#475467',
        textAlign: 'center',
        marginBottom: 20,
        width: 200
    },
    codeBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        backgroundColor: 'white', // White background for the code box
        borderRadius: 8,
        marginBottom: 20,
    },
    codeText: {
        fontSize: 16,
        paddingHorizontal:10,
        color: 'green',
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height:'auto',
        borderTopRightRadius:7,
        borderBottomRightRadius:7,
        padding: 10,
        backgroundColor: '#D0D5DD', // Background color for the Copy button
    },
    copyContainer: {

        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    copyText: {
        color: '#667085',
        fontSize: 14,
    },
    shareText: {
        fontSize: 14,
        color: '#475467',
        marginBottom: 15,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    icon: {
        marginHorizontal: 10,
    },
});

export default InviteFriends;
