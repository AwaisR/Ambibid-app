import { SellerConst } from './constant';
const initialState = {
  ShipToBuyer: [],
  ShipToFulmint: [],
  ShipFromFulmint: [],
  ActiveItems: [],
  AlertMessage: '',
  AddReservePrice: '',
  SellerDisputes: [],
  SoldItems: [],
  UnSoldItems: [],
  RelistError: '',
  Reviews: [],
};
const SellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SellerConst.GET_SELLER_ITEM_SUCCESS:
      return {
        ...state,
        ShipToBuyer: action.payload,
      };
    case SellerConst.SHIPPING_TO_FULLMINT_SUCCESS:
      return {
        ...state,
        ShipToFulmint: action.payload,
      };
    case SellerConst.SHIPPING_FROM_FULLMINT_SUCCESS:
      return {
        ...state,
        ShipFromFulmint: action.payload,
      };
    case SellerConst.GET_ACTIVE_ITEMS_SUCCESS:
      return {
        ...state,
        ActiveItems: action.payload,
        AlertMessage: action.payload,
      };
    case SellerConst.UPDATE_TRACKING_INFO:
      return {
        ...state,
        AlertMessage: action.payload,
      };
    case SellerConst.ADD_LOWER_PRICE_SUCCESS:
      return {
        ...state,
        AddReservePrice: 'Add Reserve price Success',
      };
    case SellerConst.REMOVE_NOTIFICATIONS:
      return {
        ...state,
        AddReservePrice: '',
        RelistError: '',
      };
    case SellerConst.GET_SELLER_DISPUTES_SUCCESS:
      return {
        ...state,
        SellerDisputes: action.payload,
      };
    case SellerConst.GET_SOLD_ITEMS_SUCCESS:
      return {
        ...state,
        SoldItems: action.payload,
      };
    case SellerConst.GET_UNSOLD_ITEMS_SUCCESS:
      return {
        ...state,
        UnSoldItems: action.payload,
      };
    case SellerConst.GET_UNSOLD_ITEMS_ERROR:
      return {
        ...state,
        RelistError: action.payload,
      };
    case SellerConst.GET_SELLER_REVIEWS_SUCCESS:
      return {
        ...state,
        Reviews: action.payload,
      };
    default:
      return state;
  }
};
export default SellerReducer;
