import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {screens} from '../screens';
import TabNavigator from './TabNavigator';

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Core Flow */}
      <Stack.Screen
        name="Onboarding"
        component={screens.Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LanguageSelection"
        component={screens.LanguageSelection}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPLogin"
        component={screens.OTPLogin}
        options={{headerShown: false}}
      />
      
      {/* Main Navigation */}
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      
      {/* Worker Screens */}
      <Stack.Screen
        name="WorkerDashboard"
        component={screens.WorkerDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckIn"
        component={screens.CheckIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOut"
        component={screens.CheckOut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckInSuccess"
        component={screens.CheckInSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOutSuccess"
        component={screens.CheckOutSuccess}
        options={{headerShown: false}}
      />
      
      {/* Owner Screens */}
      <Stack.Screen
        name="OwnerDashboard"
        component={screens.OwnerDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectList"
        component={screens.ProjectList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={screens.ProjectDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddProject"
        component={screens.AddProject}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WorkerList"
        component={screens.WorkerList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddWorker"
        component={screens.AddWorker}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AttendanceOverview"
        component={screens.AttendanceOverview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reports"
        component={screens.Reports}
        options={{headerShown: false}}
      />
      
      {/* Partner Screens */}
      <Stack.Screen
        name="PartnerDashboard"
        component={screens.PartnerDashboard}
        options={{headerShown: false}}
      />
      
      {/* Profile */}
      <Stack.Screen
        name="Profile"
        component={screens.Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPersonalInfo"
        component={screens.EditPersonalInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
