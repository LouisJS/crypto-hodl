import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../utils/constants';

const Card = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: images[props.symbol]}}
      />
      <Text> { props.symbol} </Text>
      <Text> { props.price_usd} </Text>
      <Text> { props.percent_change_24h } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  }
});

export default Card;