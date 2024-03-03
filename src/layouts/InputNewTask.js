import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InputNewTask() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputNewTaskWrapper}>
      <TextInput placeholder="Enter the task..." style={styles.textInput} />
      {/* onChangeText={}  */}
      <View>
        <Icon name="plus" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputNewTaskWrapper: {
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    backgroundColor: 'red',
    height: 50,
  },
});
