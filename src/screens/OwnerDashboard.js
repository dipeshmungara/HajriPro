import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const OwnerDashboard = ({navigation}) => {
  const stats = {
    totalProjects: 5,
    activeWorkers: 42,
    todayAttendance: 38,
    monthlyAttendance: '92%',
  };

  const quickActions = [
    {
      id: 1,
      title: 'Add Project',
      icon: svg.PlusSvg,
      color: theme.colors.primary,
      onPress: () => navigation.navigate('AddProject'),
    },
    {
      id: 2,
      title: 'Add Worker',
      icon: svg.UserSvg,
      color: theme.colors.accent,
      onPress: () => navigation.navigate('AddWorker'),
    },
    {
      id: 3,
      title: 'View Reports',
      icon: svg.FileTextSvg,
      color: theme.colors.success,
      onPress: () => navigation.navigate('Reports'),
    },
  ];

  const recentProjects = [
    {id: 1, name: 'Residential Complex A', workers: 15, attendance: '95%'},
    {id: 2, name: 'Commercial Building B', workers: 12, attendance: '88%'},
    {id: 3, name: 'Infrastructure Project C', workers: 15, attendance: '92%'},
  ];

  const renderHeader = () => {
    return (
      <components.Header
        user={true}
        title="Dashboard"
        containerStyle={{paddingHorizontal: 20}}
      />
    );
  };

  const renderStats = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: responsiveHeight(2),
          marginBottom: responsiveHeight(3),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              width: responsiveWidth(47),
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
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Total Projects
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_24,
                color: theme.colors.primary,
              }}
            >
              {stats.totalProjects}
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(47),
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
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Active Workers
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_24,
                color: theme.colors.accent,
              }}
            >
              {stats.activeWorkers}
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(47),
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Today's Attendance
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_24,
                color: theme.colors.success,
              }}
            >
              {stats.todayAttendance}
            </Text>
          </View>
          <View
            style={{
              width: responsiveWidth(47),
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Monthly Avg
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_24,
                color: theme.colors.textColor,
              }}
            >
              {stats.monthlyAttendance}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderQuickActions = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: responsiveHeight(3)}}>
        <Text
          style={{
            ...theme.fonts.SourceSansPro_SemiBold_18,
            color: theme.colors.textColor,
            marginBottom: responsiveHeight(2),
          }}
        >
          Quick Actions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {quickActions.map((action) => (
            <TouchableOpacity
              key={action.id}
              style={{
                flex: 1,
                backgroundColor: theme.colors.white,
                borderRadius: 12,
                padding: 16,
                alignItems: 'center',
                marginHorizontal: 4,
                borderWidth: 1,
                borderColor: theme.colors.strokeColor,
              }}
              onPress={action.onPress}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: action.color + '20',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <action.icon color={action.color} />
              </View>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.textColor,
                  textAlign: 'center',
                }}
              >
                {action.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderProjects = () => {
    return (
      <View style={{paddingHorizontal: 20, marginBottom: responsiveHeight(3)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: responsiveHeight(2),
          }}
        >
          <Text
            style={{
              ...theme.fonts.SourceSansPro_SemiBold_18,
              color: theme.colors.textColor,
            }}
          >
            Recent Projects
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProjectList')}>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.primary,
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
        {recentProjects.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: theme.colors.strokeColor,
            }}
            onPress={() => navigation.navigate('ProjectDetail', {project})}
          >
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_16,
                color: theme.colors.textColor,
                marginBottom: 8,
              }}
            >
              {project.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.bodyTextColor,
                }}
              >
                Workers: {project.workers}
              </Text>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.success,
                }}
              >
                Attendance: {project.attendance}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <SafeAreaView edges={['top']} style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
        {renderHeader()}
        <ScrollView
          contentContainerStyle={{
            paddingBottom: responsiveHeight(4),
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderStats()}
          {renderQuickActions()}
          {renderProjects()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default OwnerDashboard;

