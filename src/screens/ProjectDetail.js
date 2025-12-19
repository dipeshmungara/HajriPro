import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const ProjectDetail = ({navigation, route}) => {
  const project = route?.params?.project || {
    name: 'Project Name',
    workers: 15,
    attendance: '95%',
  };

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title={project.name} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 12,
            padding: 20,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: theme.colors.strokeColor,
          }}
        >
          <Text
            style={{
              ...theme.fonts.SourceSansPro_SemiBold_20,
              color: theme.colors.textColor,
              marginBottom: 16,
            }}
          >
            Project Information
          </Text>
          <View style={{marginBottom: 12}}>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Total Workers
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_18,
                color: theme.colors.textColor,
              }}
            >
              {project.workers}
            </Text>
          </View>
          <View style={{marginBottom: 12}}>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_14,
                color: theme.colors.bodyTextColor,
                marginBottom: 4,
              }}
            >
              Attendance Rate
            </Text>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_SemiBold_18,
                color: theme.colors.success,
              }}
            >
              {project.attendance || '95%'}
            </Text>
          </View>
        </View>
        <components.Button
          title="View Workers"
          onPress={() => navigation.navigate('WorkerList', {projectId: project.id})}
        />
        <components.Button
          title="View Attendance"
          onPress={() => navigation.navigate('AttendanceOverview', {projectId: project.id})}
          containerStyle={{marginTop: 12}}
          lightShade={true}
        />
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default ProjectDetail;

