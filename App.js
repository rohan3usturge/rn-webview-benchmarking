import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>Rohan</Text>
          <WebView
            source={{uri: 'https://walmart.ca'}}
            style={{
              marginTop: 20,
              height: Dimensions.get('screen').height,
              width: Dimensions.get('window').width,
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
