import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Dummy data for notifications
const notifications = [
    {
        id: 1,
        title: 'New Message',
        description: 'You have a new message from John Doe.',
        time: '1 min ago',
    },
    {
        id: 2,
        title: 'Appointment b3jkbebhjbe frnf nfjnrj bjfjb Reminder',
        description: 'Your appointment with Dr. Smith is scheduled for tomorrow.',
        time: '10 mins ago',
    },
    {
        id: 3,
        title: 'Payment Successful',
        description: 'Your payment of $120 was successful.',
        time: '30 mins ago',
    },
];
const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;// SVG icons
const notificationIconSvg = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49996 10.0001L9.16663 11.6667L12.9166 7.91675M14.9176 4.1655C15.0892 4.58053 15.4186 4.91041 15.8333 5.08264L17.2877 5.68506C17.7027 5.85698 18.0324 6.18674 18.2044 6.6018C18.3763 7.01685 18.3763 7.4832 18.2044 7.89826L17.6024 9.35158C17.4304 9.76682 17.4302 10.2336 17.6029 10.6487L18.2039 12.1016C18.2891 12.3071 18.333 12.5275 18.333 12.75C18.333 12.9726 18.2892 13.1929 18.2041 13.3985C18.1189 13.6041 17.9941 13.7909 17.8367 13.9483C17.6793 14.1056 17.4925 14.2304 17.2869 14.3155L15.8336 14.9175C15.4186 15.0891 15.0887 15.4185 14.9165 15.8332L14.3141 17.2876C14.1422 17.7027 13.8124 18.0324 13.3974 18.2043C12.9823 18.3763 12.516 18.3763 12.101 18.2043L10.6477 17.6023C10.2326 17.4308 9.76648 17.4312 9.35169 17.6033L7.89737 18.2049C7.48256 18.3764 7.01664 18.3763 6.60193 18.2045C6.18723 18.0327 5.85767 17.7033 5.68564 17.2887L5.08306 15.8339C4.91146 15.4189 4.58208 15.089 4.16733 14.9168L2.71301 14.3143C2.29815 14.1425 1.96851 13.813 1.79653 13.3981C1.62455 12.9833 1.62432 12.5172 1.79588 12.1022L2.39785 10.6489C2.56934 10.2338 2.56899 9.76762 2.39687 9.35282L1.79577 7.8974C1.71055 7.69183 1.66666 7.47148 1.66663 7.24894C1.66659 7.0264 1.7104 6.80604 1.79556 6.60044C1.88072 6.39484 2.00555 6.20804 2.16293 6.05071C2.32031 5.89338 2.50715 5.7686 2.71276 5.6835L4.16604 5.08151C4.58069 4.91006 4.91036 4.58108 5.08271 4.1668L5.68511 2.71242C5.85703 2.29737 6.18677 1.96761 6.60181 1.79569C7.01685 1.62377 7.48318 1.62377 7.89822 1.79569L9.3515 2.39768C9.76655 2.56918 10.2327 2.56882 10.6475 2.3967L12.1024 1.79662C12.5174 1.6248 12.9837 1.62483 13.3986 1.79672C13.8136 1.96861 14.1433 2.29827 14.3152 2.71322L14.9178 4.16802L14.9176 4.1655Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

const crossIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
`;

const randomColors = ['#F79009','#66C61C','#2E90FA','#2ED3B7','#2ED3B7'];

export default function Notification({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>
            </View>
            <View style={styles.topseparator} />
            <ScrollView>
                <View style={styles.content}>
                    {notifications.map((notification, index) => (
                        <TouchableOpacity key={notification.id} style={styles.notificationBox}>
                            <View style={styles.notificationHeader}>
                                {/* Left Section: Circle Icon and Title */}
                                <View style={styles.leftSection}>
                                    <View style={[styles.iconCircle, { backgroundColor: randomColors[index % randomColors.length] }]}>
                                        <SvgXml xml={notificationIconSvg} width="20" height="20" />
                                    </View>
                                    <Text style={styles.notificationTitle}>{notification.title}</Text>
                                </View>

                                {/* Right Section: Cross Icon */}
                                <View style={styles.rightSection}>
                                    <TouchableOpacity style={[styles.crossIcon, { color: randomColors[index % randomColors.length] }]}>
                                        <SvgXml xml={crossIconSvg} width="20" height="20" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.notificationDescription}>{notification.description}</Text>
                            <Text style={styles.notificationTime}>{notification.time}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#FAFAFA',
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
        backgroundColor: 'white',
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
    topseparator: {
        height: 1,
        backgroundColor: '#E4E7EC',
        marginVertical: 10,
    },
    notificationBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 3,
        padding: 15,
        marginBottom: 15,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#E4E7EC',
    },
    notificationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    leftSection: {
        flexDirection: 'row', // Circle Icon and Title side by side
        alignItems: 'center',
    },
    rightSection: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCircle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#EEF2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 16,
        width:'72%',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    notificationDescription: {
        fontSize: 13,
        color: '#475467',
        marginBottom: 8,
    },
    notificationTime: {
        fontSize: 12,
        color: '#98A2B3',
    },
});
