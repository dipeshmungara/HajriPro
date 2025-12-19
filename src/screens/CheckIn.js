import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';

const CheckIn = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isWithinRadius, setIsWithinRadius] = useState(false);

  // Project location (from API)
  const projectLocation = {
    latitude: 23.0225,
    longitude: 72.5714,
    radius: 150, // meters
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setLoading(true);
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission denied');
        setLoading(false);
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Check if within project radius
      const distance = calculateDistance(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude,
        projectLocation.latitude,
        projectLocation.longitude,
      );

      setIsWithinRadius(distance <= projectLocation.radius);
    } catch (err) {
      setError('Failed to get location');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };

  const handleCheckIn = async () => {
    if (!isWithinRadius) {
      setError('You are not within the project location');
      return;
    }

    setLoading(true);
    // TODO: Call API to check in
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('CheckInSuccess', {
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
    }, 1000);
  };

  const renderHeader = () => {
    return <components.Header goBack={true} title="Check In" />;
  };

  const renderContent = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: 20, paddingTop: responsiveHeight(4)}}>
        <View
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 16,
            padding: 20,
            marginBottom: responsiveHeight(3),
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
            Project Location
          </Text>
          <Text
            style={{
              ...theme.fonts.SourceSansPro_Regular_16,
              color: theme.colors.bodyTextColor,
              marginBottom: 8,
            }}
          >
            Project Name
          </Text>
          <Text
            style={{
              ...theme.fonts.SourceSansPro_Regular_14,
              color: theme.colors.bodyTextColor,
            }}
          >
            Allowed radius: {projectLocation.radius} meters
          </Text>
        </View>

        {loading && !location ? (
          <View style={{alignItems: 'center', paddingVertical: 40}}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_16,
                color: theme.colors.bodyTextColor,
                marginTop: 16,
              }}
            >
              Getting your location...
            </Text>
          </View>
        ) : location ? (
          <>
            <View
              style={{
                backgroundColor: isWithinRadius
                  ? theme.colors.success + '20'
                  : theme.colors.error + '20',
                borderRadius: 12,
                padding: 16,
                marginBottom: responsiveHeight(3),
                borderWidth: 1,
                borderColor: isWithinRadius
                  ? theme.colors.success
                  : theme.colors.error,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_SemiBold_16,
                  color: isWithinRadius ? theme.colors.success : theme.colors.error,
                  marginBottom: 8,
                }}
              >
                {isWithinRadius
                  ? '✓ You are within project location'
                  : '✗ You are outside project location'}
              </Text>
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_Regular_14,
                  color: theme.colors.bodyTextColor,
                }}
              >
                Distance: {calculateDistance(
                  location.latitude,
                  location.longitude,
                  projectLocation.latitude,
                  projectLocation.longitude,
                ).toFixed(0)} meters
              </Text>
            </View>

            {error && (
              <View
                style={{
                  backgroundColor: theme.colors.error + '20',
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: responsiveHeight(2),
                }}
              >
                <Text
                  style={{
                    ...theme.fonts.SourceSansPro_Regular_14,
                    color: theme.colors.error,
                  }}
                >
                  {error}
                </Text>
              </View>
            )}

            <components.Button
              title="Check In"
              onPress={handleCheckIn}
              disabled={!isWithinRadius || loading}
            />
          </>
        ) : (
          <View style={{alignItems: 'center', paddingVertical: 40}}>
            <Text
              style={{
                ...theme.fonts.SourceSansPro_Regular_16,
                color: theme.colors.error,
              }}
            >
              {error || 'Failed to get location'}
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 20,
                padding: 12,
                backgroundColor: theme.colors.primary,
                borderRadius: 8,
              }}
              onPress={getLocation}
            >
              <Text
                style={{
                  ...theme.fonts.SourceSansPro_SemiBold_16,
                  color: theme.colors.white,
                }}
              >
                Retry
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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

export default CheckIn;

