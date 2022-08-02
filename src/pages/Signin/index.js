import React, { useState } from 'react';
import PageLayout from '../../layout/PageLayout';
import './signin.css';
import SignInPage from './SignInPage';
const SignIn = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }

  return (
    <PageLayout>
      <SignInPage />
    </PageLayout>
  );
};

export default SignIn;
