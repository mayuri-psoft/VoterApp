import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';

const backArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"></path>
  <path d="M12 5l-7 7 7 7"></path>
</svg>
`;

const PrivacyPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
       <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>    
                                    <SvgXml xml={backArrowSvg} width="24" height="24" />
                </TouchableOpacity>
                <Text style={styles.title}>Privacy Policy</Text>
            </View>

            <View style={styles.topSeparator} />

            {/* Content */}
            <ScrollView style={styles.content}>
                <View style={styles.div}>
                    <Text style={styles.heading}>Data Policy</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id est vitae libero gravida sollicitud Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis felis sed sapien tincidunt,in. Suspendisse luctus augue at venenatis pharetra. Sed vulputate efficitur orci non pretium.
                    </Text>
                </View>

                <View style={styles.div}>
                    <Text style={styles.heading}>Privacy Policy</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis felis sed sapien tincidunt, sit amet dictum justo commodo. Ut consectetur sapien eget nibh ultrices, ut placerat elit laoreet.
                    </Text>
                </View>

                <View style={styles.div}>
                    <Text style={styles.heading}>Use of App</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis felis sed sapien tincidunt. Cras lacinia nisl eget sapien tincidunt, et aliquam felis tincidunt. Maecenas vitae volutpat mauris. Fusce ac ex sit amet augue interdum eleifend.
                    </Text>
                </View>

                <View style={styles.div}>
                    <Text style={styles.heading}>Terms & Conditions</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non velit bibendum, malesuada sapien eget, congue odio. Nam auctor tellus a justo pellentesque, et vestibulum sapien congue.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};
export default PrivacyPage;

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
    content: {
        flex: 1,
        margin: 5,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 10,
    },
    div: {
        marginVertical: 8,
        borderRadius: 8,
        padding: 5,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    contentText: {
        fontSize: 14,
        color: '#475467',
        lineHeight: 20,
    },
})