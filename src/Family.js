import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SvgXml } from 'react-native-svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

export default function Family({ navigation }) {
    const [entries, setEntries] = useState([
        { name: 'Rakesh Mane', age: '45', relation: 'Father' },
        { name: 'Sunita Mane', age: '42', relation: 'Mother' },
        { name: 'Priya Mane', age: '18', relation: 'Daughter' },
        { name: 'Riya Mane', age: '20', relation: 'Son' },
        { name: 'Ishan Mane', age: '38', relation: 'Wife' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity 
    style={styles.backButton} 
    onPress={() => navigation.goBack()}>
                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Family Details</Text>
            </View>
            <View style={styles.topseparator} />

            <ScrollView>
                <View style={styles.content}>
                    <View style={styles.div}>
                        {entries.map((item, index) => (
                            <View key={index} style={styles.entryRow}>
                                <Text style={styles.entryName}>{item.name}</Text>
                                <Text style={styles.entryAge}>Age : {item.age}</Text>
                                <Text style={styles.entryRelation}>{item.relation}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Buttons Section */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white',
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
    },
    topseparator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginTop: 15,
    },
    buttomseparator: {
        height: 1,
        backgroundColor: '#D0D5DD',
        marginBottom: 15,
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
    },
    div: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 15,
        borderRadius: 8,
        elevation: 3,
    },
    entryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D5DD',
    },
    entryName: {
        fontSize: 14,
        fontWeight:'bold',
        color: '#344054',
        flex: 1,
    },
    entryAge: {
        fontSize: 14,
        color: '#667085',
        flex: 1,
        fontWeight:'bold',
        textAlign: 'center',
    },
    entryRelation: {
        fontSize: 14,
        color: 'green',
        flex: 1,
        fontWeight:'bold',
        textAlign: 'right',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
    },
    editButton: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        backgroundColor:'white',
        borderColor:  '#D0D5DD',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#93370D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#DC6803',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
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
});
