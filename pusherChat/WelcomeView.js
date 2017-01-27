import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class WelcomeView extends Component {
  render() {
    let username = this.props.username;

    if (username) {
      return (
         <Text>Welcome {username}</Text>
      )
    } else {
      return ( 
        <TextInput 
          onKeyPress={this.props._onName} 
          placeholder="Please enter your Twitter username"/>
      )
    }
  }
};

export default WelcomeView;
