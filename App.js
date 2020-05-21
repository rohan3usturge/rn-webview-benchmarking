import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import analytics from '@react-native-firebase/analytics';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

let startTime;

const App = () => {
  const onWebViewLoadStart = () => {
    console.log('start');
    startTime = new Date();
  };

  const onWebViewLoadEnd = () => {
    if (!startTime) {
      return;
    }
    console.log('end');
    const endTime = new Date();
    var dif = endTime.getTime() - startTime.getTime();
    analytics().logEvent('cart_webview_load_complete', {
      duration: dif,
      platform: Platform.OS,
    });
    startTime = null;
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.WebViewContainer}>
            <WebView
              onLoadStart={onWebViewLoadStart}
              source={{ uri: 'https://walmart.ca/cart' }}
              style={[styles.WebView]}
              cacheEnabled
              automaticallyAdjustContentInsets={false}
              onLoadEnd={onWebViewLoadEnd}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  WebViewContainer: {
    height: 5000,
  },
  halfBlur: {
    opacity: 0.5,
  },
  clear: {
    opacity: 1,
  },
  WebView: {},
  loader: {
    position: 'absolute',
    top: screenHeight / 2,
    left: screenWidth / 2,
  },
});

export default App;
