import { userConst } from './constant';
const initialState = {
  user: [],
  signIn: false,
  signUp: false,
  ErrorMsg: '',
  SignUpSuccess: '',
};
const userSignUp = (state = initialState, action) => {
  switch (action.type) {
    case userConst.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        SignUpSuccess: 'User Signup Successful',
        signUp: true,
        ErrorMsg: '',
      };
    case userConst.USER_SIGNIN_ERROR:
      return {
        ...state,
        SignUpSuccess: '',
        ErrorMsg: action.payload,
      };
    case userConst.USER_CLOSE_ERROR_MSG:
      return {
        ...state,
        SignUpSuccess: '',
        ErrorMsg: '',
      };
    case userConst.USER_SELLAR_ACCOUNT_SUCCESS:
      return {
        ...state,
        SignUpSuccess: action.payload,
      };
      break;

    default:
      return state;
  }
};
export default userSignUp;
