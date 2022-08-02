import React from 'react';
import { Typography } from 'antd';
const { Paragraph, Title } = Typography;
import moment from 'moment';
const BidingHistory = ({ curentItemData }) => {
  const getDate = (secs) => {
    const data = new Date(secs * 1000);
    const date = moment(data).format('LLL');
    return date;
  };
  return (
    <>
      <div className="bidding-outer">
        <div className="bidding-list">
          <div className="bidding-heading">
            <Title level={5}>Bidding History</Title>
            <Paragraph>{curentItemData.itemBidRecords.length}</Paragraph>
          </div>
          {curentItemData.itemBidRecords.map((item) => (
            <div className="bidding-item">
              {/* <Paragraph>07/01/2020 12:00pm</Paragraph> */}
              <Paragraph>{getDate(item.createdAt._seconds)}</Paragraph>
              <Paragraph>{item.bidAmount}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BidingHistory;
