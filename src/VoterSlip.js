import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Voter from './assets/voter.png';
import footersvg from './assets/footersvg.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function VoterSlip({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Voter Slip</Text>
            </View>
            <View style={styles.topSeparator} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.div}>
                        <Image source={Voter} style={styles.topSvg} />
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Ward Name:</Text>
                            <Text style={styles.value}>Ghodbunder</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Ward No:</Text>
                            <Text style={styles.value}>25</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Yadi No:</Text>
                            <Text style={styles.value}>23</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Sr No:</Text>
                            <Text style={styles.value}>123</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Name:</Text>
                            <Text style={styles.value}>Vinod Mane</Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Booth:</Text>
                            <Text style={styles.value}>
                                Hiranandani Foundation School (Thane (W) 400607) - Ground Floor, North Side, Room No. 1A
                            </Text>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.infoRow}>
                            <Text style={styles.heading}>Address:</Text>
                            <Text style={styles.value}>
                                203/ Hiranandani Estate, Balkumb, Ghodbandar, Thane
                            </Text>
                        </View>
                        <View style={styles.separator} />
                        <SvgXml xml={footersvg} width={300} style={styles.bottomSvg} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.buttomseparator} />
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Share</Text>
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
        margin: 15,
        borderRadius: 8,
        borderColor: '#DC6803',
        borderWidth: 1,
    },
    backButton: {
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },
    topSeparator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginTop: 15,
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
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#344054',
        flex: 1,
    },
    value: {
        fontSize: 14,
        color: '#667085',
        flex: 2,
    },
    separator: {
        height: 1,
        backgroundColor: '#DC6803',
        marginVertical: 7,
    },
    topSvg: {
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop:5,
        borderRadius:6
    },
    bottomSvg: {
        alignSelf: 'center',
        marginBottom: 10,
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
    buttomseparator: {
        height: 1,
        backgroundColor: "#D0D5DD",
        marginBottom: 15,
    },
});
