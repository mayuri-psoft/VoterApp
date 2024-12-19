import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Dropdown } from 'react-native-element-dropdown'; // Import Dropdown
import axios from 'axios';
import url from '../env';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function Location({ navigation }) {
    const [address, setAddress] = useState('');
    const [floor, setFloor] = useState('');
    const [road, setRoad] = useState('');


    const [cityData, setCityData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [wardData, setWardData] = useState([]);
    const [areaData, setAreaData] = useState([]);
    const [roadData, setRoadData] = useState([]);
    const [buildingData, setBuildingData] = useState([]);

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);
    const [selectedRoad, setSelectedRoad] = useState(null);
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const [isCityFocus, setIsCityFocus] = useState(false);
    const [isLocationFocus, setIsLocationFocus] = useState(false);
    const [isWardFocus, setIsWardFocus] = useState(false);
    const [isAreaFocus, setIsAreaFocus] = useState(false);
    const [isRoadFocus, setIsRoadFocus] = useState(false);
    const [isBuildingFocus, setIsBuildingFocus] = useState(false);
    // Fetch cities on mount
    useEffect(() => {
        const fetchCities = async () => {
            try {
                console.log(`${url.nodeapipath}city`);

                const response = await axios.get(`${url.nodeapipath}city`);
                console.log(response.data);

                const formattedCities = response.data.map((city) => ({
                    label: city.cityName,
                    value: city._id,
                }));
                setCityData(formattedCities);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        console.log(cityData, 'kkkkkkkk');

        fetchCities();
    }, []);

    const fetchLocations = async (cityId) => {
        try {
            const response = await axios.get(`${url.nodeapipath}location/city/${cityId}`);
            const formattedLocations = response.data.map((location) => ({
                label: location.locationName,
                value: location._id,
            }));
            setLocationData(formattedLocations);
            setWardData([]); // Reset wards and areas
            setAreaData([]);
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    // Fetch wards when a location is selected
    const fetchWards = async (id, type = 'location') => {
        try {
            const apiPath = type === 'location'
                ? `${url.nodeapipath}ward/location/${id}`
                : `${url.nodeapipath}ward/city/${id}`;

            const response = await axios.get(apiPath);
            const formattedWards = response.data.map((ward) => ({
                label: `Ward ${ward.wardName}`,
                value: ward._id,
            }));

            setWardData(formattedWards);
            setAreaData([]); // Reset areas as wards have changed
        } catch (error) {
            console.error('Error fetching wards:', error);
        }
    };


    // Fetch areas when a ward is selected
    const fetchAreas = async (id, type = 'ward') => {
        try {
            const apiPath = type === 'ward'
                ? `${url.nodeapipath}area/ward/${id}`
                : `${url.nodeapipath}area/location/${id}`;

            const response = await axios.get(apiPath);
            const formattedAreas = response.data.map((area) => ({
                label: area.areaName,
                value: area._id,
            }));

            setAreaData(formattedAreas);
        } catch (error) {
            console.error('Error fetching areas:', error);
        }
    };

    const fetchRoads = async (id, type = 'ward') => {
        try {
            const apiPath = type === 'ward'
                ? `${url.nodeapipath}road/ward/${id}`
                : `${url.nodeapipath}road/area/${id}`;

            const response = await axios.get(apiPath);
            const formattedRoads = response.data.map((road) => ({
                label: road.roadName,
                value: road._id,
            }));
            setRoadData(formattedRoads);
            setBuildingData([]); // Reset buildings when roads change
        } catch (error) {
            console.error('Error fetching roads:', error);
        }
    };

    const fetchBuildings = async (roadId) => {
        try {
            const response = await axios.get(`${url.nodeapipath}building/road/${roadId}`);
            const formattedBuildings = response.data.map((building) => ({
                label: building.buildingName,
                value: building._id,
            }));
            setBuildingData(formattedBuildings);
        } catch (error) {
            console.error('Error fetching buildings:', error);
        }
    };

    const handleSave = () => {
        if (!selectedCity || !selectedLocation || !selectedWard || !selectedArea || !selectedBuilding) {
            ToastAndroid.show('Please fill all required fields', ToastAndroid.SHORT);
            return;
        }

        const data = {
            address,
            floor,
            road,
            cityId: selectedCity,
            locationId: selectedLocation,
            wardId: selectedWard,
            areaId: selectedArea,
            buildingId: selectedBuilding,  // Adding selected building
        };

        console.log('Form Data:', data);
        // Submit the data to your API
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Location</Text>
            </View>
            <View style={styles.topseparator} />
            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.div}>
                        {/* City Dropdown */}
                        <Text style={styles.fieldLabel}>
                            City <Text style={styles.required}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={cityData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            itemTextStyle={{ color: "#667085" }}
                            placeholder={!isCityFocus ? 'Select City' : '...'}
                            value={selectedCity}
                            onFocus={() => setIsCityFocus(true)}
                            onBlur={() => setIsCityFocus(false)}
                            onChange={(item) => {
                                setSelectedCity(item.value);
                                setIsCityFocus(false);
                                fetchWards(item.value, 'city');
                                fetchLocations(item.value);
                            }}
                        />

                        {/* Location Dropdown */}
                        <Text style={styles.fieldLabel}>
                            Location <Text style={styles.required}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={locationData}
                            maxHeight={300}
                            itemTextStyle={{ color: "#667085" }}
                            labelField="label"
                            valueField="value"
                            placeholder={!isLocationFocus ? 'Select Location' : '...'}
                            value={selectedLocation}
                            onFocus={() => setIsLocationFocus(true)}
                            onBlur={() => setIsLocationFocus(false)}
                            onChange={(item) => {
                                setSelectedLocation(item.value);
                                setIsLocationFocus(false);
                                fetchWards(item.value, 'location');
                                fetchAreas(item.value, 'location');

                            }}
                        />

                        {/* Ward Dropdown */}
                        <Text style={styles.fieldLabel}>
                            Ward <Text style={styles.required}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={wardData}
                            maxHeight={300}
                            itemTextStyle={{ color: "#667085" }}
                            labelField="label"
                            valueField="value"
                            placeholder={!isWardFocus ? 'Select Ward' : '...'}
                            value={selectedWard}
                            onFocus={() => setIsWardFocus(true)}
                            onBlur={() => setIsWardFocus(false)}
                            onChange={(item) => {
                                setSelectedWard(item.value);
                                setIsWardFocus(false);
                                fetchAreas(item.value, 'ward');
                                fetchRoads(item.value, 'ward'); // Fetch roads by ward

                            }}
                        />

                        {/* Area Dropdown */}
                        <Text style={styles.fieldLabel}>
                            Area <Text style={styles.required}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={areaData}
                            maxHeight={300}
                            itemTextStyle={{ color: "#667085" }}
                            labelField="label"
                            valueField="value"
                            placeholder={!isAreaFocus ? 'Select Area' : '...'}
                            value={selectedArea}
                            onFocus={() => setIsAreaFocus(true)}
                            onBlur={() => setIsAreaFocus(false)}
                            onChange={(item) => {
                                setSelectedArea(item.value);
                                setIsAreaFocus(false);
                                fetchRoads(item.value, 'area'); // Fetch roads by area
                            }}
                        />
                        <Text style={styles.fieldLabel}>
                            Road <Text style={styles.required}>*</Text>
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={roadData}
                            maxHeight={300}
                            itemTextStyle={{ color: "#667085" }}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Road"
                            value={selectedRoad}
                            onFocus={() => setIsRoadFocus(true)}
                            onBlur={() => setIsRoadFocus(false)}
                            onChange={(item) => {
                                setSelectedRoad(item.value);
                                fetchBuildings(item.value); // Fetch buildings by road
                            }}
                        />
                        <Text style={styles.fieldLabel}>Building</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={buildingData}
                            maxHeight={300}
                            itemTextStyle={{ color: "#667085" }}
                            labelField="label"
                            valueField="value"
                            placeholder="Select Building"
                            value={selectedBuilding}
                            onFocus={() => setIsBuildingFocus(true)}
                            onBlur={() => setIsBuildingFocus(false)}
                            onChange={(item) => setSelectedBuilding(item.value)}
                        />

                        {/* Address Input */}
                        <Text style={styles.fieldLabel}>Soc/Building/Chwal Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Soc/Building/Chwal Name"
                            placeholderTextColor={'#667085'}
                            value={address}
                            onChangeText={setAddress}
                        />

                        {/* Floor Input */}
                        <Text style={styles.fieldLabel}>Floor No</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Floor Number"
                            value={floor}
                            placeholderTextColor={'#667085'}
                            onChangeText={setFloor}
                        />
                          <Text style={styles.fieldLabel}>Room No</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Room Number"
                            value={floor}
                            placeholderTextColor={'#667085'}
                            onChangeText={setFloor}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.continueButton} onPress={handleSave}>
                    <Text style={styles.continueButtonText}>Save</Text>
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
        padding: 15,
        marginVertical: 15,
        borderRadius: 8,
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
        backgroundColor: '#FAFAFA'
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
        color: 'black',
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
        marginTop: 15,
        width: 130,
        height: 130,
        borderRadius: 65, // Make it a circle if you prefer
    },
    uploadButton: {
        backgroundColor: '#DC6803',
        width: '30%',
        paddingVertical: 12,
        alignSelf: 'center',
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


