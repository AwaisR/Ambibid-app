import React, { useState, useEffect } from 'react';
import { Button, Input, Select, notification } from 'antd';
import { useParams } from 'react-router-dom';
import './Header.css';
import axios from 'axios';
export default function Submishan() {
  let { id } = useParams();
  const [data, setData] = useState({
    question: '',
    answer: '',
  });
  const helpTopicId = id.split(':')[1];
  const { Option } = Select;
  const { TextArea } = Input;
  function handleChange(e) {
    setData({
      ...data,
      question: e.target.value,
    });
  }
  const handleChangeAns = (e) => {
    setData({
      ...data,
      answer: e.target.value,
    });
  };
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {},
    });
  };
  const handleSubmit = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminAddHelpQuestion-default',
        {
          data: {
            adminId: 'qVw1BvihwHD6nazAqMTC',
            helpTopicId: helpTopicId,
            question: data.question,
            answer: data.answer,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status === 200) {
            setData({
              question: '',
              answer: '',
            });
            openNotificationWithIcon('success', message);
            console.log('data', data);
            // setTopics(data);
            // openNotificationWithIcon('success', message);
          }
          if (status === 400) {
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
      <div className="suports-submision-main">
        <p>Title to be displayed above dropdown</p>
        <Input placeholder="Title" onChange={handleChange} value={data.question} />
        <TextArea
          rows={4}
          onChange={handleChangeAns}
          value={data.answer}
          placeholder="Enter your support article here"
        />
        <Button onClick={handleSubmit} className="submision-btn">
          Save
        </Button>
      </div>
    </div>
  );
}
