import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greetings name='Rahul' style={styles.bigblue}/>
        <Greetings name='Sapna' style={styles.red}/>
        <Greetings name='Prabal' style={styles.bigblue}/>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
