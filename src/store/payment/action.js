import axios from 'axios';
import { userPayment } from './constant';
const PayementAction = (data) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-savePaymentDetails-default',
      {
        data: {
          uid: data.uid,
          country: data.country,
          currency: data.currency,
          iban: data.IBAN,
          swiftAccountNumber: data.swift,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        if (status == 200) {
          dispatch({
            type: userPayment.ADD_SELLER_PAYMENT_SUCCESS,
            payload: 'Payment Added Successfully',
          });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const removeNoti = () => (dispatch) => {
  dispatch({
    type: userPayment.REMOVE_NOTIFICATIONS,
    payload: true,
  });
};
export const PaymentActions = { PayementAction, removeNoti };
