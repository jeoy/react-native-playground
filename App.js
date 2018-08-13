/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Button, Header as NativeHeader, Icon, Title } from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
const getTerrain = (styles, index, isShow) => {
    switch (index) {
        case 0:
            return <Image style={[styles.terrain,  (isShow) ? styles.terrain : styles.hideTerrain]} source={require('./img/pic1.jpg')} />
        case 1:
            return <Image style={ (isShow) ? styles.terrain : styles.hideTerrain} source={require('./img/pic2.jpg')} />
        case 2:
            return <Image style={ (isShow) ? styles.terrain : styles.hideTerrain} source={require('./img/pic3.jpg')} />
        case 3:
            return <Image style={ (isShow) ? styles.terrain : styles.hideTerrain} ource={require('./img/pic1.jpg')} />
    }
}

export default class App extends Component < Props > {
      state = {
        isShow: true
      }
      onToggleTerrain = () =>{
          this.setState({
                isShow: !this.state.isShow,
        });
      }
      render() {
          return (
              <View style={styles.container}>
                  <Button text="fdsfdsfsdf"  onPress={this.onToggleTerrain}>
                        <Text style={styles.btnText}>togglePic</Text>
                  </Button>
                  {getTerrain(styles, 0, this.state.isShow)}
              </View>
          )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    terrain: {
        width: 30,
        height: 30,
        position: "absolute",
        zIndex: 2,
    },
    hideTerrain: {
        opacity: 0
    }
});
