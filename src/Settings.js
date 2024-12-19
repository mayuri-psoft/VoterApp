import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        emailNotifications: false,
        newsletters: true,
        appUpdates: false,
    });

    const toggleSwitch = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const settingOptions = [
        { id: 'notifications', icon: 'bell', label: 'Notifications' },
        { id: 'emailNotifications', icon: 'email', label: 'Email Notification' },
        { id: 'newsletters', icon: 'email-newsletter', label: 'Newsletter' },
        { id: 'appUpdates', icon: 'application', label: 'Application Updates' },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
       <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>  
                                      <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
            </View>

            <View style={styles.topSeparator} />

            {/* Content */}
            <ScrollView style={styles.content}>
                    <View  style={styles.div}>
                    {settingOptions.map((item) => (
<View>
                        <View key={item.id} style={styles.settingRow}>
                            <MaterialCommunityIcons
                                name={item.icon}
                                size={24}
                                color="#667085"
                                style={styles.icon}
                            />
                            <Text style={styles.settingText}>{item.label}</Text>
                            <Switch
                                value={settings[item.id]}
                                onValueChange={() => toggleSwitch(item.id)}
                                thumbColor={settings[item.id] ? '#175A63' : '#D0D5DD'}
                                trackColor={{ true: '#A2D9D6', false: '#D0D5DD' }}
                            />
                    </View>
                                <View style={styles.separator} />
                                </View>


                ))}
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
                backgroundColor: 'white',
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
    separator: {
        height: 1,
        backgroundColor: '#D0D5DD', // Light grey color for the line
    },
    content: {
        flex: 1,
        margin:5,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 10,
    },
    div: {
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 8,
        elevation: 6,
        shadowOpacity:0.2
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 15,

    },
    icon: {
        marginRight: 15,
    },
    settingText: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});

export default SettingsPage;
