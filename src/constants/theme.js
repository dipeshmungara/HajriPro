import {Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window');

const colors = {
  // Primary: Indigo / Dark Blue (as per MD file)
  mainDark: '#1E3A8A', // Indigo-800
  mainColor: '#3B82F6', // Indigo-500
  primary: '#4F46E5', // Indigo-600
  primaryDark: '#312E81', // Indigo-900
  
  // Secondary: Purple Accent
  accent: '#9333EA', // Purple-600
  accentLight: '#A855F7', // Purple-500
  
  // Background: White
  white: '#FFFFFF',
  background: '#F9FAFB', // Gray-50
  transparent: 'transparent',
  
  // Text colors
  bodyTextColor: '#6B7280', // Gray-500
  textColor: '#1F2937', // Gray-800
  textLight: '#9CA3AF', // Gray-400
  
  // UI colors
  lightBlue: '#DBE9F5',
  strokeColor: '#E5E7EB', // Gray-200
  imageBackground: '#F3F4F6', // Gray-100
  
  // Status colors
  success: '#10B981', // Green-500
  error: '#EF4444', // Red-500
  warning: '#F59E0B', // Amber-500
};

// Use exact lowercase font names as registered in App.js
const fonts = {
  SourceSansPro_Regular_40: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(5.2),
  },
  SourceSansPro_Regular_32: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(4.2),
  },
  SourceSansPro_SemiBold_32: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(4.2),
  },
  SourceSansPro_Regular_28: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(3.7),
  },
  SourceSansPro_SemiBold_28: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(3.7),
  },
  SourceSansPro_Regular_24: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(3.2),
  },
  SourceSansPro_SemiBold_24: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(3.2),
  },
  SourceSansPro_Regular_20: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(2.6),
  },
  SourceSansPro_Regular_18: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(2.6),
  },
  SourceSansPro_Regular_16: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(2.1),
  },
  SourceSansPro_SemiBold_16: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(2.1),
  },
  SourceSansPro_Regular_14: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(1.8),
  },
  SourceSansPro_SemiBold_14: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(1.8),
  },
  SourceSansPro_Regular_12: {
    fontFamily: 'SourceSansPro-regular',
    fontSize: responsiveFontSize(1.6),
  },
  SourceSansPro_Regular_10: {
    fontFamily: 'SourceSansPro-semibold',
    fontSize: responsiveFontSize(1.4),
  },
};

const sizes = {
  width,
  height,
  width_20: responsiveWidth(6),
  height_50: responsiveHeight(6),
  marginBottom_4: responsiveHeight(0.5),
  marginBottom_8: responsiveHeight(1),
  marginBottom_10: responsiveHeight(1.2),
  marginBottom_12: responsiveHeight(1.4),
  marginBottom_14: responsiveHeight(1.8),
  marginBottom_17: responsiveHeight(2.1),
  marginBottom_20: responsiveHeight(2.4),
  marginBottom_25: responsiveHeight(3.1),
  marginBottom_30: responsiveHeight(3.3),
  marginBottom_40: responsiveHeight(4.8),
  marginTop_10: responsiveHeight(1.2),
  marginTop_20: responsiveHeight(2.4),
  marginTop_40: responsiveHeight(4.8),
  marginTop_46: responsiveHeight(5.5),
  paddingBottom_10: responsiveHeight(1.2),
  paddingBottom_20: responsiveHeight(2.4),
  paddingTop_10: responsiveHeight(1.2),
  paddingTop_20: responsiveHeight(2.4),
  paddingVertical_15: responsiveHeight(1.9),
};

const theme = {
  colors,
  fonts,
  sizes,
};

export {colors, fonts, sizes, theme};
