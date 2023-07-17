import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
    const [loading, setLoading] = useState(true);
  
    return (
        <>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={{color: '#FFF'}}
            />
            <WebView
                source={{ uri: 'https://animal.com.pk' }}
                onLoadStart={() => setLoading(true)}
                onLoad={() => setLoading(false)}
            />
        </>
    );
};

export default App;
