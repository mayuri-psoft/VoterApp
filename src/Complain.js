import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import DatetTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown'; // Import the dropdown
import calendarIconSvg from './assets/elements.svg';
import img from './assets/imgg.png';


const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function Complain({ navigation }) {
   
    const [IssueData, setIssueData] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [isIssueFocus, setIsIssueFocus] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const IssueResponse = [
                { label: 'Issue1', value: 'male' },
                { label: 'Issue2', value: 'female' },
                { label: 'Issue3', value: 'other' },
            ];
            setIssueData(IssueResponse);
        };

        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Complain</Text>
            </View>
            <View style={styles.topseparator} />
            <ScrollView>
                <View style={styles.content}>
                          
                    <View style={styles.div}>

                    {/* Issue */}
                    <Text style={styles.fieldLabel}>Issue <Text style={styles.required}>*</Text></Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={IssueData}
                        itemTextStyle={{ color: "#667085" }}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isIssueFocus ? 'Select Issue' : '...'}
                        value={selectedIssue}
                        onFocus={() => setIsIssueFocus(true)}
                        onBlur={() => setIsIssueFocus(false)}
                        onChange={item => {
                            setSelectedIssue(item.value);
                            setIsIssueFocus(false);
                        }}
                    />

                    {/* Area Name */}
                    <Text style={styles.fieldLabel}>Complain Details</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type here..."
                        placeholderTextColor="#667085"
                        multiline={true}
                    />

                </View>

                    {/* Continue Button */}

                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.buttomseparator} />

                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor:'white',

    },
div:{
backgroundColor:'white',
padding: 15,
marginVertical:15,
borderRadius:8,
elevation: 5, 
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
    dateText: {
        verticalAlign: 'middle',
        color: "#667085",
        flex: 1,
    },
    calendarIcon: {
        marginLeft: 10,
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
        backgroundColor: "#D0D5DD",
        marginTop: 15,
    },
    buttomseparator: {
        height: 1,
        backgroundColor: "#D0D5DD",
        marginBottom: 15,
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor:'#FAFAFA'
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
        minHeight: 45,
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
        width: '90%',
        backgroundColor: '#DC6803',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'center'
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
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15, // Space between image and button
      },
      image: {
        marginTop:15,
        width: 130,
        height: 130,
        borderRadius: 65, // Make it a circle if you prefer
      },
      uploadButton: {
        backgroundColor: '#DC6803',
        width: '30%',
        paddingVertical: 12,
        alignSelf:'center',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
      },
});


