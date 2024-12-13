import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import DatetTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown'; // Import the dropdown
import calendarIconSvg from './assets/elements.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const AccountDetailsPage = ({navigation}) => {
    const [isOver18, setIsOver18] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [genderData, setGenderData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [isGenderFocus, setIsGenderFocus] = useState(false);
    const [isCityFocus, setIsCityFocus] = useState(false); const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloor] = useState('');
    const [road, setRoad] = useState('');
    const [area, setArea] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const genderResponse = [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
            ];
            setGenderData(genderResponse);

            const cityResponse = [
                { label: 'Thane', value: 'thane' },
                { label: 'Kalyan', value: 'kalyan' },
                { label: 'Vasai', value: 'vasai' },
            ];
            setCityData(cityResponse);
        };

        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <SvgXml xml={backArrowSvg} width="24" height="24" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Account Details</Text>
                </View>

                <View style={styles.separator} />

                <View style={styles.content}>
                    {/* First Name */}
                    <Text style={styles.fieldLabel}>First Name <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="#667085"
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    {/* Last Name */}
                    <Text style={styles.fieldLabel}>Last Name <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#667085"
                        value={lastName}
                        onChangeText={setLastName}
                    />

                    {/* Date of Birth */}
                    <Text style={styles.fieldLabel}>Date of Birth <Text style={styles.required}>*</Text></Text>
                    <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>
                                {selectedDate ? selectedDate.toDateString() : 'Select Date'}
                            </Text>
                            <SvgXml xml={calendarIconSvg} width="20" height="20" style={styles.calendarIcon} />
                        </View>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DatetTimePicker
                            mode="date"
                            value={selectedDate || new Date()}
                            onChange={(event, date) => {
                                setSelectedDate(date);
                                setShowDatePicker(false);
                            }}
                        />
                    )}

                    {/* Gender */}
                    <Text style={styles.fieldLabel}>Gender <Text style={styles.required}>*</Text></Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={genderData}
                        itemTextStyle={{ color: "#667085" }}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isGenderFocus ? 'Select Gender' : '...'}
                        value={selectedGender}
                        onFocus={() => setIsGenderFocus(true)}
                        onBlur={() => setIsGenderFocus(false)}
                        onChange={item => {
                            setSelectedGender(item.value);
                            setIsGenderFocus(false);
                        }}
                    />

                    {/* Phone Number */}
                    <Text style={styles.fieldLabel}>Phone Number <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your phone"
                        placeholderTextColor="#667085"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                    <TouchableOpacity>

                        <Text style={styles.add}>+ Add another phone</Text>
                    </TouchableOpacity>
                    {/* Address */}
                    <Text style={styles.fieldLabel}>SOC/BLDG/CHAWL NAME <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="SOC/BLDG/CHAWL NAME"
                        placeholderTextColor="#667085"
                        value={address}
                        onChangeText={setAddress}
                    />

                    {/* Floor Number */}
                    <Text style={styles.fieldLabel}>Home/Floor Number <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Home/Floor Number"
                        placeholderTextColor="#667085"
                        value={floor}
                        onChangeText={setFloor}
                    />

                    {/* Road Name */}
                    <Text style={styles.fieldLabel}>Road Name <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Road Name"
                        placeholderTextColor="#667085"
                        value={road}
                        onChangeText={setRoad}
                    />

                    {/* Area Name */}
                    <Text style={styles.fieldLabel}>Area Name <Text style={styles.required}>*</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Area Name"
                        placeholderTextColor="#667085"
                        value={area}
                        onChangeText={setArea}
                    />

                    {/* City */}
                    <Text style={styles.fieldLabel}>City <Text style={styles.required}>*</Text></Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ color: "#667085" }}
                        data={cityData}
                        maxHeight={400}
                        labelField="label"
                        valueField="value"
                        searchPlaceholder="Search..."
                        search
                        placeholder={!isCityFocus ? 'Select City' : '...'}
                        value={selectedCity}
                        onFocus={() => setIsCityFocus(true)}
                        onBlur={() => setIsCityFocus(false)}
                        onChange={item => {
                            setSelectedCity(item.value);
                            setIsCityFocus(false);
                        }}
                    />

                    {/* Checkbox for Age Confirmation */}
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            value={isOver18}
                            onValueChange={setIsOver18}
                            tintColors={{ true: '#175A63', false: '#D0D5DD' }}
                        />
                        <Text style={styles.checkBoxText}>
                            I am over 18 and have read and accepted <Text style={styles.termsText}>terms & conditions</Text> and <Text style={styles.privacyPolicyText}>privacy policy</Text>
                        </Text>
                    </View>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.continueButton} onPress={() => {
                    navigation.replace("Dashboard");
                }}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
};

export default AccountDetailsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
    },
    backButton: {
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },
    dateText: {
        verticalAlign: 'middle',
        color: "#667085",
        flex: 1,
    },
    calendarIcon: {
        marginLeft: 10,
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
    separator: {
        height: 1,
        backgroundColor: "#D0D5DD",
        marginVertical: 15,
    },
    content: {
        paddingHorizontal: 20, // Apply padding to content after separator
    },
    fieldLabel: {
        fontSize: 14,
        color: '#344054',
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        fontSize: 14,
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        height: 45,
        marginBottom: 15,
        justifyContent: 'center',
        color: '#000000',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkBoxText: {
        fontSize: 14,
        color: '#667085',
    },
    add: {
        color: '#175A63',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 15,

    },
    termsText: {
        color: '#175A63',
    },
    privacyPolicyText: {
        color: '#175A63',
    },
    continueButton: {
        backgroundColor: '#DC6803',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D0D5DD',
        paddingHorizontal: 15,
        height: 45,
        marginBottom: 15,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#667085',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#000',
    },
    inputSearchStyle: {
        fontSize: 14,
        color: '#667085',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    dateContainer: {
        flexDirection: 'row',         // Align children horizontally
        alignItems: 'center',         // Vertically center the items
        justifyContent: 'space-between', // Space out items, text to the left and icon to the right
        width: '100%',
    },
    dateText: {
        color: '#667085',
        fontSize: 14,
        flex: 1, // Allow the text to take available space
    },
    calendarIcon: {
        marginLeft: 10, // Add space between text and icon if needed
    },
});


