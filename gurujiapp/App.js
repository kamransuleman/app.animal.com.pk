import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { TextInput, TouchableOpacity, View, ActivityIndicator, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [url, setUrl] = useState('');
  const [storedUrl, setStoredUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hideCross, setHideCross] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await AsyncStorage.getItem('url');
      setStoredUrl(url);
    };
    fetchUrl();
  }, []);

  const validateURL = (str) => {
    const pattern = new RegExp(
      '^https://'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i' // fragment locator
    );
    return !!pattern.test(str);
  };

  const handleUrlChange = (text) => {
    setUrl(text.toLowerCase());
    if (!validateURL(text.toLowerCase())) {
      setError('Please enter a valid https URL.');
    } else {
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if(error) {
      return;
    }
    setIsLoading(true);
    await AsyncStorage.setItem('url', url);
    setIsLoading(false);
    setStoredUrl(url);
  };

  const handleUrlClear = async () => {
    Alert.alert(
      "Confirmation",
      "Do you really want to leave?",
      [
        {
          text: "No",
          onPress: () => {}, // Do nothing on 'No'
          style: "cancel"
        },
        {
          text: "Yes", 
          onPress: async () => {
            await AsyncStorage.removeItem('url');
            setStoredUrl(null);
            setHideCross(false);
          }
        }
      ]
    );
  };

  const handleLoadEnd = async () => {
    setIsLoading(false);
    Alert.alert(
      "Save App",
      "Do you want to save this app?",
      [
        {
          text: "No",
          onPress: () => {}, // Do nothing on 'No'
          style: "cancel"
        },
        {
          text: "Yes", 
          onPress: () => {
            setHideCross(true);
            Alert.alert("Success", "You have successfully created your app.");
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {storedUrl ? (
        <>
          {!hideCross && (
            <TouchableOpacity 
              onPress={handleUrlClear} 
              style={styles.crossButton}
            >
              <Text style={styles.crossButtonText}>X</Text>
            </TouchableOpacity>
          )}
          <WebView
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={handleLoadEnd}
            source={{ uri: storedUrl }}
          />
        </>
      ) : (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    zIndex: 2,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  crossButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    padding: 5,
    borderRadius: 50,
    backgroundColor: 'red',
    zIndex: 1
  },
  crossButtonText: {
    fontSize: 14,
    color: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  submitButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  noteText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'center'
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10
  }
});

export default App;
