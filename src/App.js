import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDateLocation} from './hooks';
import {Banner, Header, InputNewTask, TaskList} from './layouts';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';
  const backgroundStyle = isDarkTheme ? '#1D1F21' : '#ffffff';

  const {
    locationPermissionStatus,
    requestLocationPermission,
    watchId,
    localTime,
    timezone,
  } = useDateLocation();

  useEffect(() => {
    requestLocationPermission();
    return () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, [locationPermissionStatus]);

  return (
    <View style={{...styles.container, backgroundStyle}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.contentWrapper}>
        <Header
          localTime={localTime}
          timezoneStatus={timezone.status}
          locationPermissionStatus={locationPermissionStatus}
        />
        <Banner />
        <TaskList />
        <InputNewTask />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 70,
    paddingHorizontal: 20,
  },
});
