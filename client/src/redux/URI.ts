/* eslint-disable */
import { Platform } from 'react-native';

let URI = '';

if (Platform.OS === 'ios') {
  URI = 'http://localhost:8080/api/v1';
} else {
  URI = 'http://192.168.0.187:8080/api/v1';
}

export {URI};
