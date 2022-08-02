import React, { useState } from 'react';
import './Header.css';
import { Input } from 'antd';
import './itemspecify.css';
export default function AuctionRequest({ handleRequestInput }) {
  return (
    <div className="request_outer">
      <div>
        <h3>Ambibid Auction Request</h3>
      </div>
      <div className="buyer_header active_header">
        <div className="request_outer">
          <div className="request_item_inner">
            <div className="request_item_flex">
              <p>When will this auction start?</p>
              <Input
                className="first_input"
                type="datetime-local"
                name="auctionStartTime"
                onChange={handleRequestInput}
              />
              <Input />
              <p>If left empty it will begin immediately after the auction is accepted.</p>
            </div>
            <div className="request_item_flex">
              <p>How many days will this auction last?</p>
              <Input
                className="second_input"
                type="datetime-local"
                name="auctionEndTime"
                onChange={handleRequestInput}
              />
              <p>7 is the default number of days this auction will last.</p>
            </div>
            <div className="request_item_flex">
              <p>Set starting price</p>
              <Input onChange={handleRequestInput} name="startingAuctionPrice" />
              <p>If left empty then this will start at 0</p>
            </div>
            <div className="request_item_flex">
              <p>Set price increment</p>
              <Input type="number" name="bidIncrement" onChange={handleRequestInput} />
              <p>Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
