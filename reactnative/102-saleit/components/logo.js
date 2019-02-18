import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

class Logo extends Component {
  state = {
    sellAnim: new Animated.Value(0),
    itAnim: new Animated.Value(0)
  }

  componentWillMount(){
      Animated.sequence([
          Animated.timing(this.state.sellAnim,{
              toValue:1,
              duration:1000,
              easing:Easing.easeOutCubic
          }),
          Animated.timing(this.state.itAnim,{
              toValue:1,
              duration:500,
              easing:Easing.easeOutCubic
          })
      ]).start(()=>{
          this.props.showLogin()
      })
  }

  render(){
    return(
      <View>
        <View style={
          this.props.orientation === "portrait"
          ? styles.logoStylesPortrait
          : styles.logoStylesLandscape
        }>
          <Animated.View style={{
              opacity: this.state.sellAnim,
              top: this.state.sellAnim.interpolate({
                  inputRange:[0,1],
                  outputRange:[100,0]
              })
          }}
          >
              <Text style={styles.sell}>Sell</Text>
          </Animated.View>
          <Animated.View style={{
              opacity:this.state.itAnim
          }}
          >
              <Text style={styles.it}>It</Text>
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoStylesPortrait:{
      marginTop:50,
      flex:1,
      flexDirection: 'row',
      maxHeight:100
  },
  logoStylesLandscape:{
      marginTop:20,
      flex:1,
      flexDirection: 'row',
      maxHeight:50
  },
  sell:{
      fontSize: 40,
      fontFamily: 'space-mono',
      color:'#555555'
  },
  it:{
      fontSize: 40,
      fontFamily: 'space-mono',
      color:'#00ADA9'
  }
})

export default Logo;