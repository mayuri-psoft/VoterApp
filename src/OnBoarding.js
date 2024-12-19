import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import slideImage from "./assets/onboard.svg";

const { width } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "Your Voting Info",
            description:
                "Get updates about your voting ward, Booth, Govt Policy, Job opening, Political Programs, and Events.",
        },
        {
            title: "Stay Informed",
            description:
                "Receive notifications about key voting dates and critical news in your area.",
        },
        {
            title: "Access Job Openings",
            description:
                "Find government and private job openings directly from the app.",
        },
        {
            title: "Policy Updates",
            description:
                "Get timely updates about new government policies and initiatives.",
        },
        {
            title: "Political Programs",
            description: "Stay informed about political events and programs.",
        },
    ];

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            // scrollEventThrottle={16}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={styles.slide}>
                        <View style={styles.imageContainer}>
                            <SvgXml xml={slideImage} style={styles.image} />
                        </View>

                        <View style={styles.contentBox}>
                            <Text style={styles.title}>{slide.title}</Text>
                            <Text style={styles.description}>{slide.description}</Text>
                            <TouchableOpacity
                                style={styles.getStartedButton}
                                onPress={() => {
                                        navigation.navigate("register");
                                }}
                            >
                                <Text style={styles.getStartedButtonText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                ))}
            </ScrollView>
            {/* Carousel Dots */}
            <View style={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

            <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.replace("Dashboard")}
            >
                <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    slide: {
        width,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -50
    },

    contentBox: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#D0D5DD",
        borderRadius: 20,
        padding: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#101828",
        fontFamily: "Inter",
        textAlign: "center",
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: "#475467",
        fontFamily: "Inter",
        textAlign: "center",
        marginBottom: 20,
    },
    getStartedButton: {
        paddingVertical: 12,
        paddingHorizontal: 40,
        backgroundColor: "#DC6803",
        borderRadius: 10,
    },
    getStartedButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    dotsContainer: {
        flexDirection: "row",
        marginTop: 30,
        position: "absolute",
        bottom: 90,
        alignSelf: "center",

    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#D0D5DD",
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: "#DC6803",
    },
    skipButton: {
        position: "absolute",
        bottom: 25,
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: "#A5EFE6",
        backgroundColor: "#F9FAFB",
        borderRadius: 20,
    },
    skipButtonText: {
        color: "#104755",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Onboarding;