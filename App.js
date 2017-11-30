import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parentBlock}>
        <View style={styles.block1}/>
        <View style={styles.block2}/>
        <View style={styles.block3}/>
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
      <Text style={this.props.style}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  parentBlock: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  block1: {
    width: 50,
    height: 50,
    // flex: 1,
    backgroundColor: 'powderblue',
  },
  block2: {
    width: 50,
    height: 50,
    // flex: 2,
    backgroundColor: 'skyblue',
  },
  block3: {
    width: 50,
    height: 50,
    // flex: 3,
    backgroundColor: 'steelblue',
  }
});
