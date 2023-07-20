import React, {useState, useLayoutEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import URLForm from './components/URLForm';
import CrossButton from './components/CrossButton';
import LoadingOverlay from './components/LoadingOverlay';
import styles from './styles';

const App = () => {
  const [url, setUrl] = useState('');
  const [storedUrl, setStoredUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hideCross, setHideCross] = useState(false);
  const [error, setError] = useState(null);
  const savedUrl =  AsyncStorage.getItem('url');

  useLayoutEffect(() => {
    const fetchUrl = async () => {
      const url = await AsyncStorage.getItem('url');
      setStoredUrl(url);
      setHideCross(!!url); // Set hideCross to true if URL is stored
      setIsLoading(false)
    };
    fetchUrl();
  }, []);

  const validateURL = str => {
    const pattern = new RegExp(
      '^https://' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i', // fragment locator
    );
    return !!pattern.test(str);
  };

  const handleUrlChange = text => {
    setUrl(text.toLowerCase());
    if (!validateURL(text.toLowerCase())) {
      setError('Please enter a valid https URL.');
    } else {
      setError(null);
    }
  };

  const handleSubmit = async () => {
    if (error) {
      return;
    }
    setIsLoading(true);

  };

  const handleUrlClear = async () => {
    Alert.alert('Confirmation', 'Do you really want to leave?', [
      {
        text: 'No',
        onPress: () => {}, // Do nothing on 'No'
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await AsyncStorage.removeItem('url');
          setStoredUrl(null);
          setHideCross(false);
        },
      },
    ]);
  };

  const handleLoadEnd = async () => {
    setIsLoading(false);
  
      Alert.alert('Save App', 'Do you want to save this app?', [
        {
          text: 'No',
          onPress: () => {}, // Do nothing on 'No'
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async() => {
            setHideCross(true);
            await AsyncStorage.setItem('url', url);
            setStoredUrl(url);
            Alert.alert('Success', 'You have successfully created your app.');
          },
        },
      ]);
    
  };

  return (
    <View style={styles.container}>
      {isLoading && <LoadingOverlay />}
      {storedUrl ? (
        <>
          {!hideCross && <CrossButton onPress={handleUrlClear} />}
          <WebView
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={handleLoadEnd}
            source={{uri: storedUrl}}
          />
        </>
      ) : (
        <>
        {!isLoading &&
        <URLForm
          error={error}
          url={url}
          onChange={handleUrlChange}
          onSubmit={handleSubmit}
        />}
        </>
      )}
    </View>
  );
};

export default App;
