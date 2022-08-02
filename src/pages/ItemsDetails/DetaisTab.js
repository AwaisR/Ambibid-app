import React from 'react';
import { Tabs, Typography, Row, Col } from 'antd';
import ItemSpecify from './ItemSpecify';
import ItemPostage from './ItemPostage';
import './premium.css';
import BidingHistory from './BidingHistory';
const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;
function callback(key) {
  console.log(key);
}
export default function DetaisTab({ curentItemData, type }) {
  return (
    <div className="premium-tab">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Item Description" key="1">
          <Paragraph>{curentItemData?.itemDescription}</Paragraph>
        </TabPane>
        <TabPane tab="Item Specifics" key="2">
          <ItemSpecify curentItemData={curentItemData && curentItemData} />
        </TabPane>
        {type === 'auction' || type === 'recommended' ? (
          <TabPane tab="Bidding History" key="3">
            <BidingHistory curentItemData={curentItemData && curentItemData} />
          </TabPane>
        ) : null}

        <TabPane tab="Postage and payments" key="4">
          <ItemPostage curentItemData={curentItemData && curentItemData} />
        </TabPane>
      </Tabs>
    </div>
  );
}
