import React from 'react';
import { Typography, Input, Select, Row, Col, Button } from 'antd';
import './itemspecify.css';
import { useSelector, useDispatch } from 'react-redux';
const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const itemSpecific = ({ filterData, handleChangeItemSpecific, handleSelectItemSpecific }) => {
  return (
    <>
      <div className="item-specific">
        <Title level={5}>
          {filterData &&
          filterData.subCategory &&
          filterData.subCategory.itemSpecificsForm &&
          filterData.subCategory.itemSpecificsForm.length
            ? 'Item specifics'
            : ''}
        </Title>
        <div className="item-feilds">
          {filterData &&
            filterData.subCategory.itemSpecificsForm &&
            filterData.subCategory.itemSpecificsForm.map((item) => {
              if (item.type === 'numberfield') {
                return (
                  <>
                    <Text>{item.title}</Text>
                    <Input
                      name="field1"
                      onChange={handleChangeItemSpecific}
                      placeholder={item.required === 'true' ? 'required' : ''}
                    />
                  </>
                );
              }
              if (item.type === 'dropdown') {
                return (
                  <>
                    <Text>{item.title}</Text>
                    <Select
                      name="field2"
                      defaultValue="required*"
                      onChange={handleSelectItemSpecific}
                    >
                      {item.options.map((opt) => (
                        <Option value={opt}>{opt}</Option>
                      ))}
                    </Select>
                  </>
                );
              }
              if (item.type === 'textfield') {
                return (
                  <>
                    <Text>{item.title}</Text>
                    <Input
                      name="field3"
                      onChange={handleChangeItemSpecific}
                      placeholder={item.required === 'true' ? 'required' : ''}
                      // onChange={(e) => handleChangeInput(e, 'No_of_objects_Specific')}
                      // value={productFormData?.No_of_objects_Specific}
                    />
                    {item.isParagraph === true ? (
                      <TextArea rows={4} name="field4" onChange={handleChangeItemSpecific} />
                    ) : (
                      ''
                    )}
                  </>

                  //
                );
              }
            })}
        </div>
      </div>
    </>
  );
};
export default itemSpecific;
