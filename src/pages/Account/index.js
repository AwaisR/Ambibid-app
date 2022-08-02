import React, { useState } from 'react';
import PageLayout from '../../layout/PageLayout';
import './style.css';
import AccountDetails from './AccountDetails';
import SellarAccount from './sellarAccount';
export default function UserAccount() {
  const [pageType, seTpageType] = useState('Account');
  const ChangePageType = (type) => {
    seTpageType(type);
  };
  return (
    <PageLayout>
      {pageType === 'Account' ? (
        <AccountDetails ChangePageType={ChangePageType} />
      ) : (
        <SellarAccount />
      )}
    </PageLayout>
  );
}
