import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';

const CheckOut = ({navigation, route}) => {
  const checkInTime = route?.params?.checkInTime || '09:30 AM';
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleCheckOut = () => {
    // TODO: Call API to check out
    navigation.navigate('CheckOutSuccess', {
      checkInTime,
      checkOutTime: currentTime,
    });
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title="Check Out" />;
  };

  const renderContent = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: responsiveHeight(4)}}>
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 16,
            padding: 24,
            marginBottom: responsiveHeight(4),
            borderWidth: 1,
            borderColor: theme.colors.strokeColor,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              ...theme.fonts.SourceSansPro_Regular_16,
              color: theme.colors.bodyTextColor,
              marginBottom: 8,
            }}
          >
            Check In Time
          </Text>
          <Text
            style={{
              ...theme.fonts.SourceSansPro_SemiBold_32,
              color: theme.colors.primary,
              marginBottom: 24,
            }}
          >
            {checkInTime}
          </Text>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: theme.colors.strokeColor,
              marginBottom: 24,
            }}
          />
          <Text
            style={{
              ...theme.fonts.SourceSansPro_Regular_16,
              color: theme.colors.bodyTextColor,
              marginBottom: 8,
            }}
          >
            Check Out Time
          </Text>
          <Text
            style={{
              ...theme.fonts.SourceSansPro_SemiBold_32,
              color: theme.colors.accent,
            }}
          >
            {currentTime}
          </Text>
        </View>

        <components.Button
          title="Confirm Check Out"
          onPress={handleCheckOut}
        />
      </View>
    );
  };

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      {renderHeader()}
      {renderContent()}
    </components.SafeAreaView>
  );
};

export default CheckOut;

