import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../utils/constants';

const Card = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.leftBlock}>
        <Image
          style={styles.image}
          source={{uri: images[props.symbol]}}
        />
        <View style={styles.infos}>
          <Text> { props.name} </Text>
          <Text> { props.symbol} | $ {props.price_usd}</Text>
        </View>
      </View>

      <View>
        <Text>24h:
             <Text style={props.percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {props.percent_change_24h} % </Text>
        </Text>
        <Text>7d:
            <Text style={props.percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {props.percent_change_7d} % </Text>
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  leftBlock: {
    flexDirection: 'row',
  },
  infos: {
    marginLeft: 5,
  },
  rightBlock: {
    
  },
  image: {
    height: 40,
    width: 40,
  },
  percentChangeMinus: {
    color: 'red',
  },
  percentChangePlus: {
    color: 'green',
  }
});

export default Card;