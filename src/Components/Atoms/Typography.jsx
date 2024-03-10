import React from 'react';
import {Text} from 'react-native';

export default function Typography({label, style}) {
  return (
    <>
      <Text style={style}> {label} </Text>
    </>
  );
}
