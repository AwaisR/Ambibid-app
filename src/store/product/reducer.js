import { HANDLE_PRODUCT_FORM_DATA_CHANGE, ADD_PRODUCT } from './constant';
import { HANDLE_SELLER_FORM_DATA_CHANGE } from './constant';
const initialState = {
  steper: ['1', '2', '3'],
  productFormData: {
    category: '',
    subCategoryId: '',
    photos: [],
    itemFullFill: false,
    itemName: '',
    itemCaption: '',
    itemDescription: '',
    No_of_objects_Specific: '',
    Series: '',
    Publisher: '',
    Extras: '',
    No_of_Objects: '',
    Series_of_objects: '',
    Publisher_of_objects: '',
    price: 0,
    listAsAuction: false,
    startingAuctionPrice: '',
    reservePrice: '',
    List_of_Buy_it: false,
    buyItNowPrice: '',
    Service_info: false,
    shipWithUs: false,
    professionallyCleaned: false,
    photography: false,
    threeSixtyPhotography: false,
    shippingPaidBy: '',
    insureItem: false,
    nationwideShippingCost: '',
    nationwideShippingDeliveryDays: '',
    shippingToEuropeCost: '',
    shippingToEuropeDeliveryDays: '',
    worldwideShippingCost: '',
    worldwideShippingDeliveryDays: '',
    isDraft: false,
    SuccessListing: false,
  },
  adminSellerFormData: {
    catId: '',
    subCatId: '',
    dropdwon: false,
    textFeild: false,
    numberFeild: false,
    itemSpecificForm: [],
  },
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_PRODUCT_FORM_DATA_CHANGE: {
      state.productFormData[action?.payload?.name] = action?.payload?.value;
      return {
        ...state,
        productFormData: state.productFormData,
      };
    }
    case HANDLE_SELLER_FORM_DATA_CHANGE: {
      state.adminSellerFormData.subCatId = action.payload;
      return {
        ...state,
        adminSellerFormData: state.adminSellerFormData,
      };
    }
    case ADD_PRODUCT: {
      // state.productFormData[action?.payload?.name] = action?.payload?.value;
      return {
        ...state,
        SuccessListing: true,
        // productFormData: state.productFormData,
      };

      break;
    }

    default:
      return state;
  }
};
export default productReducer;
