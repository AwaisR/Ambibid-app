import React, { useEffect, useState } from 'react';
import './Header.css';
import { Button, Input } from 'antd';
import { Select } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { Option } = Select;
export default function NewSuport() {
  const [topics, setTopics] = useState([]);
  const [selectdId, setSelectedId] = useState('');
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminGetHelpTopics-default',
        {
          data: {
            adminId: 'qVw1BvihwHD6nazAqMTC',
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            console.log('data', data);
            setTopics(data);
            // openNotificationWithIcon('success', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  function handleChange(value) {
    setSelectedId(value);
  }
  return (
    <div>
      <div className="new-submishan active_header">
        <div className="suport-header">
          <p className="submishan-para">Select a category for your new article</p>
          <Select
            defaultValue="Select a support category"
            className="suport-center"
            onChange={handleChange}
          >
            {topics && topics.map((item) => <Option value={item.id}>{item.name}</Option>)}
          </Select>
        </div>
        <div className="btn-div">
          <Button className="back-btn">Back</Button>
          <Link to={`/admin-details/submishan/:${selectdId}`}>
            <Button className="con-btn">Continue</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
