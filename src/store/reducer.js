import { combineReducers } from 'redux';
import userSignUp from './signUp/reducer';
import productReducer from './product/reducer';
import SellerReducer from './SellerDashboard/reducer';
import userPaymentReducer from './payment/reducer';
import myAccountReducer from "./myAccount/reducer"
const rootReducer = combineReducers({
  userSignUp,
  productReducer,
  SellerReducer,
  userPaymentReducer,
  myAccountReducer
});

export default rootReducer;
