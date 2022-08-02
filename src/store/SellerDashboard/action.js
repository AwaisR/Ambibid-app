import { SellerConst } from './constant';
import axios from 'axios';
import Disputes from '../../pages/SellarDashBoard/Disputes';
import { message } from 'antd';
const GetShipToBuyer = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerShipToBuyerItems-default',
      {
        data: {
          uid: localStorage.getItem('token'),
          // uid: '001',
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_SELLER_ITEM_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const ShipingToFulMint = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerShipToAmibidItems-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.SHIPPING_TO_FULLMINT_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const ShipingFromFulMint = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerShippedFromAmibidItems-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.SHIPPING_FROM_FULLMINT_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const UpdateTrackingData = async (url, data, dispatch) => {
  const ReturnResponse = await axios
    .post(url, {
      data: {
        uid: localStorage.getItem('uid'),
        itemId: data.itemId,
        trackingNumber: data.trackingNumber,
        companyName: data.companyName,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const message = response.data.result.message;
        dispatch({ type: SellerConst.UPDATE_TRACKING_INFO, payload: message });
      },
      (error) => {
        console.log('error', error);
      },
    );
  return ReturnResponse;
};
const UpdateBuyerTracking = (data) => (dispatch) => {
  if (data.tableName === 'Buyer') {
    let url =
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-updateShipToBuyerTrackingInfo-default';
    UpdateTrackingData(url, data, dispatch);
  } else {
    let url =
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-updateShipToAmibidTrackingInfo-default';
    UpdateTrackingData(url, data, dispatch);
  }
};
const getActiveItems = (uid) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerActiveItems-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_ACTIVE_ITEMS_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const UpdateReservePrice = (data) => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-lowerItemReservePrice-default',
      {
        data: {
          uid: localStorage.getItem('uid'),
          itemId: data.itemId,
          reservePrice: data.reservePrice,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.ADD_LOWER_PRICE_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const removeNoti = () => (dispatch) => {
  dispatch({ type: SellerConst.REMOVE_NOTIFICATIONS, payload: true });
};
const getSellerDisputes = () => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerDisputes-default', {
      data: {
        // uid:localStorage.getItem("uid")
        uid: localStorage.getItem('uid'),
        limit: 10,
        offset: 0,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_SELLER_DISPUTES_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getSoldItems = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerSoldItems-default',
      {
        data: {
          // uid:localStorage.getItem("uid")
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_SOLD_ITEMS_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getUnsoldItems = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerUnsoldItems-default',
      {
        data: {
          // uid:localStorage.getItem("uid")
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_UNSOLD_ITEMS_SUCCESS, payload: data });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getRelistItems = (id) => (dispatch) => {
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-relistItem-default', {
      data: {
        // uid:localStorage.getItem("uid")
        uid: localStorage.getItem('uid'),
        itemId: id,
      },
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        const message = response.data.result.message;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_UNSOLD_ITEMS_SUCCESS, payload: data });
        }
        if (status === 400) {
          dispatch({ type: SellerConst.GET_UNSOLD_ITEMS_ERROR, payload: message });
        }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
const getReviews = () => (dispatch) => {
  axios
    .post(
      'https://us-central1-amibid-24a48.cloudfunctions.net/default-getSellerItemReviews-default',
      {
        data: {
          // uid:localStorage.getItem("uid")
          uid: localStorage.getItem('uid'),
          limit: 10,
          offset: 0,
        },
      },
    )
    .then(
      (response) => {
        const status = response.data.result.status;
        const data = response.data.result.data;
        const message = response.data.result.message;
        if (status === 200) {
          dispatch({ type: SellerConst.GET_SELLER_REVIEWS_SUCCESS, payload: data });
        }
        // if (status === 400) {
        //   dispatch({ type: SellerConst.GET_UNSOLD_ITEMS_ERROR, payload: message });
        // }
      },
      (error) => {
        console.log('error', error);
      },
    );
};
export const SellerActions = {
  GetShipToBuyer,
  ShipingToFulMint,
  UpdateBuyerTracking,
  ShipingFromFulMint,
  getActiveItems,
  UpdateReservePrice,
  removeNoti,
  getSellerDisputes,
  getSoldItems,
  getUnsoldItems,
  getRelistItems,
  getReviews,
};
