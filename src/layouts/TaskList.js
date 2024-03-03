import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TaskList() {
  return (
    <View style={styles.TaskItemWrapper}>
      <Text style={styles.textHeadline}>Task list:</Text>
      {/* <View>
        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textHeadline: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#1d1f21',
  },
});
