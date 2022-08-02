import { hot } from 'react-hot-loader';
import React from 'react';
import AppRouter from './routes';
import './App.css';
import firebase from './firebase';

const App = () => {
  React.useEffect(() => {
    const msg = firebase.messaging();
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn('token', data);
      });
  });
  return <AppRouter />;
};

export default hot(module)(App);
