import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';

const ProjectList = ({navigation}) => {
  const projects = [
    {id: 1, name: 'Residential Complex A', workers: 15, status: 'Active'},
    {id: 2, name: 'Commercial Building B', workers: 12, status: 'Active'},
    {id: 3, name: 'Infrastructure Project C', workers: 15, status: 'Active'},
  ];

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Projects" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
      >
        {projects.map((project) => (
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
                ...theme.fonts.SourceSansPro_SemiBold_18,
                color: theme.colors.textColor,
                marginBottom: 8,
              }}
            >
              {project.name}
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                {project.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </components.SafeAreaView>
  );
};

export default ProjectList;

