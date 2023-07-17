import { StyleSheet } from 'react-native';

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

export default styles;
