import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';

const OTPLogin = ({navigation, route}) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const language = route?.params?.language || 'en';

  const handleSendOTP = () => {
    if (mobile.length === 10) {
      setShowOtp(true);
      // TODO: Call API to send OTP
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // TODO: Verify OTP and navigate based on role
      navigation.navigate('TabNavigator');
    }
  };

  const renderHeader = () => {
    return <components.Header goBack={true} goBackColor={theme.colors.white} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.fonts.SourceSansPro_SemiBold_32,
            lineHeight: theme.fonts.SourceSansPro_SemiBold_32.fontSize * 1.6,
            color: theme.colors.textColor,
            marginBottom: theme.sizes.marginBottom_30,
          }}
        >
          {showOtp ? 'Enter OTP' : 'Login with Mobile'}
        </Text>

        {!showOtp ? (
          <>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_16,
                lineHeight: theme.fonts.SourceSansPro_Regular_16.fontSize * 1.6,
                color: theme.colors.bodyTextColor,
                marginBottom: theme.sizes.marginBottom_20,
              }}
            >
              Enter your mobile number to receive OTP
            </Text>
            <components.InputField
              placeholder="Enter mobile number"
              keyboardType="phone-pad"
              maxLength={10}
              value={mobile}
              onChangeText={setMobile}
              containerStyle={{marginBottom: theme.sizes.marginBottom_30}}
            />
            <components.Button
              title="Send OTP"
              onPress={handleSendOTP}
              disabled={mobile.length !== 10}
            />
          </>
        ) : (
          <>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_16,
                lineHeight: theme.fonts.SourceSansPro_Regular_16.fontSize * 1.6,
                color: theme.colors.bodyTextColor,
                marginBottom: theme.sizes.marginBottom_20,
              }}
            >
              OTP sent to {mobile}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: theme.colors.strokeColor,
                borderRadius: 10,
                backgroundColor: theme.colors.white,
                paddingHorizontal: 15,
                height: 50,
                justifyContent: 'center',
                marginBottom: theme.sizes.marginBottom_30,
              }}
            >
              <TextInput
                placeholder="Enter 6-digit OTP"
                keyboardType="number-pad"
                maxLength={6}
                value={otp}
                onChangeText={setOtp}
                style={{
                  ...theme.fonts.SourceSansPro_Regular_16,
                  color: theme.colors.textColor,
                }}
              />
            </View>
            <components.Button
              title="Verify OTP"
              onPress={handleVerifyOTP}
              disabled={otp.length !== 6}
            />
            <TouchableOpacity
              style={{marginTop: 20, alignSelf: 'center'}}
              onPress={() => setShowOtp(false)}
            >
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_16,
                  color: theme.colors.primary,
                }}
              >
                Change Mobile Number
              </Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAwareScrollView>
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

export default OTPLogin;

