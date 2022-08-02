import React, { useState, useEffect } from 'react';
import { Row, Col, Checkbox, Button, Input, Radio, notification, Spin } from 'antd';
import './Header.css';
import DeleteIcon from '../../../../assests/images/Icon metro-bin.png';
import { useHistory } from 'react-router-dom';
const { TextArea } = Input;
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function AddFeilds() {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const { id } = useParams();
  let temp = [];
  const [Paragraph, setParagraph] = useState(false);
  const [radiovalue, setRadioValue] = React.useState('');
  const [show, setShow] = useState(false);
  const [optionsArr, setOptionArr] = useState([]);
  const [itemSpecificsForm, setItemSpecificsForm] = useState([]);
  const [va, setVa] = useState('');
  const [fields, setFeilds] = useState([1, 2, 3]);
  const [dropdwonObj, setDropdwonObj] = useState({
    type: 'dropdown',
    title: '',
    required: false,
    options: [],
  });
  const [textfieldObj, setTextfieldObj] = useState({
    type: 'textfield',
    title: '',
    required: false,
    isParagraph: false,
  });
  const [numField, setNumFeild] = useState({
    type: 'numberfield',
    title: '',
    required: false,
  });
  const onChange = (e) => {
    setRadioValue(e.target.value);
  };
  // let dropdwonObj = {
  //   type: 'dropdown',
  //   title: '',
  //   required: false,
  //   option: [],
  // };
  // let textfieldObj = {};
  const sellerForm = useSelector((state) => state.productReducer);
  const { adminSellerFormData } = sellerForm;
  // useEffect(() => {
  //   if (!adminSellerFormData.subCatId || !id) {
  //     history.push('/admin-details/new-Catform');
  //   }
  // }, [adminSellerFormData, id]);
  const handleAddFeilds = () => {
    let temp = [...fields];
    temp.push(temp + 1);
    setFeilds(temp);
  };
  const hanldeDelete = () => {
    fields.pop();
    setFeilds(fields);
  };

  const handleChangeDropdwon = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'title') {
      setDropdwonObj({
        ...dropdwonObj,
        title: value,
      });
    }
    if (checked) {
      setDropdwonObj({
        ...dropdwonObj,

        required: checked,
      });
    }
    // dropdwonObj.required = checked;
    if (name === 'option') {
      setVa(value);
    }
  };

  const handleonBlur = () => {
    const temp = [...dropdwonObj.options];
    temp.push(va);
    console.log('temppp', temp);
    setDropdwonObj({
      ...dropdwonObj,
      options: temp,
    });
  };
  const textFeildTypeChange = (e) => {
    const { name, value, checked } = e.target;
    if (value)
      setTextfieldObj({
        ...textfieldObj,
        title: value,
      });
    if (checked) {
      setTextfieldObj({
        ...textfieldObj,
        required: checked,
      });
    }
  };
  const CheckedParagraph = (e) => {
    const { checked } = e.target;
    setTextfieldObj({
      ...textfieldObj,
      isParagraph: checked,
    });
  };
  const handleNumFeild = (e) => {
    const { name, value, checked } = e.target;
    if (value) {
      setNumFeild({
        ...numField,
        title: value,
      });
    }
    if (checked) {
      setNumFeild({
        ...numField,
        required: checked,
      });
    }
  };
  const renderContents = () => {
    switch (radiovalue) {
      case 'dropdown':
        return (
          <div className="buyer_header active_header dropDown-header">
            <div>
              <p className="dropPara">Dropdown</p>
            </div>
            <div className="dropdownInputs">
              <p>Title to be displayed above dropdown</p>
              <Input
                placeholder="Title"
                name="title"
                value={dropdwonObj.title}
                className="firstInput"
                onChange={handleChangeDropdwon}
              />
              <Checkbox onChange={handleChangeDropdwon} checked={dropdwonObj.required}>
                Required?
              </Checkbox>
              {fields.map((item) => (
                <Input
                  placeholder="Title"
                  name="option"
                  onChange={handleChangeDropdwon}
                  onBlur={handleonBlur}
                />
              ))}
            </div>
            <p onClick={handleAddFeilds} className="dropDownP" name="required">
              + add another option
            </p>
            <div className="firstIcon">
              <img src={DeleteIcon} onClick={hanldeDelete} />
            </div>
          </div>
        );

      case 'textFeild':
        return (
          <div className="buyer_header active_header">
            <div className="droptwo">
              <p>Text field</p>
            </div>
            <div className="titlecl">
              <p>Title to be displayed above text field</p>
              <Input
                placeholder="Title"
                onChange={textFeildTypeChange}
                value={textfieldObj.title}
              />
              <Checkbox onChange={textFeildTypeChange} checked={textfieldObj.required}>
                Required?
              </Checkbox>
              <Checkbox onChange={CheckedParagraph} checked={textfieldObj.isParagraph}>
                Paragraph box?
              </Checkbox>
              {/* <div className="firstIcon">
                <img src={DeleteIcon} />
              </div> */}
            </div>
            {/* {Paragraph && <TextArea rows={4} />} */}
          </div>
        );
      case 'numberFeild':
        return (
          <div className="buyer_header active_header">
            <div>
              <p className="droptwo">Number field</p>
            </div>
            <div className="titleClass" className="titlecl">
              <p>Title to be displayed above text field</p>
              <Input placeholder="Title" onChange={handleNumFeild} value={numField.title} />
              <Checkbox onChange={handleNumFeild} checked={numField.required}>
                Required?
              </Checkbox>
              <div className="firstIcon">
                <img src={DeleteIcon} />
              </div>
            </div>
          </div>
        );
      default:
      // default
    }
  };
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {},
    });
  };
  const handleSubmit = () => {
    setLoading(true);
    let temp = [];
    if (textfieldObj.title) {
      temp.push(textfieldObj);
    }
    if (dropdwonObj.title) {
      temp.push(dropdwonObj);
    }
    if (numField.title) {
      temp.push(numField);
    }
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminSaveSellerForm-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            subCategoryId: id ? id : adminSellerFormData.subCatId,
            itemSpecificsForm: temp,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            openNotificationWithIcon('success', message);
            setDropdwonObj({
              type: 'dropdown',
              title: '',
              required: false,
              options: [],
            });
            setTextfieldObj({
              type: 'textfield',
              title: '',
              required: false,
              isParagraph: false,
            });
            setNumFeild({
              type: 'numberfield',
              title: '',
              required: false,
            });
            setLoading(false);
          }
          if (status == 400) {
            setLoading(false);
            openNotificationWithIcon('error', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };

  return (
    <div>
      {!show ? (
        <div>
          <Row className="add_field">
            <Radio.Group onChange={onChange} value={radiovalue} style={{ display: 'contents' }}>
              <Col span={6}>
                <Radio value="dropdown">Dropdown</Radio>
              </Col>
              <Col span={6}>
                <Radio value="textFeild">Text field</Radio>
              </Col>
              <Col span={6}>
                <Radio value="numberFeild">Number field</Radio>
              </Col>
              <Col span={6}>
                <Button onClick={() => setShow(true)}>Add</Button>
              </Col>
            </Radio.Group>
          </Row>
        </div>
      ) : (
        <>
          {renderContents()}

          {/* <div>
            <Row className="add_field">
              <Col span={6}>
                <Checkbox onChange={onChange}>Dropdown</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox onChange={onChange}>Text field</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox onChange={onChange}>Number field</Checkbox>
              </Col>
              <Col span={6}>
                <Button>Add</Button>
              </Col>
            </Row>
          </div>
          <div className="dropBtn">
            <Button>Save</Button>
          </div> */}
          <div>
            {loading && (
              <Spin
                size="large"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '50%',
                  left: '50%',
                  zIndex: '999',
                }}
              />
            )}
            <Row className="add_field">
              <Radio.Group onChange={onChange} value={radiovalue} style={{ display: 'contents' }}>
                <Col span={6}>
                  <Radio value="dropdown">Dropdown</Radio>
                </Col>
                <Col span={6}>
                  <Radio value="textFeild">Text field</Radio>
                </Col>
                <Col span={6}>
                  <Radio value="numberFeild">Number field</Radio>
                </Col>
                <Col span={6}>
                  <Button onClick={handleSubmit}>Save</Button>
                </Col>
              </Radio.Group>
              {/* <div className="dropBtn">
                <Button onClick={hanldeSubmit}>Save</Button>
              </div> */}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
