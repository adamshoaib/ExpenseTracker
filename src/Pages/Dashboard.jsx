import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ToolBar from '../Components/Organisms/ToolBar';
import AmountSummary from '../Components/Organisms/AmountSummary';
import FooterOptions from '../Components/Organisms/FooterOptions';
import Transactions from '../Components/Organisms/Transactions';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ToolBar />
      <AmountSummary />
      <Transactions />
      <FooterOptions navigateToPage={() => {}} addExpense={() => {}} />
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
