import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import search from './assets/search.svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const rightArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18l6-6-6-6"></path>
</svg>
`;

const HelpCenter = () => {
    const [selectedLink, setSelectedLink] = useState('All Order'); // Default selected link
    const [searchText, setSearchText] = useState('');

    // Sample data for questions, can be dynamic based on the selected link
    const questions = {
        'All Order': [
            { id: 1, question: 'How do I place an order?' },
            { id: 2, question: 'Can I modify my order?' },
            { id: 3, question: 'How do I track my order?' },
            { id: 4, question: 'What payment methods are accepted?' },
            { id: 5, question: 'How do I cancel an order?' },
            { id: 6, question: 'Can I add items to my order after placing it?' },
            { id: 7, question: 'How do I change the delivery address for my order?' },
            { id: 8, question: 'What should I do if I received the wrong item?' },
            { id: 9, question: 'Can I place an order for someone else?' },
            { id: 10, question: 'How do I apply a discount code to my order?' },
            { id: 11, question: 'Can I track my order in real time?' },
            { id: 12, question: 'How long does it take for my order to be delivered?' },
            { id: 13, question: 'What should I do if my order is delayed?' }
        ],

        'Services': [
            { id: 1, question: 'What services do you offer?' },
            { id: 2, question: 'How do I avail of services?' },
        ],
        'General': [
            { id: 1, question: 'What is the return policy?' },
            { id: 2, question: 'How can I contact support?' }
        ],
        'Account': [
            { id: 1, question: 'How do I create an account?' },
            { id: 2, question: 'How do I reset my password?' }
        ],
        'Profile': [
            { id: 1, question: 'How do I update my profile?' },
            { id: 2, question: 'How do I delete my account?' }
        ],
    };

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    const filteredQuestions = questions[selectedLink].filter(q => q.question.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
       <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>       
                                 <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Help Center</Text>
            </View>

            {/* Links Bar */}
            <View style={styles.linksBar}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {['All Order', 'Services', 'General', 'Account', 'Profile'].map(link => (
                        <TouchableOpacity
                            key={link}
                            style={[styles.link, selectedLink === link && styles.selectedLink]}
                            onPress={() => handleLinkClick(link)}>
                            <Text style={[styles.linkText, selectedLink === link && styles.selectedLinkText]}>{link}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.topSeparator} />

            {/* Content Section */}
            <View style={styles.content}>
                {/* Search Bar */}
                <View style={styles.searchBarContainer}>
                    <SvgXml xml={search} width="18" height="18" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search for questions..."
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholderTextColor="#667085"
                    />
                </View>

                {/* Questions List */}
                <ScrollView style={styles.questionsList}>
                    {filteredQuestions.map(q => (
                        <View key={q.id} style={styles.questionBox}>
                            <Text style={styles.questionText}>{q.question}</Text>
                            <TouchableOpacity style={styles.arrowButton}>
        <SvgXml xml={rightArrowSvg} width="20" height="20" />
    </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40, // To avoid header overlap
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
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
    linksBar: {
        marginTop: 20,
        paddingLeft: 10
    },
    link: {
        padding: 10,
        marginRight: 15,
        borderRadius: 8,
    },
    selectedLink: {
        backgroundColor: '#175A63', // Active link background color
    },
    selectedLinkText: {
        color: 'white', // Text color for active link
    },
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#667085', // Default text color for inactive links
    },
    content: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FAFAFA', // Background color for content
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    backButton: {
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
    },
    searchBar: {
        flex: 1,
        padding: 10,
        color: '#667085', // Font color inside the search bar
    },
    questionsList: {
        marginTop: 10,
    },
    questionBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        minHeight: 45,
        marginBottom: 10,
        borderColor: '#f0f0f0',
        backgroundColor: 'white', // Background color for each question box
    },
    questionText: {
        fontSize: 14,
        width:'85%',
        color: '#000000', // Font color for questions
    },
    arrowButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default HelpCenter;
