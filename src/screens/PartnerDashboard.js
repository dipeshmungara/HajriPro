import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const PartnerDashboard = ({navigation}) => {
  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header title="Partner Dashboard" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
      >
        <Text
          style={{
            ...theme.fonts.SourceSansPro_Regular_16,
            color: theme.colors.bodyTextColor,
            textAlign: 'center',
            marginTop: responsiveHeight(10),
          }}
        >
          Partner Dashboard - Read-only access
        </Text>
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default PartnerDashboard;

