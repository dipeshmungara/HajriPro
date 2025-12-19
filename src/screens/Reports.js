import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const Reports = ({navigation}) => {
  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Reports" />
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
          Reports feature coming soon
        </Text>
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default Reports;

