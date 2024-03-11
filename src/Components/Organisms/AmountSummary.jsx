import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AmountSummary() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRoot}>
        <View style={styles.cardSubRoot}>
          <Text style={styles.cardHeader}>To Pay</Text>
          <Text style={styles.cardAmount}>$ 500</Text>
        </View>
      </View>
      <View style={styles.cardRoot}>
        <View style={styles.cardSubRoot}>
          <Text style={styles.cardHeader}>To Collect</Text>
          <Text style={styles.cardAmount}>$ 1000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardRoot: {
    width: 200,
    height: 100,
    border: '1px solid black',
    backgroundColor: '#bacce8',
    borderRadius: 16,
    shadow: {
      shadowOffset: {width: 10, height: 10},
      shadowColor: 'black',
      shadowOpacity: 1,
      elevation: 3,
      // background color must be set
      backgroundColor: '#0000', // invisible color
    },
  },
  cardSubRoot: {
    padding: 10,
  },
  cardHeader: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  cardAmount: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#1986fa',
  },
});
