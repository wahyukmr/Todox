import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  const [newNotification, setNewNotification] = useState(false);

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.textHeadline}>Today's tasks</Text>
      <TouchableOpacity style={styles.btnNotification}>
        <Icon
          name={newNotification ? 'bell-badge-outline' : 'bell-outline'}
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
