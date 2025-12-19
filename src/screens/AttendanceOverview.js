import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const AttendanceOverview = ({navigation, route}) => {
  const attendance = [
    {id: 1, name: 'Rajesh Patel', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present'},
    {id: 2, name: 'Kiran Shah', checkIn: '09:15 AM', checkOut: '-', status: 'Present'},
    {id: 3, name: 'Amit Desai', checkIn: '-', checkOut: '-', status: 'Absent'},
  ];

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Attendance Overview" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
      >
        {attendance.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_16,
                color: theme.colors.textColor,
                marginBottom: 8,
              }}
            >
              {item.name}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.bodyTextColor,
                }}
              >
                In: {item.checkIn}
              </Text>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.bodyTextColor,
                }}
              >
                Out: {item.checkOut}
              </Text>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: item.status === 'Present' ? theme.colors.success : theme.colors.error,
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default AttendanceOverview;

