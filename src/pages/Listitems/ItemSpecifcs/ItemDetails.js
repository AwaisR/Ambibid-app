import React, { useState } from 'react';
import { Typography, Input } from 'antd';
const { Title, Text } = Typography;
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
const { TextArea } = Input;
import { useHistory } from 'react-router-dom';
import './itemspecify.css';
import ItemSpecific from './itemSpecific';
const ItemDetails = () => {
  const history = useHistory();
  const [words, setWords] = useState(80);
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [Capwords, setCapWords] = useState(80);
  const [textareawords, setTextareawords] = useState(2000);
  const keypressed = (e) => {
    console.log('Did you delete it? ' + e.keyCode);
  };

  const handleChange = (value, name, e) => {
    console.log(value, name);
    if (value > 0) {
      dispatch(handleProductFormDataChange({ name, value: e.target.value }));
    }
  };

  return (
    <>
      <div className="item-details">
        <Title level={5}>Item Details</Title>
        <div className="item-feilds">
          <Text>Item name</Text>
          <Input
            placeholder="What is your item called?"
            value={productFormData?.itemName}
            onChange={(e) => words > 0 && handleChange(words, 'itemName', e)}
          />
          <Text className="text_right">
            {80 - productFormData?.itemName.length} characters left
          </Text>
        </div>
        <div className="item-feilds">
          <Text>Item caption</Text>
          <Input
            placeholder="Give your item a subtitle"
            value={productFormData?.itemCaption}
            onChange={(e) => Capwords > 0 && handleChange(Capwords, 'itemCaption', e)}
            onKeyPress={keypressed}
          />
          <Text className="text_right">
            {80 - productFormData?.itemCaption.length} characters left
          </Text>
        </div>
        <div className="item-feilds">
          <Text>item description</Text>
          <TextArea
            rows={8}
            className="item-feilds_text"
            placeholder="Adding as much information about your item will help our experts and buyers form an accurate overview as well as minimise chances of returns. Details of measurements, condition and provenance are always useful"
            value={productFormData?.itemDescription}
            onChange={(e) => Capwords > 0 && handleChange(textareawords, 'itemDescription', e)}
          />
          <Text className="text_right_w">
            {2000 - productFormData?.itemDescription.length} characters left
          </Text>
        </div>
        <ItemSpecific />
      </div>
    </>
  );
};
export default ItemDetails;
