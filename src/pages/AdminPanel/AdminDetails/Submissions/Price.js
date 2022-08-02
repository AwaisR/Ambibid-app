import React from 'react';
import './price.css';
import { Typography, Checkbox, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Price = ({ filterData, handleChangePrice, ListAuctionCheck, ListAuctionCheckBuy }) => {
  return (
    <div className="price_outer">
      <div className="price_feild">
        <Text>How much do you think this item is worth?</Text>
        <Input value={filterData && filterData.price} name="price" onChange={handleChangePrice} />
        <Text className="small_text">
          Only our experts will see this and create a fair estimate for bidders based on previously
          sold listings.
        </Text>
      </div>
      <div className="price_feild">
        <Checkbox
          name="listAsAuction"
          checked={filterData && filterData.listAsAuction}
          onChange={ListAuctionCheck}
        >
          <span className="mrg_lft">List as an Auction</span>
        </Checkbox>
        <Text>Starting auction price</Text>
        <Input
          value={filterData && filterData.startingAuctionPrice}
          name="startingAuctionPrice"
          onChange={handleChangePrice}
          disabled={filterData && filterData.listAsAuction === true ? false : true}
        />
      </div>
      <div className="price_feild">
        <Text>Set a reserve price</Text>
        <Input
          value={filterData && filterData.reservePrice}
          name="reservePrice"
          onChange={handleChangePrice}
          disabled={filterData && filterData.listAsAuction === true ? false : true}
        />
        <Text className="small_text">
          A reserve price can only be set for items valued over £150
        </Text>
      </div>
      <div className="price_feild">
        <Checkbox
          name="List_of_Buy_it"
          onChange={ListAuctionCheckBuy}
          checked={filterData && filterData.buyItNowCheck}
          // value={productFormData?.List_of_Buy_it}
        >
          <span className="mrg_lft">List as ‘Buy it now’</span>
        </Checkbox>
        <Text>Buy it now price</Text>
        <Input
          value={filterData && filterData.buyItNowPrice}
          name="buyItNowPrice"
          onChange={handleChangePrice}
          disabled={filterData && filterData.buyItNowCheck === true ? false : true}
        />
      </div>
    </div>
  );
};
export default Price;
