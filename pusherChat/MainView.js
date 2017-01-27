import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class MainView extends Component {
  getInitialState() {
    return {
      messages: [] 
    };
  },

  _onMessage(e) {
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      username: this.props.username,
      text: text,
      time: new Date()
    }

    fetch('/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      })
    })
    .then((response) => response.json())
    .then((responseData) => {})
    .done();








    $.post('/messages', message).success(function(){
      // reset the input
      input.value = ""
    });
  },

  render() {
    if (!this.props.username) { return null; }

    return (
      <View style={style}>
        <TextInput 
          placeholder="Type your message" 
          onKeyPress={this._onMessage} />
      </View>
    );
  }

};

export default MainView;