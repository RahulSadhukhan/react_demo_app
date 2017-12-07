import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', toggleText: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(prevState => ({ toggleText: !prevState.toggleText }));
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button onPress={this.handleButtonClick} title="Toggle text" />

        <Greetings showText={this.state.toggleText} text={this.state.text} />
      </View>
    );
  }
}

class Greetings extends React.Component {
  render() {
    const display = this.props.showText ? this.props.text : '';
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
