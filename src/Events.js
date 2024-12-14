import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Voter from './assets/voter.png';
import image from './assets/image.svg';
import search from './assets/search.svg';
import ticket from './assets/ticket.svg';
import thumbs from './assets/thumbs.svg';
import packagee from './assets/package.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function Events({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity 
    style={styles.backButton} 
    onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Events</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.div}>

                <Image source={Voter} style={styles.topSvg} />
            </View>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#667085"
                />
                <SvgXml xml={search} width="20" height="20" style={styles.searchIcon} />
            </View>

            <ScrollView>
                <View style={styles.content}>
                    {Array(4).fill(null).map((_, index) => (
                        <View key={index} style={styles.outerBox}>
                            <View style={styles.padding}>
                                <View style={styles.row}>
                                    <View style={styles.imageContainer}>
                                        <SvgXml xml={image} style={styles.imagePlaceholder} />
                                    </View>

                                    {/* Content Box */}
                                    <View style={styles.contentBox}>
                                        {/* Main Heading */}
                                        <Text style={styles.boxHeading}>Chatri Vatap Camp</Text>

                                        {/* Subsections */}
                                        <View style={styles.subSection}>
                                            <SvgXml xml={packagee} style={styles.icon} />
                                            <Text style={styles.boxSubText}>Sarswat Building No 2</Text>
                                        </View>
                                        <View style={styles.subSection}>
                                            <SvgXml xml={ticket} style={styles.icon} />
                                            <Text style={styles.boxSubText}>Ghodbunder, Thane</Text>
                                        </View>
                                        <View style={styles.subSection}>
                                            <SvgXml xml={thumbs} style={styles.icon} />
                                            <Text style={styles.boxSubText}>12/11/24</Text>
                                        </View>

                                        {/* Status View */}
                                        <View style={styles.statusContainer}>
                                            <Text style={styles.statusText}>Completed</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingTop: 30,
    },
    separator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginTop: 15,
    },
    separator1: {
        height: 1,
        backgroundColor: '#D0D5DD',
    },
    div: {
        margin: 10,
        marginBottom: 0
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
        alignSelf: 'flex-start',
    },
    result: {
        fontSize: 18,
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    content: {
        paddingTop: 0,
        padding: 15,
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        marginHorizontal: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        textAlign: 'left',
    },
    outerBox: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        marginBottom: 15,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden',
    },
    padding: {
        padding: 10,
    },
    topSvg: {
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 6
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Pushes content to edges
        alignItems: 'center', // Ensures vertical alignment
    },
    boxHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black', // Color of the heading text
    },
    additionalText: {
        fontSize: 14,
        color: '#DC6803', // Same color as boxHeading
        fontWeight: 'normal', // Normal weight
    },
    boxSubText: {
        fontSize: 12,
        color: '#667085',
        fontWeight: '500'
    },
    rightText: {
        fontSize: 14,
        fontWeight: 'bold', // Bold for emphasis
        color: '#0BA5EC', // Right text color
    },
    rightText1: {
        fontSize: 14,
        fontWeight: 'bold', // Bold for emphasis
        color: '#F79009', // Right text color
    },

    additionalSubText: {
        color: '#DC6803',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    customButton: {
        borderWidth: 2,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        width: '28%',
        paddingVertical: 6,
    },
    customButtonText: {
        fontSize: 13,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#175A63',
    },
    imageContainer: {
        width: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 10, // Space between image and content
    },

    imagePlaceholder: {
        flex: 1,
        borderRadius: 8,
    },

    contentBox: {
        flex: 1, // Takes up the remaining space
        justifyContent: 'space-between',
    },

    subSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },

    icon: {
        marginRight: 8, // Space between icon and text
    },

    statusContainer: {
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-end', // Ensures the status container doesn't stretch
        // marginTop: 10,
    },

    statusText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#175A63', // Change as needed
    },

});
