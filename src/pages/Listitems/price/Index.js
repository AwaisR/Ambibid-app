import React from 'react';
import LayoutInner from '../../../components/Layout/Layout';
import BackCountinueBtn from '../../../components/ButtonsList';
import Price from './Price';
const index = ({ history }) => {
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <LayoutInner>
        <Price {...location} />
        {/* <BackCountinueBtn
          ButtonName="Continue"
          route="/List-items/Amibid services"
          returnBack={goToPreviousPath}
        /> */}
      </LayoutInner>
    </>
  );
};
export default index;
