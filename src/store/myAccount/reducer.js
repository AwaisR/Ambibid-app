import { MyAccountConst } from './constant';
const initialState = {
  shippingSuccess: '',
  CardSucces: '',
  AllShipingAdress: [],
  AllPaymentsCard: [],
  PayMentShipping: '',
  myOrders: [],
  PurchaseHistory: [],
  Disputes: [],
  NewDisputes: [],
  disputesComents: [],
  watchListItem: [],
  cardDetails: '',
};
const myAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case MyAccountConst.ADD_SHIPPING_ADDRESS_SUCCESS:
      return {
        ...state,
        shippingSuccess: action.payload,
      };
    case MyAccountConst.ADD_CARD_SUCCESS:
      return {
        ...state,
        CardSucces: action.payload,
      };
    case MyAccountConst.CLOSE_NOTIFI_SUCCESS:
      return {
        ...state,
        shippingSuccess: '',
        CardSucces: '',
      };
    case MyAccountConst.GET_SHIPPING_SUCCESS:
      return {
        ...state,
        AllShipingAdress: action.payload,
      };
    case MyAccountConst.GET_CARD_SUCCESS:
      return {
        ...state,
        AllPaymentsCard: action.payload,
      };
    case MyAccountConst.SHIPPING_FOR_PAYMENT:
      return {
        ...state,
        PayMentShipping: action.payload,
      };
    case MyAccountConst.GET_MYORDER_SUCCESS:
      return {
        ...state,
        myOrders: action.payload,
      };
    case MyAccountConst.GET_PURCHASE_HISTORY:
      return {
        ...state,
        PurchaseHistory: action.payload,
      };
    case MyAccountConst.GET_DISPUTES_SUCCESS:
      return {
        ...state,
        Disputes: action.payload,
      };
    case MyAccountConst.GET_NEW_DISPUTES_SUCCESS:
      return {
        ...state,
        NewDisputes: action.payload,
      };
    case MyAccountConst.GET_DISPUTES_COMMENTS_SUCCESS:
      return {
        ...state,
        disputesComents: action.payload,
      };
    case MyAccountConst.GET_WATCHLIST_ITEM_SUCCESS:
      return {
        ...state,
        watchListItem: action.payload,
      };
    case MyAccountConst.CHECKED_BOX_SUCCESS:
      const { items, checked } = action.payload;
      const test = state.AllShipingAdress.findIndex((item) => item.id === items.id);
      state.AllShipingAdress[test].checked = checked;
      return {
        ...state,
        // watchListItem: action.payload,
      };
    case MyAccountConst.ALL_CHECKED_FALSE:
      const data = state.AllShipingAdress.map((item) => ({
        ...item,
        checked: false,
      }));
      return {
        ...state,
        AllShipingAdress: data,
        cardDetails: '',
        // watchListItem: action.payload,
      };
    case MyAccountConst.CHECKED_BOX_CARD_SUCCESS:
      const { select, check } = action.payload;
      const Id = state.AllPaymentsCard.findIndex((item) => item.id === select.id);
      state.AllPaymentsCard[Id].checked = check;
      return {
        ...state,
        cardDetails: check == true ? select : '',
      };
    case MyAccountConst.ALL_CHECKED_CARD_FALSE:
      const dataCard = state.AllPaymentsCard.map((item) => ({
        ...item,
        checked: false,
      }));
      return {
        ...state,
        AllPaymentsCard: dataCard,

        // watchListItem: action.payload,
      };
    default:
      return state;
  }
};
export default myAccountReducer;
