import axios from 'axios';
import { MyAccountConst } from './constant';
const addShippingAdress = (data, uid) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-addShippingAddress-default',
      {
        data: {
          uid: uid,
          fullName: data.fullName,
          country: data.country,
          streetAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          postCode: data.postCode,
          phoneCountry: data.phoneCountry,
          phoneNumber: data.phoneNumber,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        console.log('message', message);
        if (status == 200) {
          dispatch({
            type: MyAccountConst.ADD_SHIPPING_ADDRESS_SUCCESS,
            payload: 'Shipping adress added Successfully',
          });
        }
        if (status == 400) {
          dispatch({
            type: MyAccountConst.ADD_SHIPPING_ADDRESS_SUCCESS,
            payload: message,
          });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const addCArd = (data, uid) => (dispatch) => {
  const exp_month = parseInt(data.exp_month.split('-')[1]);
  const exp_year = parseInt(data.exp_month.split('-')[0]);
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-addCard-default', {
      data: {
        uid: uid,
        number: parseInt(data.number),
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: parseInt(data.cvc),
        firstName: data.firstName,
        lastName: data.lastName,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.ADD_CARD_SUCCESS,
            payload: 'card added Successfully',
          });
        }
        if (status == 400) {
          dispatch({
            type: AccountConst.ADD_CARD_SUCCESS,
            payload: message,
          });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const CloseErrorMsg = () => (dispatch) => {
  dispatch({ type: MyAccountConst.CLOSE_NOTIFI_SUCCESS, payload: true });
};
const getShippingAdres = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getShippingAddresses-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          const ShippingData = data.map((item) => ({
            ...item,
            checked: false,
          }));
          dispatch({
            type: MyAccountConst.GET_SHIPPING_SUCCESS,
            payload: ShippingData,
          });
        }
        if (status == 400) {
          dispatch({
            type: MyAccountConst.ADD_SHIPPING_ADDRESS_SUCCESS,
            payload: message,
          });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getPaymentCArd = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getCards-default', {
      data: {
        uid: localStorage.getItem('uid'),
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          const PaymentData = data.map((item) => ({
            ...item,
            checked: false,
          }));
          dispatch({
            type: MyAccountConst.GET_CARD_SUCCESS,
            payload: PaymentData,
          });
        }
        if (status == 400) {
          dispatch({
            type: MyAccountConst.ADD_CARD_SUCCESS,
            payload: message,
          });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const removeShipping = (id) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-removeShippingAddress-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          addressId: id,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch(getShippingAdres());
        }
        if (status == 400) {
          //   dispatch({
          //     type: MyAccountConst.ADD_CARD_SUCCESS,
          //     payload: message,
          //   });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const addShippingAdressOuter = (item) => (dispatch) => {
  dispatch({ type: MyAccountConst.SHIPPING_FOR_PAYMENT, payload: item });
};
const getMyOrder = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getMyOrders-default', {
      data: {
        uid: localStorage.getItem('uid'),
        // uid: '001',
        limit: 10,
        offset: 0,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_MYORDER_SUCCESS,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getPurChaseHistory = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getPurchaseHistory-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_PURCHASE_HISTORY,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getDisputes = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getDisputes-default', {
      data: {
        uid: localStorage.getItem('uid'),
        // uid: '001',
        limit: 10,
        offset: 0,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_DISPUTES_SUCCESS,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getNewDisputes = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getBoughtItems-default', {
      data: {
        uid: localStorage.getItem('uid'),
        // uid: '001',
        limit: 10,
        offset: 0,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_NEW_DISPUTES_SUCCESS,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getDisputesComments = (itemId) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getDisputeComments-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          itemDisputeId: itemId,
          // itemDisputeId: 'YG3GOOwPIqOssqhUBy5A',
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_DISPUTES_COMMENTS_SUCCESS,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const GetWatchList = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getWatchListItems-default', {
      data: {
        uid: localStorage.getItem('uid'),
        // uid: '001',
        limit: 10,
        offset: 0,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        const data = response.data.result.data;
        if (status == 200) {
          dispatch({
            type: MyAccountConst.GET_WATCHLIST_ITEM_SUCCESS,
            payload: data,
          });
        }
        // if (status == 400) {
        //   dispatch({
        //     type: MyAccountConst.ADD_CARD_SUCCESS,
        //     payload: message,
        //   });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const CheckedBox = (data) => (dispatch) => {
  dispatch({ type: MyAccountConst.CHECKED_BOX_SUCCESS, payload: data });
};
const AllChecked = (data) => (dispatch) => {
  dispatch({ type: MyAccountConst.ALL_CHECKED_FALSE, payload: false });
};
const CheckedBoxCard = (data) => (dispatch) => {
  dispatch({ type: MyAccountConst.CHECKED_BOX_CARD_SUCCESS, payload: data });
};
const AllCheckedCard = () => (dispatch) => {
  dispatch({ type: MyAccountConst.ALL_CHECKED_CARD_FALSE, payload: false });
};
export const MyAccountAction = {
  addShippingAdress,
  CloseErrorMsg,
  addCArd,
  getShippingAdres,
  getPaymentCArd,
  removeShipping,
  addShippingAdressOuter,
  getMyOrder,
  getPurChaseHistory,
  getDisputes,
  getNewDisputes,
  getDisputesComments,
  GetWatchList,
  CheckedBox,
  AllChecked,
  CheckedBoxCard,
  AllCheckedCard,
};
