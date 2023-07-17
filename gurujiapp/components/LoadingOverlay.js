import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../styles';


const LoadingOverlay = () => (
  <View style={styles.loadingOverlay}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default LoadingOverlay