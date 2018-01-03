import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import fetchCrypto from '../actions/fetchCrypto';

class CryptoContainer extends Component {
  
  componentDidMount() {
    this.props.fetchCrypto();
  }

  render() {
    return (
      <View>
        <Text>
          Container
        </Text>
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
