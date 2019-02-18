import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {
  getOrientation,
  setOrientationListener,
  getPlatform
} from '../utils/misc';

import Logo from '../components/logo'
import LoginPanel from '../components/Login/loginPanel'

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      loading:true,
      platform:getPlatform(),
      orientation: getOrientation(500),
      logoAnimation:false
    }

    setOrientationListener(this.changeOrientation)
  }

  showLogin = () => {
    this.setState({
      logoAnimation:true
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo
            showLogin={this.showLogin}
            orientation={this.state.orientation}

          />
        </View>
        <LoginPanel
          show={this.state.logoAnimation}
          orientation={this.state.orientation}
          platform={this.state.platform}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
  },
  loading:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center'
  }
});