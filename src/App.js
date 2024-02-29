import React from 'react';
import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';

export default function App() {
  const isDarkTheme = useColorScheme() === 'dark';
  const backgroundColor = isDarkTheme ? '#000' : '#E8EAED';

  return (
    <View style={{...styles.viewContainer, backgroundColor}}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <View style={styles.viewContent}>
        <Text style={styles.textHeadline}>Today's tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  viewContent: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textHeadline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    backgroundColor: 'yellow',
  },
});
