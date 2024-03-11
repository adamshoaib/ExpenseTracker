import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Typography from '../Atoms/Typography';

export default function ToolBar() {
  return (
    <View style={styles.container}>
      <Typography label={'Expense Tracker'} style={styles.header} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    padding: 10,
    borderRadius: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
