import React from 'react';
import './price.css';
import { LeftOutlined } from '@ant-design/icons';
import { Typography, Checkbox, Input, Button, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { handleProductFormDataChange } from '../../../store/product/action';
const { Title, Text } = Typography;
const Price = () => {
  const {
    productReducer: { productFormData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const history = useHistory();

  const handleChangeInput = (e, name) => {
    dispatch(handleProductFormDataChange({ name, value: e.target.value }));
  };

  function onChangeCheck(e) {
    console.log('data', e.target.value, e.target.name);
    dispatch(handleProductFormDataChange({ name: e.target.name, value: e.target.checked }));
  }

  const goToPreviousPath = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };

  return (
    <>
      <div className="price_outer">
        <div className="price_heading">
          <Title level={5}>Pricing details</Title>
        </div>
        <div className="price_feild">
          <Text>How much do you think this item is worth?</Text>
          <Input
            type="number"
            onChange={(e) => handleChangeInput(e, 'price')}
            value={productFormData?.price == 0 ? '' : productFormData?.price}
          />
          <Text className="small_text">
            Only our experts will see this and create a fair estimate for bidders based on
            previously sold listings.
          </Text>
        </div>
        <div className="price_feild">
          <Checkbox
            name="listAsAuction"
            onChange={onChangeCheck}
            value={productFormData?.listAsAuction}
            checked={productFormData && productFormData.listAsAuction}
            disabled={productFormData && productFormData.List_of_Buy_it}
          >
            <span className="mrg_lft">List as an Auction</span>
          </Checkbox>
          <Text>
            In order to generate more interest and bids for your item, all of our auctions start
            from £1.
          </Text>
          <Input
            type="number"
            onChange={(e) => handleChangeInput(e, 'startingAuctionPrice')}
            value={
              (productFormData && productFormData.List_of_Buy_it) || !productFormData?.listAsAuction
                ? ''
                : productFormData?.startingAuctionPrice
            }
            disabled={productFormData && productFormData.listAsAuction === true ? false : true}
          />
        </div>
        <div className="price_feild">
          <Text>Set a reserve price</Text>
          <Input
            type="number"
            onChange={(e) => handleChangeInput(e, 'reservePrice')}
            value={
              (productFormData && productFormData.List_of_Buy_it) || !productFormData?.listAsAuction
                ? ''
                : productFormData?.reservePrice
            }
            disabled={productFormData && productFormData.listAsAuction === true ? false : true}
          />
          <Text className="small_text">
            Generally, items being sold without reserve prices create far more excitement and lead
            to higher revenue
          </Text>
        </div>
        <div className="price_feild">
          <Checkbox
            name="List_of_Buy_it"
            onChange={onChangeCheck}
            value={productFormData?.List_of_Buy_it}
            checked={productFormData && productFormData.List_of_Buy_it}
            disabled={productFormData && productFormData.listAsAuction}
          >
            <span className="mrg_lft">List as ‘Buy it now’</span>
          </Checkbox>
          <Text>Buy it now price</Text>
          <Input
            type="number"
            onChange={(e) => handleChangeInput(e, 'buyItNowPrice')}
            value={
              (productFormData && productFormData.listAsAuction) || !productFormData?.List_of_Buy_it
                ? ''
                : productFormData?.buyItNowPrice
            }
            disabled={productFormData && productFormData.List_of_Buy_it === true ? false : true}
          />
        </div>
      </div>
      <div className="btn_outer">
        <div className="back_icon" onClick={goToPreviousPath}>
          <LeftOutlined /> Back
        </div>
        <div className="contine_btn">
          <Button
            onClick={() =>
              //   (productFormData.List_of_Buy_it && productFormData?.buyItNowPrice) ||
              //   (productFormData?.startingAuctionPrice &&
              //     productFormData.listAsAuction &&
              //     productFormData?.reservePrice)
              //     ? history.push('/List-items/Amibid services')
              //     : openNotificationWithIcon('error', 'Please Check one feild')
              // }
              (productFormData.List_of_Buy_it && productFormData?.buyItNowPrice) ||
              (productFormData?.startingAuctionPrice &&
                productFormData.listAsAuction &&
                productFormData?.reservePrice)
                ? productFormData?.reservePrice <= 150
                  ? openNotificationWithIcon(
                      'error',
                      '"A reserve price can only be set for items valued over £150. Our experts will let you know if they think your reserve is too high',
                    )
                  : history.push('/List-items/Amibid services')
                : openNotificationWithIcon('error', 'Please Check one feild')
            }
          >
            Continue
            {/* <Link to={route}>{ButtonName}</Link> */}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Price;
