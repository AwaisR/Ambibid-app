import React from 'react';
import Loader from 'react-js-loader';
export default function index() {
  return (
    <div>
      <div className={'row'}>
        <div className={'item'}>
          <Loader type="box-up" bgColor={'#FFFFFF'} title={'box-up'} color={'#FFFFFF'} size={100} />
        </div>
      </div>
    </div>
  );
}
