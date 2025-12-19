import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const CheckOutSuccess = ({navigation, route}) => {
  const {checkInTime, checkOutTime} = route?.params || {};

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
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          Check Out Successful!
        </Text>
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 16,
            padding: 20,
            width: '100%',
            marginBottom: 32,
            borderWidth: 1,
            borderColor: theme.colors.strokeColor,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
              }}
            >
              Check In:
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_16,
                color: theme.colors.textColor,
              }}
            >
              {checkInTime || '09:30 AM'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
              }}
            >
              Check Out:
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_16,
                color: theme.colors.textColor,
              }}
            >
              {checkOutTime || '06:00 PM'}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: theme.colors.strokeColor,
              marginBottom: 16,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_16,
                color: theme.colors.textColor,
              }}
            >
              Working Hours:
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_18,
                color: theme.colors.primary,
              }}
            >
              8h 30m
            </Text>
          </View>
        </View>
        <components.Button
          title="Go to Dashboard"
          onPress={() => navigation.navigate('TabNavigator')}
        />
      </View>
    </components.SafeAreaView>
  );
};

export default CheckOutSuccess;

