import React, { useState } from 'react';
import PageLayout from '../../layout/PageLayout';
import HeaderInner from './HeaderInner';
import HeaderOuter from './HeaderOuter';
const HeadersSection = () => {
  return (
    <PageLayout title="Header">
      <HeaderInner />
      <HeaderOuter />
    </PageLayout>
  );
};
export default HeadersSection;
