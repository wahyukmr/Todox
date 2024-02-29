import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function InputNewTask() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputNewTaskWrapper}>
      <TextInput placeholder="Enter the task..." />
      {/* onChangeText={}  */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputNewTaskWrapper: {
    backgroundColor: '#FFFFFF',
  },
});
