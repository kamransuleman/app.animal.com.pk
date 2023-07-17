import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const CrossButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.crossButton}>
    <Text style={styles.crossButtonText}>X</Text>
  </TouchableOpacity>
);
export default CrossButton