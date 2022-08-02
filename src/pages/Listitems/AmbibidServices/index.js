import React from 'react';
import BackCountinueBtn from '../../../components/ButtonsList';
import LayoutInner from '../../../components/Layout/Layout';
import AmbibidServics from './AmbibidServics';
export default function index({ history }) {
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <div>
      <LayoutInner>
        <AmbibidServics />
        <BackCountinueBtn
          ship="I’ll ship the item myself"
          ButtonName="Submit"
          route="/thanks-submit-items"
          selfShiping="/List-items/Shipping"
          returnBack={goToPreviousPath}
        />
      </LayoutInner>
    </div>
  );
}
