import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function FooterOptions({navigateToPage, addExpense}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.logo}
          source={require('../../Assets/Images/dashboard.png')}
          onClick={() => navigateToPage('Dashboard')}
        />
        <Image
          style={styles.logo}
          source={require('../../Assets/Images/add.png')}
          onClick={() => addExpense('Add')}
        />
        <Image
          style={styles.logo}
          source={require('../../Assets/Images/account.png')}
          onClick={() => navigateToPage('Account')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
