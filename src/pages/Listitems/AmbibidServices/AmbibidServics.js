import React, { useEffect, useState } from 'react';
import { Typography, Checkbox } from 'antd';
const { Title, Text } = Typography;
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
import './ambibidService.css';
import axios from 'axios';
export default function AmbibidServics() {
  const [fulfilment, setFulfilment] = useState('');
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  function onChangeCheck(e) {
    dispatch(handleProductFormDataChange({ name: e.target.name, value: e.target.checked }));
  }
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-metadata-default', {
        data: {},
      })
      .then(
        (response) => {
          const status = response.data.result;
          setFulfilment(status.data);
          console.log(status);
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  console.log('fulfilment', fulfilment);
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
      <div className="services_checkbox">
        <Checkbox
          name="Service_info"
          onChange={onChangeCheck}
          checked={productFormData?.itemFullFill}
          value={productFormData?.itemFullFill}
        >
          <Text className="services_info mar_left">
            I’d like to submit my item through the fulfilment centre
          </Text>
        </Checkbox>
      </div>
      <div className="services_checkbox">
        <Checkbox name="shipWithUs" onChange={onChangeCheck} value={productFormData?.shipWithUs}>
          <strong>Ship with us</strong>
        </Checkbox>
        <Text className="services_info">
          Let us take care of the shipping to buyer + insurance of package
        </Text>
        <Text className="services_info">
          Fee of £${fulfilment && fulfilment.shipWithUsPrice} deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox
          name="professionallyCleaned"
          onChange={onChangeCheck}
          value={productFormData?.professionallyCleaned}
        >
          <strong>Professionally cleaned</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take high-end professional photographs of your item
        </Text>
        <Text className="services_info">
          Fee of £ {fulfilment && fulfilment.professionallyCleanedPrice} deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox name="photography" onChange={onChangeCheck} value={productFormData?.photography}>
          <strong>Photography</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take {fulfilment && fulfilment.minPhotos} high-end professional photographs of your
          item
        </Text>
        <Text className="services_info">
          Fee of £ {fulfilment && fulfilment.photographyPrice}deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Checkbox
          name="threeSixtyPhotography"
          onChange={onChangeCheck}
          value={productFormData?.threeSixtyPhotography}
        >
          <strong>360 Photography</strong>
        </Checkbox>
        <Text className="services_info">
          We’ll take high-end professional photographs of your item
        </Text>
        <Text className="services_info">
          Fee of £ {fulfilment && fulfilment.threeSixtyPhotographyPrice} deducted from final sale
        </Text>
      </div>
      <div className="services_checkbox">
        <Title level={5}>
          Total fees:{' '}
          {fulfilment
            ? fulfilment.threeSixtyPhotographyPrice +
              fulfilment.photographyPrice +
              fulfilment.shipWithUsPrice
            : ''}
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
