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
      {/* onChangeText={}  */}
      <TextInput placeholder="Enter the task..." />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputNewTaskWrapper: {
    backgroundColor: '#FFFFFF',
  },
});
