import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {theme} from '../constants';

const languages = [
  {id: 1, code: 'gu', name: 'ગુજરાતી', nativeName: 'Gujarati'},
  {id: 2, code: 'en', name: 'English', nativeName: 'English'},
  {id: 3, code: 'hi', name: 'हिंदी', nativeName: 'Hindi'},
];

const LanguageSelection = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const renderHeader = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingTop: responsiveHeight(5)}}>
        <Text
          style={{
            color: theme.colors.white,
            ...theme.fonts.SourceSansPro_SemiBold_32,
            lineHeight: theme.fonts.SourceSansPro_SemiBold_32.fontSize * 1.2,
            marginBottom: theme.sizes.marginBottom_10,
          }}
        >
          Select Language
        </Text>
        <Text
          style={{
            color: '#B4B4C6',
            ...theme.fonts.SourceSansPro_Regular_16,
            lineHeight: theme.fonts.SourceSansPro_Regular_16.fontSize * 1.6,
          }}
        >
          Choose your preferred language
        </Text>
      </View>
    );
  };

  const renderLanguages = () => {
    return (
      <View style={{paddingHorizontal: 20, marginTop: responsiveHeight(8)}}>
        {languages.map((language, index) => {
          const isSelected = selectedLanguage?.id === language.id;
          return (
            <TouchableOpacity
              key={language.id}
              style={{
                backgroundColor: isSelected
                  ? theme.colors.accent
                  : 'rgba(255, 255, 255, 0.1)',
                padding: 20,
                borderRadius: 12,
                marginBottom: index < languages.length - 1 ? 16 : 0,
                borderWidth: isSelected ? 2 : 0,
                borderColor: theme.colors.accentLight,
              }}
              onPress={() => setSelectedLanguage(language)}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  ...theme.fonts.SourceSansPro_SemiBold_20,
                  marginBottom: 4,
                }}
              >
                {language.name}
              </Text>
              <Text
                style={{
                  color: '#B4B4C6',
                  ...theme.fonts.SourceSansPro_Regular_14,
                }}
              >
                {language.nativeName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingBottom: responsiveHeight(4),
          marginTop: 'auto',
        }}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: selectedLanguage
              ? theme.colors.accent
              : 'rgba(147, 51, 234, 0.5)',
            paddingVertical: responsiveHeight(2),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}
          disabled={!selectedLanguage}
          onPress={() => {
            if (selectedLanguage) {
              navigation.navigate('OTPLogin', {language: selectedLanguage.code});
            }
          }}
        >
          <Text
            style={{
              color: theme.colors.white,
              ...theme.fonts.SourceSansPro_SemiBold_16,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.primaryDark}}>
      <SafeAreaView edges={['top', 'bottom']} style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        {renderHeader()}
        {renderLanguages()}
        {renderButton()}
      </SafeAreaView>
    </View>
  );
};

export default LanguageSelection;

