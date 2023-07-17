import React from 'react';
import { WebView } from 'react-native-webview';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const AppWebView = ({ storedUrl, hideCross, handleUrlClear, onLoadStart, onLoadEnd }) => (
  <>
   
    <WebView
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      source={{ uri: storedUrl }}
    />
  </>
);

export default AppWebView;
