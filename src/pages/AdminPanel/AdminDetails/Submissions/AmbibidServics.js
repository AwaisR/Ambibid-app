import React, { useEffect, useState } from 'react';
import { Typography, Checkbox } from 'antd';
const { Title, Text } = Typography;
import { useSelector, useDispatch } from 'react-redux';
// import { handleProductFormDataChange } from '../../../store/product/action';
import './ambibidService.css';
import axios from 'axios';
export default function AmbibidServics({ filterData, handleCheckServices }) {
  return (
    <div className="amibid-outer">
      <div className="ambibid-heading">
        <Title level={5}>Amibid fulfilment services</Title>
      </div>
      <div className="ambibid-heading-info">
        <Text>
          Increase your chances of a getting a higher bid by using our Amibid fulfilment system.
          Send us your item, we’ll give you an experts evaluation, take professional photos and even
          providea product cleaning service before putting it as a ‘featured’ auction for you. We’ll
          even take of delivering it to the buyer.
        </Text>
      </div>
      {/* <div className="services_checkbox">
        <Checkbox
          name="Service_info"
          // onChange={onChangeCheck}
          // checked={productFormData?.itemFullFill}
          // value={productFormData?.itemFullFill}
        >
          <Text className="services_info mar_left">
            I’d like to submit my item through the fulfilment centre
          </Text>
        </Checkbox>
      </div> */}
      <div className="services_checkbox">
        <Checkbox
          checked={filterData && filterData.shipWithUs}
          name="shipWithUs"
          onChange={handleCheckServices}
          //  onChange={onChangeCheck} value={productFormData?.shipWithUs}
        >
          <strong>Ship with us</strong>
        </Checkbox>
        <Text className="services_info">
          Let us take care of the shipping to buyer + insurance of package
        </Text>
        <Text className="services_info">
          Fee of £$
          {filterData && filterData.shipWithUsPrice}
          deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox
          name="professionallyCleaned"
          onChange={handleCheckServices}
          checked={filterData && filterData.professionallyCleaned}
          // onChange={onChangeCheck}
          // value={productFormData?.professionallyCleaned}
        >
          <strong>Professionally cleaned</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take high-end professional photographs of your item
        </Text>
        <Text className="services_info">
          Fee of £ {filterData && filterData.professionallyCleanedPrice} deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox
          name="photography"
          checked={filterData && filterData.photography}
          onChange={handleCheckServices}
        >
          <strong>Photography</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take
          {/* {filterData && filterData.minPhotos} */}
          high-end professional photographs of your item
        </Text>
        <Text className="services_info">
          Fee of £{/* {fulfilment && fulfilment.photographyPrice} */}
          deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox
          name="threeSixtyPhotography"
          onChange={handleCheckServices}
          checked={filterData && filterData.threeSixtyPhotography}
          // onChange={onChangeCheck}
          // value={productFormData?.threeSixtyPhotography}
        >
          <strong>360 Photography</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take high-end professional photographs of your item
        </Text>
        <Text className="services_info">
          Fee of £{/* {fulfilment && fulfilment.threeSixtyPhotographyPrice} */}
          deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Title level={5}>
          Total fees:
          {filterData
            ? filterData.threeSixtyPhotographyPrice +
              filterData.photographyPrice +
              filterData.shipWithUsPrice
            : 0}
          {/* {fulfilment
            ? fulfilment.threeSixtyPhotographyPrice +
              fulfilment.photographyPrice +
              fulfilment.shipWithUsPrice
            : ''} */}
        </Title>
        <Text className="services_info">We only deduct fees once the item has been sold.</Text>
        <Text className="services_info">
          Seller is responsible for covering the cost of shipping this item to the Amibid
          facilities.
        </Text>
      </div>
    </div>
  );
}
