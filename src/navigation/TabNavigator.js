import {View, TouchableOpacity, StatusBar, Text} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setScreen} from '../store/tabSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {components} from '../components';
import {svg} from '../assets/svg';
import {theme} from '../constants';

// Import role-based dashboards
import OwnerDashboard from '../screens/OwnerDashboard';
import WorkerDashboard from '../screens/WorkerDashboard';
import PartnerDashboard from '../screens/PartnerDashboard';
import AttendanceOverview from '../screens/AttendanceOverview';
import Reports from '../screens/Reports';
import Profile from '../screens/Profile';

const TabNavigator = () => {
  const dispatch = useDispatch();
  const currentTabScreen = useSelector((state) => state.tab.screen);
  const insets = useSafeAreaInsets();
  const homeIndicatorHeight = insets.bottom;

  // TODO: Get user role from store/context
  const userRole = 'owner'; // 'owner', 'worker', or 'partner'

  const getTabs = () => {
    if (userRole === 'owner') {
      return [
        {name: 'Dashboard', icon: svg.DashboardSvg},
        {name: 'Attendance', icon: svg.NotificationSvg},
        {name: 'Reports', icon: svg.FileTextSvg},
        {name: 'Profile', icon: svg.UserSvg},
      ];
    } else if (userRole === 'worker') {
      return [
        {name: 'Dashboard', icon: svg.DashboardSvg},
        {name: 'Profile', icon: svg.UserSvg},
      ];
    } else {
      // partner
      return [
        {name: 'Dashboard', icon: svg.DashboardSvg},
        {name: 'Attendance', icon: svg.NotificationSvg},
        {name: 'Profile', icon: svg.UserSvg},
      ];
    }
  };

  const tabs = getTabs();

  const renderStatusBar = () => {
    return (
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
    );
  };

  const homeIndicatorSettings = () => {
    if (homeIndicatorHeight !== 0) {
      return homeIndicatorHeight;
    }
    if (homeIndicatorHeight === 0) {
      return 20;
    }
  };

  const renderHeader = () => {
    if (currentTabScreen === 'Dashboard' && userRole === 'owner') {
      return (
        <components.Header
          user={true}
        />
      );
    }
  };

  const renderScreen = () => {
    if (userRole === 'owner') {
      if (currentTabScreen === 'Dashboard') return <OwnerDashboard />;
      if (currentTabScreen === 'Attendance') return <AttendanceOverview />;
      if (currentTabScreen === 'Reports') return <Reports />;
      if (currentTabScreen === 'Profile') return <Profile />;
    } else if (userRole === 'worker') {
      if (currentTabScreen === 'Dashboard') return <WorkerDashboard />;
      if (currentTabScreen === 'Profile') return <Profile />;
    } else {
      // partner
      if (currentTabScreen === 'Dashboard') return <PartnerDashboard />;
      if (currentTabScreen === 'Attendance') return <AttendanceOverview />;
      if (currentTabScreen === 'Profile') return <Profile />;
    }
    return <OwnerDashboard />;
  };

  const renderBottomTab = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: theme.colors.primaryDark,
          borderRadius: 14,
          height: 63,
          paddingHorizontal: 10,
          marginHorizontal: 20,
          marginBottom: homeIndicatorSettings(),
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 16,
                height: '100%',
                justifyContent: 'center',
              }}
              onPress={() => dispatch(setScreen(tab.name))}
            >
              <View>
                <tab.icon
                  color={
                    currentTabScreen === tab.name
                      ? theme.colors.accent
                      : theme.colors.white
                  }
                />
                {tab.name === 'Attendance' &&
                  currentTabScreen !== 'Attendance' && (
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 8 / 2,
                        right: 0,
                        top: 0,
                        backgroundColor: theme.colors.accent,
                        position: 'absolute',
                      }}
                    />
                  )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <components.SafeAreaView
      edges={['top']}
      background={currentTabScreen === 'Attendance' ? true : false}
    >
      {renderStatusBar()}
      {renderHeader()}
      {renderScreen()}
      {renderBottomTab()}
    </components.SafeAreaView>
  );
};

export default TabNavigator;
