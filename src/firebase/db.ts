import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBpLg6DHFPC5a0L8LHxzyWejtJdKmnBFxA',
  authDomain: 'vue3-55a7a.firebaseapp.com',
  projectId: 'vue3-55a7a',
  storageBucket: 'vue3-55a7a.appspot.com',
  messagingSenderId: '1019124038801',
  appId: '1:1019124038801:web:f59155840968a41277d330',
};
  // Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db;
