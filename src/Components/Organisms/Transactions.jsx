import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

function TransactionRow({item}) {
  return (
    <TouchableOpacity>
      <View style={styles.transactionRow}>
        <View style={styles.transactionsSummary}>
          <Text>Paid to {item.name}</Text>
          <Text>{item.date}</Text>
        </View>
        <View>
          <Text>$ {item.amount}</Text>
        </View>
        <View>
          <Text>Description: {item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Transactions() {
  const TransactionList = [
    {
      id: 1,
      name: 'Adam',
      amount: 10,
      date: '10th March 2023',
      description: 'Fresh Alley boba',
    },
    {
      id: 2,
      name: 'Diya',
      amount: 200,
      date: '16th March 2023',
      description: 'Bindass Buffet',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={TransactionList}
        renderItem={({item}) => <TransactionRow item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  },
  transactionsSummary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionRow: {
    marginBottom: 20,
  },
});
