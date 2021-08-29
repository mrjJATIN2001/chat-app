import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAi9b4rB6VK7MLcUOWoxIkrLyb79VgQ-38',
  authDomain: 'chat-web-app-f9794.firebaseapp.com',
  projectId: 'chat-web-app-f9794',
  storageBucket: 'chat-web-app-f9794.appspot.com',
  messagingSenderId: '604431999372',
  appId: '1:604431999372:web:b1fb86b1dd024cc9dbf6a9',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
