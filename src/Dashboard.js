import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboardimg from './assets/dashboard.png';
import { SvgXml } from 'react-native-svg';
import { flash } from './assets/flash.svg';
import edit from './assets/Edit.svg';
import location from './assets/location.svg';
import star from './assets/star.svg';
import Govt from './assets/ticket-star.svg';
import mail from './assets/mail.svg';
import card from './assets/cbanner.png';
import truck from './assets/truck.svg';
import card1 from './assets/cbanner1.png';
import bell from './assets/bell.svg';
import noti from './assets/bellnew.svg';
import home from './assets/home.svg';
import credit from './assets/credit.svg';
import tinder from './assets/tinder.svg';
import plus from './assets/plus.svg';
import home1 from './assets/home1.svg';
import business from './assets/businesss1.svg';
import offers from './assets/offers1.svg';
import profile from './assets/profile1.svg';
import logo from './assets/ladkibahin.png';
import url from '../env';

const Dashboard = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        const fetchSchemes = async () => {
            try {
                const response = await fetch(`${url.nodeapipath}govtscheme`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSchemes(data);
                } else {
                    const errorData = await response.json();
                    console.error('Error fetching schemes:', errorData);
                    Alert.alert('Error', 'Failed to fetch government schemes.');
                }
            } catch (error) {
                console.error('Error:', error);
                Alert.alert('Error', 'An unexpected error occurred. Please try again.');
            }
        };

        fetchSchemes();
    }, []);

    // Dynamically render cards
    const renderCard = useMemo(() => {
        return schemes.map((scheme, index) => (
            <View key={scheme._id} style={styles.card}>
                <Image
                    source={{ uri: `${url.nodeapipath}uploads/govtscheme/${scheme.schemeImage}` }}
                    style={styles.cardImage}
                />
                <View style={styles.iconTextContainer}>
                    <SvgXml xml={truck} />
                    <Text style={styles.cardSubText}>{scheme.schemeDeatils}</Text>
                </View>
                <Text style={styles.cardTitle} numberOfLines={2}
                    ellipsizeMode="tail">{scheme.schemeName}</Text>
                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => {
                        if (scheme.schemeLink) {
                            Linking.openURL(scheme.schemeLink)
                                .catch((err) => console.error('Error opening link:', err));
                        } else {
                            console.error('No scheme link provided.');
                        }
                    }}
                >
                    <Text style={styles.cardButtonText}>Read</Text>
                </TouchableOpacity>
            </View>
        ));
    }, [schemes]);

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
                <Image source={Dashboardimg} style={styles.image} />

                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Hi, Vinod</Text>
                        <Text style={styles.welcome}>Welcome Back !</Text>
                    </View>
                    <TouchableOpacity style={styles.iconContainer1} onPress={() => {
                        navigation.navigate("Notifications");
                    }}>
                        <SvgXml xml={noti} width={25} height={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.page}>

                    <Text style={styles.activityTitle}>Every Day Activity</Text>

                    <View style={styles.boxContainer}>
                        <TouchableOpacity style={styles.box} onPress={() => {
                            navigation.navigate("Events");
                        }}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#E8FBF7' }]}>
                                <SvgXml xml={flash} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Events</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => {
                            navigation.navigate("Programs");
                        }}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#F4F3FF' }]}>
                                <SvgXml xml={star} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Programs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => {
                            navigation.navigate("no-page");
                        }}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FFFAEB' }]}>
                                <SvgXml xml={edit} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Registration</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FEFBE8' }]}>
                                <SvgXml xml={location} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Area Info</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => {
                            navigation.navigate("Jobs");
                        }}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FEF3F2' }]}>
                                <SvgXml xml={mail} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Jobs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box} onPress={() => {
                            navigation.navigate("Schemes");
                        }}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#F3FEE7' }]}>
                                <SvgXml style={styles.svg} xml={Govt} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Govt Scheme</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 16 }} />

                    <TouchableOpacity style={styles.svgContainer}>
                        <Image source={card} style={styles.cardcss} />
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}>
                                <MaterialCommunityIcons name="arrow-right-thin" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>


                    <View style={styles.titleContainer}>
                        <Text style={styles.activityTitle1}>Famous Govt Policy</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                        {renderCard}
                    </ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.activityTitle1}>Emergency Helpline</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxContainer}>
                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#E8FBF7' }]}>
                                <SvgXml xml={flash} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Ambulance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#F4F3FF' }]}>
                                <SvgXml xml={tinder} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Blood Bank</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FFFAEB' }]}>
                                <SvgXml xml={plus} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Hospitals</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FEFBE8' }]}>
                                <SvgXml xml={home} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Police STN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#FEF3F2' }]}>
                                <SvgXml xml={bell} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Fire Bridged</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.box}>
                            <View style={[styles.iconContainerBox, { backgroundColor: '#F3FEE7' }]}>
                                <SvgXml xml={credit} width="24" height="24" />
                            </View>
                            <Text style={styles.boxText}>Medical Funds</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 16 }} />

                    <TouchableOpacity style={[styles.svgContainer, { marginBottom: 90 }]}>
                        <Image source={card1} style={styles.cardcss} />
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}>
                                <MaterialCommunityIcons name="arrow-right-thin" size={30} color="grey" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView >
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconContainer}>
                        {activeTab === 'Home' && <View style={styles.activeLine} />}
                        <SvgXml xml={home1} width="24" height="24" />
                    </View>
                    <Text style={[styles.footerText, activeTab === 'Home' && styles.activeText]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconContainer}>
                        {activeTab === 'Business' && <View style={styles.activeLine} />}
                        <SvgXml xml={business} width="24" height="24" />
                    </View>
                    <Text style={[styles.footerText, activeTab === 'Business' && styles.activeText]}>Business</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerItem}>
                    <View style={styles.iconContainer}>
                        {activeTab === 'Offers' && <View style={styles.activeLine} />}
                        <SvgXml xml={offers} width="24" height="24" />
                    </View>
                    <Text style={[styles.footerText, activeTab === 'Offers' && styles.activeText]}>Offers</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerItem} onPress={() => {
                    navigation.navigate("Account");
                }}>
                    <View style={styles.iconContainer}>
                        {activeTab === 'Profile' && <View style={styles.activeLine} />}
                        <SvgXml xml={profile} width="24" height="24" />
                    </View>
                    <Text style={[styles.footerText, activeTab === 'Profile' && styles.activeText]}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F6F7',
    },
    container: {
        flex: 1,
    },
    page: {
        padding: 12
    },
    header: {
        backgroundColor: '#DC6803',
        height: 436,
        width: '100%',
        padding: 12,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start',
        zIndex: 1,
    },
    svg: {
        zIndex: 4
    },
    textContainer: {
        flex: 1,
        marginTop: 38,
        marginLeft: 3,
    },
    greeting: {
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 3,
        fontFamily: 'Inter',
        color: 'white',
    },
    welcome: {
        fontSize: 16,
        fontFamily: 'Inter',
        color: 'white',
    },
    iconContainer1: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 8,
        marginTop: 38
    },
    image: {
        position: 'absolute', // Position the image inside the header
        top: 96, // Adjust the top to ensure image starts below the text area
        width: 343,
        height: 362,
        zIndex: 2,
        alignSelf: 'center',
        margin: 15,
    },
    activityTitle: {
        fontWeight: '900',
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        marginTop: 55,
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        zIndex: 1,
    },
    iconContainerBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#DC6803',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    boxText: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    svgContainer: {
        height: 150,
        zIndex: 0,
        position: 'relative',

    },
    cardcss: {
        alignSelf: 'center',
        width: '99%',
        height: 150,
        borderRadius: 8,
        padding: 0,
        resizeMode: 'stretch',
    },
    outerCircle: {
        position: 'absolute',
        bottom: -5,
        right: -10,
        width: 60,   // Diameter of the outer circle
        height: 60,  // Diameter of the outer circle
        backgroundColor: '#F5F6F7',
        borderRadius: 30, // To make it a perfect circle
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1, // Ensures it is above the card
    },
    innerCircle: {
        width: 45,   // Diameter of the inner circle
        height: 45,  // Diameter of the inner circle
        backgroundColor: 'white',
        borderRadius: 25, // To make it a perfect circle
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 2, // Higher zIndex for the inner circle
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 5,
    },
    activityTitle1: {
        fontWeight: '900',
        fontSize: 16,
        color: 'black',
    },
    viewAll: {
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: 'underline',
        color: '#175A63',
    },
    scrollContainer: {
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    card: {
        height: 266,
        width: 145,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 8,
    },
    cardImage: {
        height: 145,
        width: 145,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    cardSubText: {
        fontSize: 10,
        color: 'black',
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
        paddingHorizontal: 8
    },
    cardButton: {
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: '#175A63',
        backgroundColor: '#E8FBF7',
        borderRadius: 4,
        marginHorizontal: 8
    },
    cardButtonText: {
        fontSize: 12,
        color: '#175A63',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 5,
    },
    footerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    activeLine: {
        width: '50%',
        height: 3,
        backgroundColor: 'green',
        position: 'absolute',
        top: -8,
        borderRadius: 2,
    },
    footerText: {
        fontSize: 12,
        color: '#7A7A7A',
        marginTop: 4,
    },
    activeText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Dashboard;