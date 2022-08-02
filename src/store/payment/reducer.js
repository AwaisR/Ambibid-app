import { userPayment } from './constant';
const initialState = {
  payement: false,
  AddPayment: '',
};
const userPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case userPayment.SELLER_PAYMENT_SUCCESS:
      return {
        ...state,
      };
    case userPayment.ADD_SELLER_PAYMENT_SUCCESS:
      return {
        ...state,
        AddPayment: action.payload,
      };
      break;
    case userPayment.REMOVE_NOTIFICATIONS:
      return {
        ...state,
        AddPayment: '',
      };
    default:
      return state;
  }
};
export default userPaymentReducer;
