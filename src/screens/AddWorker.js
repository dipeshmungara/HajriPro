import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveHeight} from 'react-native-responsive-dimensions';

import {components} from '../components';
import {theme} from '../constants';

const AddWorker = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    projectId: '',
  });

  const handleSave = () => {
    // TODO: Save worker
    navigation.goBack();
  };

  return (
    <components.SafeAreaView background={true}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <components.Header goBack={true} title="Add Worker" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: responsiveHeight(2),
          paddingBottom: responsiveHeight(4),
        }}
        enableOnAndroid={true}
      >
        <components.InputField
          placeholder="Worker Name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.InputField
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          maxLength={10}
          value={formData.mobile}
          onChangeText={(text) => setFormData({...formData, mobile: text})}
          containerStyle={{marginBottom: 16}}
        />
        <components.Button title="Add Worker" onPress={handleSave} />
      </KeyboardAwareScrollView>
    </components.SafeAreaView>
  );
};

export default AddWorker;

