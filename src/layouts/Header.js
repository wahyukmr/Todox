import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({localTime, locationPermissionStatus}) {
  const grantedAccess = locationPermissionStatus === 'granted';
  return (
    <View style={styles.headerWrapper}>
      <View>
        <Text style={styles.textHeadline}>Today's tasks</Text>
        {grantedAccess ? (
          <Text style={styles.textFormatDate}>
            {localTime ? localTime : 'Obtaining the date...'}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.btnNotification}
        onPress={() => console.log(localTime)}>
        <Icon
          name={
            locationPermissionStatus !== 'granted'
              ? 'bell-badge-outline'
              : 'bell-outline'
          }
          size={25}
          color="#1d1f21"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeadline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#1d1f21',
  },
  textFormatDate: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444648',
  },
  btnNotification: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#f5f5f5',
  },
});
