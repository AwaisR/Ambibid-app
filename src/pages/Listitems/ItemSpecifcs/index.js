import React from 'react';
import LayoutInner from '../../../components/Layout/Layout';
import ItemDetails from './ItemDetails';
import BackCountinueBtn from '../../../components/ButtonsList';
const ItemSpecifcs = ({ history }) => {
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <>
      <LayoutInner>
        <ItemDetails />
        <BackCountinueBtn
          ButtonName="Continue"
          route="/List-items/Pricing"
          returnBack={goToPreviousPath}
        />
      </LayoutInner>
    </>
  );
};
export default ItemSpecifcs;
