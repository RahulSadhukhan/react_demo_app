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
  constructor(props) {
    super(props);
    this.state = { showText: true };


    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  render() {
    const display = this.state.showText ? `Hello ${this.props.name}!` : '';
    return (
      <Text>{display}</Text>
    );
  }
}

