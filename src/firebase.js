import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/storage';
require('firebase/auth');
var firebaseConfig = {
  apiKey: 'AIzaSyBzsEhZJWSSyu74n7Ak2LSjXg-INUAW0Hg',
  authDomain: 'amibid-24a48.firebaseapp.com',
  projectId: 'amibid-24a48',
  storageBucket: 'amibid-24a48.appspot.com',
  messagingSenderId: '101642751685',
  appId: '1:101642751685:web:fdcbfce6ad582177152aac',
  measurementId: 'G-X5NWJ5RQJV',
};

firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// export const getToken = (setTokenFound) => {
//   console.log('test upper');
//   messaging
//     .getToken({
//       vapidKey:
//         'BAOcrabskFwgepInsmoAGkBLCivH8ho7ec-H-aAcruI7Ca1Owcx0BxdJqJFF4NBtwVJ9ux7-gCJM5PjX2DRqKhA',
//     })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//         setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log('tessssssssssssssssssst');
//       console.log('An error occurred while retrieving token. ', err);
//       // catch error while creating client token
//     });
// };
// export const requestFirebaseNotificationPermission = () =>
//   new Promise((resolve, reject) => {
//     messaging
//       .requestPermission()
//       .then(() => messaging.getToken())
//       .then((firebaseToken) => {
//         console.log('firebaseToken', firebaseToken);
//         resolve(firebaseToken);
//       })
//       .catch((err) => {
//         console.log('err', err);
//         reject(err);
//       });
//   });
// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });
// firebase.analytics();
export default firebase;
