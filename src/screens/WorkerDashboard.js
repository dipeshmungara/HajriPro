import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';

const WorkerDashboard = ({navigation}) => {
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const renderHeader = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(3),
          paddingBottom: responsiveHeight(2),
        }}
      >
        <Text
          style={{
            ...theme.fonts.SourceSansPro_SemiBold_24,
            color: theme.colors.textColor,
            marginBottom: 4,
          }}
        >
          Welcome, Worker Name
        </Text>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_Regular_14,
            color: theme.colors.bodyTextColor,
          }}
        >
          {currentDate}
        </Text>
      </View>
    );
  };

  const renderProjectInfo = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: responsiveHeight(3),
          backgroundColor: theme.colors.white,
          borderRadius: 12,
          padding: 16,
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
          Current Project
        </Text>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_Regular_16,
            color: theme.colors.primary,
            marginBottom: 4,
          }}
        >
          Project Name
        </Text>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_Regular_12,
            color: theme.colors.bodyTextColor,
          }}
        >
          Location: Site Address
        </Text>
      </View>
    );
  };

  const renderAttendanceButtons = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: responsiveHeight(3),
        }}
      >
        {!hasCheckedIn ? (
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.success,
              paddingVertical: responsiveHeight(4),
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: responsiveHeight(2),
            }}
            onPress={() => navigation.navigate('CheckIn')}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_28,
                color: theme.colors.white,
                marginBottom: 8,
              }}
            >
              Check In
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_16,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Tap to mark your attendance
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <View
              style={{
                backgroundColor: theme.colors.success,
                padding: 16,
                borderRadius: 12,
                marginBottom: responsiveHeight(2),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    ...theme.fonts.SourceSansPro_Regular_14,
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  Checked In
                </Text>
                <Text
                  style={{
                    ...theme.fonts.SourceSansPro_SemiBold_18,
                    color: theme.colors.white,
                  }}
                >
                  09:30 AM
                </Text>
              </View>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: theme.colors.white,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.error,
                paddingVertical: responsiveHeight(4),
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('CheckOut')}
            >
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_SemiBold_28,
                  color: theme.colors.white,
                  marginBottom: 8,
                }}
              >
                Check Out
              </Text>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_16,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Tap to end your work day
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  const renderTodayStats = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: responsiveHeight(2),
        }}
      >
        <Text
          style={{
            ...theme.fonts.SourceSansPro_SemiBold_18,
            color: theme.colors.textColor,
            marginBottom: responsiveHeight(2),
          }}
        >
          Today's Summary
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              marginRight: 8,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_12,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Working Hours
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_20,
                color: theme.colors.textColor,
              }}
            >
              8h 30m
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              marginLeft: 8,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_12,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              This Month
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_20,
                color: theme.colors.textColor,
              }}
            >
              22 Days
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: responsiveHeight(4),
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderHeader()}
          {renderProjectInfo()}
          {renderAttendanceButtons()}
          {renderTodayStats()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default WorkerDashboard;

