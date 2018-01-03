import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';

import fetchCrypto from '../actions/fetchCrypto';
import Card from '../components/Card';

class CryptoContainer extends Component {
  
  componentDidMount() {
    this.props.fetchCrypto();
  }

  renderList = () => {
    const { crypto } = this.props;

    console.log(crypto);
    if (crypto.data === null){
      return ;
    }

    const list = crypto.data.map((currency) => 
      <Card
        key={currency.id}
        symbol={currency.symbol}
        name={currency.name}
        price_usd={currency.price_usd}
        percent_change_24h={currency.percent_change_24h}
        percent_change_7d={currency.percent_change_7d}
      />
    );

    return (
      <ScrollView>
        { list }
      </ScrollView>
    );
  }

  render() {
    const { crypto } = this.props;

    return (
      <View style={{flex: 1}}>
        {
          crypto.data &&
          this.renderList()
        }
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { fetchCrypto })(CryptoContainer)
