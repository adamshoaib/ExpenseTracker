import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ToolBar from '../Components/Organisms/ToolBar';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ToolBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#deeafc',
    height: '100%',
    width: '100%',
  },
});
