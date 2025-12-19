import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const CheckInSuccess = ({navigation, route}) => {
  const time = route?.params?.time || new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: theme.colors.success + '20',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <svg.CompletedSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_SemiBold_28,
            color: theme.colors.textColor,
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          Check In Successful!
        </Text>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_Regular_18,
            color: theme.colors.primary,
            marginBottom: 32,
          }}
        >
          Time: {time}
        </Text>
        <components.Button
          title="Go to Dashboard"
          onPress={() => navigation.navigate('TabNavigator')}
        />
      </View>
    </components.SafeAreaView>
  );
};

export default CheckInSuccess;

