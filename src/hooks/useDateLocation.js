import {API_KEY} from '@env';
import {DateTime} from 'luxon';
import {useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function useDateLocation() {
  const [locationPermissionStatus, setLocationPermissionStatus] =
    useState('pending');
  const [timezone, setTimezone] = useState(null);
  const [localTime, setLocalTime] = useState();
  const [watchId, setWatchId] = useState(null);

  const getFormattedDate = timezone => {
    setLocalTime(
      DateTime.now().setZone(timezone).toFormat('EEE, dd MMMM yyyy ZZZZ'),
    );
  };

  const getTimeZone = async position => {
    try {
      const fetchTimeonedb = await fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${position.coords.latitude}&lng=${position.coords.longitude}`,
      );
      const resTimezonedb = await fetchTimeonedb.json();
      setTimezone(resTimezonedb.zoneName);
      getFormattedDate(timezone);
    } catch (error) {
      Alert.alert('Error', 'Unable to get user location: ' + error.message);
    }
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version >= 23) {
        const grantedAccess = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (!grantedAccess) {
          const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Todox App Location Access Permission',
              message:
                'To provide you with the best features, ' +
                "Todox app requires access to your location's time and date.",
              buttonPositive: 'OK',
            },
          );
          setLocationPermissionStatus(status);
        }
        if (locationPermissionStatus === 'granted') {
          const id = Geolocation.watchPosition(
            position => {
              getTimeZone(position);
            },
            error => {
              Alert.alert(
                'Error',
                'Unable to get user location: ' + error.message,
              );
            },
            {distanceFilter: 1000, interval: 86400000},
          );
          setWatchId(id);
        }
      }
    } catch (error) {
      Alert.alert(
        'Warning!',
        'Your device does not support location features.',
      );
    }
  };

  const updateDateAtMidnight = () => {
    const now = DateTime.local();
    const tomorrow = now.plus({days: 1}).startOf('day');
    const msUntilMidnight = tomorrow.diff(now).as('milliseconds');

    setTimeout(() => {
      getFormattedDate(timezone);
      updateDateAtMidnight();
    }, msUntilMidnight);
  };

  return {
    locationPermissionStatus,
    requestLocationPermission,
    updateDateAtMidnight,
    timezone,
    localTime,
    watchId,
  };
}
