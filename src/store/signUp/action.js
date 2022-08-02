import { userConst } from './constant';
import axios from 'axios';
import firebase from '../../firebase';
const SignInStoreUser = (token, uid, history) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-userSignin-default', {
      data: { uid: uid, fcmToken: token },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        if (status === 200) {
          localStorage.setItem('sellerAccount', response.data.result.data.seller);

          history.push('/homepage');
        }
        console.log(response);
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const googleSignUp = (provider, history) => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      if (user) {
        localStorage.setItem('displayName', user.displayName);
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('token', user.Aa);
        history.push('/homepage');
      }
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
const signUpUser = (data, history) => (dispatch) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.Email, data.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      if (user) {
        localStorage.setItem('token', user.Aa);
        history.push({
          pathname: '/user-account',
          state: {
            email: user.email,
            uid: user.uid,
          },
        });
      }

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch({ type: userConst.USER_SIGNIN_ERROR, payload: errorMessage });

      // ..
    });
};
const userAccountCreate = (data, stateData) => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-userSignup-default', {
      data: {
        uid: stateData.uid,
        email: stateData.email,
        phoneCountry: '92',
        phoneNumber: data.PhoneNumber,
        firstName: data.FirstName,
        lastName: data.LastName,
      },
    })
    .then(
      (response) => {
        const data = response.data.result;
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('uid', data.data.uid);
        dispatch({ type: userConst.USER_SIGNUP_SUCCESS, payload: data });
        console.log(response.data.result);
      },
      (error) => {
        console.log(error);
      },
    );
};
const signInUser = (data, history) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(data.Email, data.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      if (user) {
        SignInStoreUser(user.Aa, user.uid, history);
        localStorage.setItem('uid', user.uid);
        localStorage.setItem('emailuSer', user.email);
        localStorage.setItem('token', user.Aa);
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch({ type: userConst.USER_SIGNIN_ERROR, payload: errorMessage });
    });
};
const sellarAccounts = (data) => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-sellerSignup-default', {
      data: {
        uid: data.uid,
        email: data.email,
        phoneNumber: data.phoneNumber,
        phoneCountry: data.phoneCountry,
        profileName: data.profileName,
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        state: data.state,
        country: data.country,
        addressLine1: data.addressLine2,
        addressLine2: data.addressLine2,
        postalCode: data.postalCode,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        if (status === 200) {
          localStorage.removeItem('uid');
          localStorage.removeItem('email');
          localStorage.removeItem('token');
          dispatch({
            type: userConst.USER_SELLAR_ACCOUNT_SUCCESS,
            payload: 'User Sellar Account successfully Created',
          });
        }
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
};
const CloseErrorMsg = () => (dispatch) => {
  console.log('testtss');
  dispatch({ type: userConst.USER_CLOSE_ERROR_MSG, payload: true });
};
export const userActions = {
  signUpUser,
  signInUser,
  googleSignUp,
  userAccountCreate,
  sellarAccounts,
  CloseErrorMsg,
};
