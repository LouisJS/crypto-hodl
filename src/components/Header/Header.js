import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={style.container}>
      <Text style={style.header}>
        HODL Your Crypto
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Header;
