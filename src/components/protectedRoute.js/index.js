import React from 'react';
import { Route, withRouter } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem('token');
        const sellerAccount = localStorage.getItem('sellerAccount');
        const uid = localStorage.getItem('uid');
        const emailuSer = localStorage.getItem('emailuSer');
        if (token && sellerAccount && uid && emailuSer) {
          return <Component {...props} />;
        } else {
          props.history.push('/');
        }
      }}
    />
  );
};
export default withRouter(ProtectedRoute);
