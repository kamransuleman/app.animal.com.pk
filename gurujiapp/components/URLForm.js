import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles';

const URLForm = ({ url, error, isLoading, handleUrlChange, handleSubmit }) => (
  <View style={styles.formContainer}>
    <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 20 }}>Mobile App</Text>
    {error && <Text style={styles.errorText}>{error}</Text>}
    <TextInput
      placeholder="Please enter URL to convert to app"
      value={url}
      onChangeText={handleUrlChange}
      onSubmitEditing={handleSubmit}
      style={styles.input}
    />
    {!isLoading && (
      <TouchableOpacity
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Convert</Text>
      </TouchableOpacity>
    )}
    <Text style={styles.noteText}>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Note:</Text> The app will be created once you save and confirm. After this point, you can no longer view this URL form. To view this form, it will be necessary to clear your cache.
    </Text>
  </View>
);

export default URLForm;
