import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greetings name='Rahul' />
        <Greetings name='Sapna' />
        <Greetings name='Prabal' />
      </View>
    );
  }
}

class Greetings extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

