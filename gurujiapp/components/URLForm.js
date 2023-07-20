import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles';

const URLForm = ({ error, url, onChange, onSubmit }) => (
  <View style={styles.formContainer}>
    <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 20,color:'#000000' }}>MOBILE APP</Text>
    {error && <Text style={styles.errorText}>{error}</Text>}
    <TextInput
      placeholder="Please enter URL to convert to app"
      value={url}
      placeholderTextColor="#000000" // Set the placeholder text color

      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      style={styles.input}
    />
    <TouchableOpacity onPress={onSubmit} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Convert</Text>
    </TouchableOpacity>
    <Text style={styles.noteText}>
      <Text style={{ fontWeight: 'bold', color: 'red' }}>Note:</Text> The app will be created once you save and confirm. After this point, you can no longer view this URL form. To view this form, it will be necessary to clear your cache.
    </Text>
  </View>
);

export default URLForm;