import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Voter from './assets/voter.png';
import search from './assets/search.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function Jobs({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity 
    style={styles.backButton} 
    onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Jobs</Text>
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
                    <Text style={styles.result}>Result showing 140</Text>
                    {Array(4).fill(null).map((_, index) => (
                        <View key={index} style={styles.outerBox}>
                            <View style={styles.padding}>
                                {/* Box Heading */}
                                <View style={styles.row}>
                                    <Text style={styles.boxHeading}>Purchase Manager</Text>
                                    <Text style={styles.additionalText}>Rs.35000 - Rs.45000</Text>
                                </View>

                                {/* Eligibility Criteria */}
                                <View style={styles.row}>
                                    <Text style={styles.boxSubText}>Rockwheel India Pvt Ltd</Text>
                                    <Text style={styles.rightText}>Exp Req: 1 to 3 Years</Text>
                                </View>

                                {/* Deadline */}
                                <View style={styles.row}>
                                    <Text style={styles.boxSubText}>Godhbunder Road</Text>
                                    <Text style={styles.rightText1}>Tel : 022-3434345</Text>
                                </View>
                            </View>


                            <View style={styles.separator1} />

                            <View style={styles.buttonContainer}>
                                {/* Buttons */}
                                <TouchableOpacity style={styles.customButton}>
                                    <Text style={styles.customButtonText}>Full Time</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.customButton}>
                                    <Text style={styles.customButtonText}>Thane</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.customButton}>
                                    <Text style={styles.customButtonText}>Apply</Text>
                                </TouchableOpacity>
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
    div: {
        margin: 10,
        marginBottom: 0
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
    topSvg: {
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 6
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
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Pushes content to edges
        alignItems: 'center', // Ensures vertical alignment
        marginBottom: 5, // Adds spacing between rows
    },
    boxHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#DC6803', // Color of the heading text
    },
    additionalText: {
        fontSize: 14,
        color: '#DC6803', // Same color as boxHeading
        fontWeight: 'normal', // Normal weight
    },
    boxSubText: {
        fontSize: 12,
        color: '#667085',
        fontWeight:'500'
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
});
