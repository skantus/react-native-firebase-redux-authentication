import firebase from '@firebase/app';
import '@firebase/auth';

const config = {
  apiKey: 'AIzaSyBx0YuFCeqedFUGgpmdZOr7T7wGzy9N8Qo',
  authDomain: 'pulso-3f393.firebaseapp.com',
  databaseURL: 'https://pulso-3f393.firebaseio.com',
  projectId: 'pulso-3f393',
  storageBucket: 'pulso-3f393.appspot.com',
  messagingSenderId: '677974717412'
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
