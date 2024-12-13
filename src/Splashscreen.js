import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; // Navigation hook
import logo from './assets/sysmol.svg';
import left from './assets/left.svg';
import right from './assets/right.svg';

const SplashScreen = () => {
  const [progress] = useState(new Animated.Value(0)); // Initialize Animated Value
  const navigation = useNavigation(); // Navigation object

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1, // Progress to 100%
      duration: 1000, // 2 seconds total
      easing: Easing.linear, // Smooth animation
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('onboard'); // Replace with Dashboard screen
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <SvgXml xml={logo} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>MATDATA</Text>

      {/* Loading Bar */}
      <View style={styles.loadingBarContainer}>
        <Animated.View
          style={[
            styles.loadingBar,
            {
              width: progress.interpolate({
                inputRange: [0,0.3,0.6, 1],
                outputRange: ['0%','30%','60%','100%'],
              }),
            },
          ]}
        />
      </View>

      {/* Loading Text */}
      <Text style={styles.loadingText}>loading...</Text>

      {/* Left SVG */}
      <SvgXml xml={left} style={styles.rightSvg} />

      {/* Right SVG */}
      <SvgXml xml={right} style={styles.leftSvg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E04F16',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: '30%',
    right: '23%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: '45%',
  },
  loadingBarContainer: {
    width: '50%',
    height: 6,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 3,
    overflow: 'hidden',
    position: 'absolute',
    top: '51%', // Place directly below MATDATA
  },
  loadingBar: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  loadingText: {
    fontSize: 14,
    color: '#FFFFFF',
    position: 'absolute',
    top: '52%', // Slightly below the loading bar
  },
  leftSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  rightSvg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default SplashScreen;
