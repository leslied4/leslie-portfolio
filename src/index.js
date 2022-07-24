import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-form-80fe2.firebaseapp.com",
  projectId: "react-form-80fe2",
  storageBucket: "react-form-80fe2.appspot.com",
  messagingSenderId: "1005277911268",
  appId: "1:1005277911268:web:22da7b3615a906879934f1",
  // databaseURL: "https://console.firebase.google.com/project/react-form-80fe2/"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
