import { HANDLE_PRODUCT_FORM_DATA_CHANGE, ADD_PRODUCT } from './constant';
import { HANDLE_SELLER_FORM_DATA_CHANGE } from './constant';
import axios from 'axios';

// actionType = next/previous
export const handleProductFormDataChange = (input) => (dispatch) => {
  dispatch({ type: HANDLE_PRODUCT_FORM_DATA_CHANGE, payload: input });
};
export const AddProductFormData = (input) => (dispatch) => {
  console.log(input, 'input', ADD_PRODUCT);
};
export const handleSellerFormData = (input) => (dispatch) => {
  dispatch({ type: HANDLE_SELLER_FORM_DATA_CHANGE, payload: input });
};

export const create_Product_Item = (data, history) => (dispatch) => {
  var uid = localStorage.getItem('uid');

  let input = {
    uid: uid,
    subCategoryId: data.subCategoryId,
    shipWithUs: data.shipWithUs,
    photos: data.photos,
    itemName: data.itemName,
    itemCaption: data.itemCaption,
    itemDescription: data.itemDescription,
    itemSpecifics: {
      field1: data.Publisher,
      field2: data.Series,
      field3: data.Publisher,
      field4: data.Publisher,
    },
    price: data.price,
    listAsAuction: data.listAsAuction,
    startingAuctionPrice: data.startingAuctionPrice,
    reservePrice: data.reservePrice,
    buyItNowPrice: data.buyItNowPrice,
    professionallyCleaned: data.professionallyCleaned,
    photography: data.photography,
    threeSixtyPhotography: data.threeSixtyPhotography,
    shippingPaidBy: data.shippingPaidBy,
    insureItem: data.insureItem,
    nationwideShippingCost: data.nationwideShippingCost,
    shippingToEuropeCost: data.shippingToEuropeCost,
    worldwideShippingCost: data.worldwideShippingCost,
    nationwideShippingDeliveryDays: data.nationwideShippingDeliveryDays,
    shippingToEuropeDeliveryDays: data.shippingToEuropeDeliveryDays,
    worldwideShippingDeliveryDays: data.worldwideShippingDeliveryDays,
    isDraft: false,
  };
  axios
    .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-listItemCreate-default', {
      data: input,
    })
    .then(
      (response) => {
        const status = response.data.result.status;
        if (status === 200) {
          history.push('/thanks-submit-items');
          dispatch({ type: ADD_PRODUCT, payload: response.data });
        }
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
};
