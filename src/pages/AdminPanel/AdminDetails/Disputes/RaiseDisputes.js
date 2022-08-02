import React, { useState } from 'react';
import { Layout, Typography, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import './RaiseDisputes.css';
const { Option } = Select;

const { Text, Title } = Typography;
const { TextArea } = Input;

const RaiseDisputes = () => {
  const [value, setValue] = useState(5);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Layout>
        <div className="raise_disputes_outer">
          <div className="raise_disputes_main">
            <div className="raise_disputes_head">
              <Title level={5}>New dispute</Title>
              <Text>
                <span>Raising a dispute</span>
                Please be as clear in explaining your issue as possible. We aim to get in touch
                within the next 48 hours regarding this.
              </Text>
            </div>
            <div className="rasie_drop">
              <Select defaultValue="Select item*" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="rasie_textarea">
              <Text>Message</Text>
              <TextArea
                rows={8}
                placeholder="Give as much information about your dispute as possible to help us resolve it."
              />
              <span className="text_right">2000 characters left</span>
            </div>
            <div className="rasie_btn">
              <Button>
                <Link to="/Submited-disputes">Submit</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default RaiseDisputes;
