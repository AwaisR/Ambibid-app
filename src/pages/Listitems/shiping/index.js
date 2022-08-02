import React from 'react';
import BackCountinueBtn from '../../../components/ButtonsList';
import LayoutInner from '../../../components/Layout/Layout';
import Shipping from './Shipping';
import './shiping.css';
export default function index({ history }) {
  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div>
      <LayoutInner>
        <Shipping />
        <BackCountinueBtn
          ButtonName="Submit"
          route="/thanks-submit-items"
          returnBack={goToPreviousPath}
        />
      </LayoutInner>
    </div>
  );
}
