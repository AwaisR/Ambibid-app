import React from 'react';
import { Typography, Input, Select, Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { handleProductFormDataChange } from '../../../store/product/action';
const { Title, Text } = Typography;
import { LeftOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;
const itemSpecific = (props) => {
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('props', props);

  const handleChange = (value, name) => {
    console.log(value, name);
    dispatch(handleProductFormDataChange({ name, value }));
  };

  const handleChangeInput = (e, name) => {
    dispatch(handleProductFormDataChange({ name, value: e.target.value }));
  };

  return (
    <>
      <div className="item-details">
        <Title level={5}>Item specifics</Title>
        <div className="item-feilds">
          <Text>No. of objects</Text>
          <Input
            name="No_of_objects_Specific"
            placeholder="required*"
            onChange={(e) => handleChangeInput(e, 'No_of_objects_Specific')}
            value={productFormData?.No_of_objects_Specific}
          />
        </div>
        <div className="item-feilds">
          <Text>Series</Text>
          <Select
            style={{ width: '66%' }}
            defaultValue="required*"
            onChange={(value) => handleChange(value, 'Series')}
            value={productFormData?.Series}
          >
            <Option value="jack">Jack</Option>
          </Select>
        </div>
        <div className="item-feilds">
          <Text>Publisher</Text>
          <Select
            style={{ width: '66%' }}
            defaultValue="required*"
            onChange={(value) => handleChange(value, 'Publisher')}
            value={productFormData?.Publisher}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="item-feilds">
          <Text>Extras</Text>
          <TextArea
            rows={4}
            name="Extras"
            className="item-feilds_text"
            onChange={(e) => handleChangeInput(e, 'Extras')}
            value={productFormData?.Extras}
          />
        </div>
        <div className="item-feilds">
          <Text>No. of objects</Text>
          <Input
            name="No_of_objects"
            placeholder="required*"
            // onChange={(e) => handleChangeInput(e, 'No_of_Objects')}
            value={productFormData?.No_of_objects_Specific}
          />
        </div>
        <div className="item-feilds">
          <Text>Series</Text>
          <Input
            name="Series_of_objects"
            placeholder="required*"
            onChange={(e) => handleChangeInput(e, 'Series_of_objects')}
            value={productFormData?.Series}
          />
        </div>
        <div className="item-feilds">
          <Text>Publisher</Text>
          <Input
            name="Publisher_of_objects"
            placeholder="Select a publisher"
            onChange={(e) => handleChangeInput(e, 'Publisher_of_objects')}
            value={productFormData?.Publisher}
          />
        </div>
      </div>
    </>
  );
};
export default itemSpecific;
