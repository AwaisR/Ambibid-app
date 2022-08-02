import React, { useState, useEffect } from 'react';
import './Header.css';
import { Typography, Input, Space, Button, Row, Col, Select, notification, Image } from 'antd';
const { Title, Text } = Typography;
const { TextArea } = Input;
import './SubDetails.css';
Image;
import ItemSpecific from './itemSpecific';
import { Link } from 'react-router-dom';
import Price from './Price';
import AmbibidServics from './AmbibidServics';
import AuctionRequest from './AuctionRequest';
import axios from 'axios';
export default function SubsDetails({ data }) {
  const [cat, setCat] = useState([]);
  const [filterData, setFilterData] = useState({
    buyItNowPrice: '',
    id: '',
    itemCaption: '',
    itemDescription: '',
    itemName: '',
    itemSpecifics: {},
    listAsAuction: true,
    photos: [],
    photography: true,
    photographyPrice: '',

    price: '',
    professionallyCleaned: true,
    professionallyCleanedPrice: '',
    reservePrice: '',
    shipWithUs: true,
    shipWithUsPrice: '',
    startingAuctionPrice: '',
    subCategory: { field1: '', field2: '', field3: '' },
    subCategoryId: '',
    threeSixtyPhotography: true,
    threeSixtyPhotographyPrice: '',
    userId: '',
    auctionStartTime: '',
    auctionEndTime: '',
    bidIncrement: '',
    buyItNowCheck: false,
  });
  const [catId, setCatId] = useState('');
  const [words, setWords] = useState(80);
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminGetCategories-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            // uid: '001',
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            console.log('data', data);
            setCat(data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  useEffect(() => {
    setFilterData({
      buyItNowPrice: data.buyItNowPrice,
      id: data.id,
      itemCaption: data.itemCaption,
      itemDescription: data.itemDescription,
      itemName: data.itemName,
      itemSpecifics: data.itemSpecifics,
      listAsAuction: data.listAsAuction,
      buyItNowCheck: data.listAsAuction ? false : true,
      photos: data.photos,
      photography: data.photography,
      photographyPrice: data.photographyPrice,

      price: data.price,
      professionallyCleaned: data.professionallyCleaned,
      professionallyCleanedPrice: data.professionallyCleanedPrice,
      reservePrice: data.reservePrice,
      shipWithUs: data.shipWithUs,
      shipWithUsPrice: data.shipWithUsPrice,
      startingAuctionPrice: data.startingAuctionPrice,
      subCategory: data.subCategory,
      subCategoryId: data.subCategoryId,
      threeSixtyPhotography: data.threeSixtyPhotography,
      threeSixtyPhotographyPrice: data.threeSixtyPhotographyPrice,
      userId: data.userId,
      auctionStartTime: '',
      auctionEndTime: '',
      bidIncrement: '',
    });
  }, [data]);
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {},
    });
  };
  const hanldeSelectCAt = (value) => {
    setCatId(value);
  };
  const handleChangeItems = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };
  const handleChangeItemSpecific = (e) => {
    const obj = { ...itemSpecifics };
    const { name, value } = e.target;

    if (name === 'field3') {
      obj.field1 = value;
    }
    if (name === 'field1') {
      obj.field1 = value;
    }
    if (name === 'field4') {
      obj.field4 = value;
    }
    console.log('objjjjjjjjjj', obj);
    setFilterData({
      ...filterData,
      itemSpecifics: obj,
      // [name]: value,
    });
  };
  const handleSelectItemSpecific = (value) => {
    let obj = { ...filterData.itemSpecifics };
    if (value) {
      obj.field3 = value;
    }
    console.log('obj', obj);
    setFilterData({
      ...filterData,
      itemSpecifics: obj,
    });
  };
  const handleChangeSubCat = (value) => {
    setFilterData({
      ...filterData,
      subCategoryId: value,
    });
  };
  const handleChangePrice = (e) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };
  const ListAuctionCheck = (e) => {
    const { checked } = e.target;
    setFilterData({
      ...filterData,
      buyItNowCheck: !filterData.buyItNowCheck,

      listAsAuction: checked,
    });
  };
  const ListAuctionCheckBuy = (e) => {
    const { checked } = e.target;
    setFilterData({
      ...filterData,
      listAsAuction: !filterData.listAsAuction,

      buyItNowCheck: checked,
    });
  };
  const handleCheckServices = (e) => {
    const { name, checked } = e.target;
    setFilterData({
      ...filterData,
      [name]: checked,
    });
  };
  const handleRequestInput = (e) => {
    // console.log('tesdsssssssssss', e.target);
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value,
    });
  };
  const handleSubmitData = () => {
    if (filterData.bidIncrement) {
      axios
        .post(
          'https://us-central1-amibid-24a48.cloudfunctions.net/admin1-adminItemUpdate-default',
          {
            data: {
              adminId: localStorage.getItem('adminId'),
              itemId: filterData.id,
              subCategoryId: filterData.subCategoryId,
              shipWithUs: filterData.shipWithUs,
              itemName: filterData.itemName,
              itemCaption: filterData.itemCaption,
              itemDescription: filterData.itemDescription,
              itemSpecifics: filterData.itemSpecifics,
              price: filterData.price,
              listAsAuction: filterData.listAsAuction,
              startingAuctionPrice: filterData.startingAuctionPrice
                ? filterData.startingAuctionPrice
                : 0,
              reservePrice: filterData.reservePrice,
              buyItNowPrice: filterData.buyItNowPrice,
              professionallyCleaned: filterData.professionallyCleaned,
              photography: filterData.photography,
              threeSixtyPhotography: filterData.threeSixtyPhotography,
              auctionStartTime: filterData.auctionStartTime,
              auctionEndTime: filterData.auctionEndTime,
              bidIncrement: filterData.bidIncrement,
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
              // console.log('data', data);
              // setCat(data);
            }
            if (status == 400) {
              openNotificationWithIcon('error', message);
            }
          },
          (error) => {
            console.log('error', error);
          },
        );
    } else {
      openNotificationWithIcon('error', 'Please Enter price increment');
    }
  };
  return (
    <div className="sub_detail_outer">
      <div className="buyer_header active_header">
        <Row>
          <Col span={8}>
            <div className="buyer_header_left">
              <Title level={5}>Item No. {filterData && filterData.id}</Title>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          {filterData &&
            filterData.photos.map((item) => (
              <Col span={4} className="antImgaes">
                <Image
                  width="80%"
                  height="100%"
                  style={{ objectFit: 'none', margin: '0px 4px' }}
                  src={item}
                />
              </Col>
            ))}
        </Row>
      </div>
      <div className="buyer_header sub_detail active_header">
        <Title level={5}>Item Details</Title>
        <div className="item-feilds">
          <Text>Item name</Text>
          <Input
            placeholder="What is your item called?"
            value={filterData && filterData.itemName}
            onChange={handleChangeItems}
            name="itemName"
          />
          <Text className="text_right2">{80 - filterData.itemName.length} characters left</Text>
        </div>
        <div className="item-feilds">
          <Text>Item caption</Text>
          <Input
            placeholder="Give your item a subtitle"
            value={filterData && filterData.itemCaption}
            onChange={handleChangeItems}
            name="itemCaption"
          />
          <Text className="text_right2">{80 - filterData.itemCaption.length}characters left</Text>
        </div>
        <div className="item-feilds">
          <Text>item description</Text>
          <TextArea
            rows={8}
            onChange={handleChangeItems}
            name="itemDescription"
            className="item-feilds_text"
            value={filterData && filterData.itemDescription}
            placeholder="Adding as much information about your item will help our experts and buyers form an accurate overview as well as minimise chances of returns. Details of measurements, condition and provenance are always useful."
          />
          <Text className="text_right_w">
            {2000 - filterData.itemDescription.length} characters left
          </Text>
          <ItemSpecific
            filterData={filterData}
            handleChangeItemSpecific={handleChangeItemSpecific}
            handleSelectItemSpecific={handleSelectItemSpecific}
          />
        </div>
      </div>
      <div></div>
      <div className="buyer_header active_header">
        <div className="price_category">
          <p>Which category best fits your item?</p>
          <Select defaultValue="Select Category" onChange={hanldeSelectCAt}>
            {cat &&
              cat.categories &&
              cat.categories.map((item) => <Option value={item.id}>{item.name}</Option>)}
          </Select>
          <p>Which sub-category best fits your item?</p>
          <Select defaultValue="Select Sub-category" onChange={handleChangeSubCat}>
            {cat &&
              cat.categories &&
              cat.subCategories.map((item) => {
                if (item.parentId === catId) {
                  return <Option value={item.id}>{item.name}</Option>;
                }
              })}
          </Select>
        </div>
      </div>
      <div className="buyer_header active_header">
        <Price
          filterData={filterData}
          handleChangePrice={handleChangePrice}
          ListAuctionCheck={ListAuctionCheck}
          ListAuctionCheckBuy={ListAuctionCheckBuy}
        />
      </div>
      <div className="buyer_header active_header">
        <AmbibidServics filterData={filterData} handleCheckServices={handleCheckServices} />
      </div>
      <AuctionRequest handleRequestInput={handleRequestInput} />
      <div className="request_btn">
        <Link to="/admin-details/rejection-note">
          <Button className="btn-reject">Reject</Button>
        </Link>
        <Button onClick={handleSubmitData} className="btn-accept">
          Accept
        </Button>
      </div>
    </div>
  );
}
