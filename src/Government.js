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

export default function GovernmentPage({navigation}) {
    return (
        <View style={styles.container}>
              <View style={styles.header}>
                  <TouchableOpacity 
    style={styles.backButton} 
    onPress={() => navigation.goBack()}>
                        <SvgXml xml={backArrowSvg} width="24" height="24" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Government Schemes</Text>
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
                {/* Header */}
              

                {/* Content */}
                <View style={styles.content}>
              
                    {/* Boxes */}
                    {Array(3).fill(null).map((_, index) => (
                        <View key={index} style={styles.outerBox}>
                            <View style={styles.innerBox}>
                                <View style={styles.padding}>
                                    <Text style={styles.boxHeading}>
                                        Scholarships For Higher Education Abroad
                                    </Text>
                                    <Text style={styles.boxSubText}>
                                        To Meritorious Boys And Girls From Open Category Government of Maharashtra on 4th October 2018
                                    </Text>
                                </View>
                                <View style={styles.separator1} />
                                <View style={styles.padding}>

                                    <TouchableOpacity style={styles.knowMoreButton}>
                                        <Text style={styles.buttonText}>Know More</Text>
                                    </TouchableOpacity>
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
        backgroundColor: "#D0D5DD",
        marginTop: 15,
    },
    separator1: {
        height: 1,
        backgroundColor: "#D0D5DD",
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
        marginBottom: 10,
        marginHorizontal: 15,
        paddingHorizontal: 10,
    },
    div: {
        margin: 10,
        marginBottom: 0
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        textAlign: 'left', // Places the placeholder on the extreme right
    },
    outerBox: {
        backgroundColor: '#FAFAFA',
        width: '100%',
        borderColor: '#DC6803',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 7, // Ensure rounded corners are visible
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
        overflow: 'hidden', // Prevent inner content from overflowing
    },
    innerBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6, // Smaller radius to expose the corners of outerBox
        width: '100%', // Make it slightly smaller than the outerBox
        margin: -1, // Offset to cover the sides of the outer box
        zIndex: 2,
    },
    topSvg: {
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 5,
        borderRadius: 6
    },
    padding: {
        padding: 12,
    }
    ,
    boxHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#DC6803',
        marginBottom: 7,
    },
    boxSubText: {
        fontSize: 12,
        color: '#667085',
        lineHeight: 20,
    },
    knowMoreButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#DC6803',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
