import React from 'react';
import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Banner, InputNewTask} from './components';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';
  const backgroundStyle = isDarkTheme ? '#1D1F21' : '#ffffff';

  return (
    <View style={{...styles.container, backgroundStyle}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.textHeadline}>Today's tasks</Text>
        <Banner />
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
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textHeadline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
