import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Use the color code for white background
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
    zIndex: 1,
    elevation: 1
  },
  crossButtonText: {
    fontSize: 20,
    color: '#ffffff'
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: '#000000', // Set the border color to black (#000000)
    padding: 10,
    color: '#000000', // Set the text color to black (#000000)
    width: '100%',
  },
  submitButton: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  submitButtonText: {
    color: '#ffffff',
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
    color: '#FF0000',
    marginBottom: 10
  }
});

export default styles;
