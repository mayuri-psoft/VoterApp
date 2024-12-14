import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboardimg from './assets/dashboard.png';
import { SvgXml } from 'react-native-svg';
import { flash } from './assets/flash.svg';
import edit from './assets/Edit.svg';
import location from './assets/location.svg';
import star from './assets/star.svg';
import Govt from './assets/ticket-star.svg';
import mail from './assets/mail.svg';
import card from './assets/card.svg';
import truck from './assets/truck.svg';
import card1 from './assets/card1.svg';
import bell from './assets/bell.svg';
import home from './assets/home.svg';
import credit from './assets/credit.svg';
import tinder from './assets/tinder.svg';
import plus from './assets/plus.svg';
import home1 from './assets/home1.svg';
import business from './assets/businesss1.svg';
import offers from './assets/offers1.svg';
import profile from './assets/profile1.svg';

const Dashboard = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const renderCard = useMemo(() => {
        return [1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={styles.card}>
                <Image source={Dashboardimg} style={styles.cardImage} />
                <View style={styles.iconTextContainer}>
                    <SvgXml xml={truck} />
                    <Text style={styles.cardSubText}>Scheme for Woman</Text>
                </View>
                <Text style={styles.cardTitle}>Ladki Bahin Yojana will continue</Text>
                <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>Read</Text>
                </TouchableOpacity>
            </View>
        ));
    }, []); // Memoize the cards to prevent unnecessary re-renders


    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.greeting}>Hi, Vinod</Text>
                    <Text style={styles.welcome}>Welcome Back !</Text>
                </View>
                <View style={styles.iconContainer1}>
                    <MaterialCommunityIcons name="bell" size={25} color="black" />
                </View>
            </View>
            <Image source={Dashboardimg} style={styles.image} />
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

                    <TouchableOpacity style={styles.box} >
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
                    <SvgXml xml={card} />
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
                    <SvgXml xml={card1} />
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
        height: 362,
        width: 328,
        zIndex: 2,
        margin: 15,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 12, // For Android shadow
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
        alignSelf: 'center',
        zIndex: 0,
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
        marginBottom: 8,
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