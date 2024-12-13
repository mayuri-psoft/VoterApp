import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/Dashboard';
import { StatusBar } from 'react-native';
import SplashScreen from './src/Splashscreen';
import Onboarding from './src/OnBoarding';
import RegisterPage from './src/Register';
import Login from './src/Login';
import AccountDetailsPage from './src/Register2';
import ForgotPassword from './src/ForgotPw';
import GovernmentPage from './src/Government';
import Profile from './src/Profile';
import Complain from './src/Complain';
import Checkemail from './src/checkemail';
import OTP from './src/OTP';
import NewPassword from './src/NewPassword';
import PasswordReset from './src/pwreset';
import Account from './src/Account';
import VoterSlip from './src/VoterSlip';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <Stack.Navigator >
        <Stack.Screen
          name="Splashscreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboard"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Complain"
          component={Complain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register2"
          component={AccountDetailsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pwreset"
          component={PasswordReset}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="newpass"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={OTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgetpass"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkmail"
          component={Checkemail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schemes"
          component={GovernmentPage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Voterslip"
          component={VoterSlip}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
