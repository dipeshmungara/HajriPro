import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const WorkerList = ({navigation, route}) => {
  const workers = [
    {id: 1, name: 'Rajesh Patel', mobile: '9876543210', status: 'Active'},
    {id: 2, name: 'Kiran Shah', mobile: '9876543211', status: 'Active'},
    {id: 3, name: 'Amit Desai', mobile: '9876543212', status: 'Active'},
  ];

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Workers" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
      >
        {workers.map((worker) => (
          <View
            key={worker.id}
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
                ...theme.fonts.SourceSansPro_SemiBold_18,
                color: theme.colors.textColor,
                marginBottom: 4,
              }}
            >
              {worker.name}
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              {worker.mobile}
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.success,
              }}
            >
              {worker.status}
            </Text>
          </View>
        ))}
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default WorkerList;

