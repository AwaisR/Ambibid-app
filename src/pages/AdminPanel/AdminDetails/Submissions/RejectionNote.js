import React from 'react'
import { Typography, Input, Space, Button, Row, Col, Select } from 'antd';
import "./Header.css";
import { Link } from 'react-router-dom';
const { Title, Text } = Typography;

const { TextArea } = Input;

export default function RejectionNote() {
    console.log("yesssssssssssss");
    return (
        <div>
    <div className="buyer_header active_header">
        <Row>
          <Col span={8}>
            <div className="buyer_header_left">
              <Title level={5}>Item No. 9i1230312</Title>
            </div>
          </Col>
        </Row>
      </div>
      <div className="buyer_header active_header">
        <div className="rejection_note_inner">

        <p>Leave a rejection note</p>
        <TextArea rows={8} placeholder="Let the seller know why their item has been rejected and what they could 
do to relist it" />
        <p className="text-right">2000 characters left</p>
        </div>
      </div>
      <div className="rejection_btn">
          <Link>Back</Link>
          <Button>Submit</Button>
      </div>
        </div>
    )
}
