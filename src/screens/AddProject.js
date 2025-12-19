import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const AddProject = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    latitude: '',
    longitude: '',
    radius: '150',
  });

  const handleSave = () => {
    // TODO: Save project
    navigation.goBack();
  };

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Add Project" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
        enableOnAndroid={true}
      >
        <components.InputField
          placeholder="Project Name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.InputField
          placeholder="Project Type"
          value={formData.type}
          onChangeText={(text) => setFormData({...formData, type: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.InputField
          placeholder="Latitude"
          keyboardType="numeric"
          value={formData.latitude}
          onChangeText={(text) => setFormData({...formData, latitude: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.InputField
          placeholder="Longitude"
          keyboardType="numeric"
          value={formData.longitude}
          onChangeText={(text) => setFormData({...formData, longitude: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.InputField
          placeholder="Radius (meters)"
          keyboardType="numeric"
          value={formData.radius}
          onChangeText={(text) => setFormData({...formData, radius: text})}
          containerStyle={{marginBottom: 24}}
        />
        <components.Button title="Save Project" onPress={handleSave} />
      </KeyboardAwareScrollView>
    </components.SafeAreaView>
  );
};

export default AddProject;

