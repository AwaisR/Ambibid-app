import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Rate, Input, Button } from 'antd';
import './leaveReply.css';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
const { Text } = Typography;
const { TextArea } = Input;

const LeaveReply = () => {
  let history = useHistory();
  let location = useLocation();
  const id = location.pathname.split('/')[2].split(':')[1];
  console.log('id', id);
  const [value, setValue] = useState(5);
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [reviewData, setReviewData] = useState({
    title: '',
    rating: 5,
    review: '',
  });
  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeReview = (value) => {
    console.log('value', value);
    setValue(value);
    setReviewData({
      ...reviewData,
      rating: value,
    });
  };
  const { title, rating, review } = reviewData;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-reviewItem-default', {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          itemId: id,
          rating,
          title,
          review,
          // uid: localStorage.getItem('uid'),
          // itemId: 'y7xi5kLBgwq4nBVw0iCP',
          // rating: 3,
          // title: 'title',
          // review: 'my review',
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          if (status == 200) {
            history.push('/thnks-reviews');
          }
          if (status == 400) {
            // dispatch({
            //   type: AccountConst.ADD_CARD_SUCCESS,
            //   payload: message,
            // });
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  return (
    <>
      <Layout>
        <div className="leave_outer">
          <div className="leave_outer_main">
            <Row>
              <div className="leave_head">
                <Row>
                  <Col lg={12} sm={24} xs={24}>
                    <Text>Golden earrings antique</Text>
                    <Text>Seller: abi_28y38219</Text>
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <Text className="text_right">Order No. #1937219080</Text>
                  </Col>
                </Row>
              </div>
              <div className="rate_text">
                <Text>Rate this seller out of 5</Text>
                <span>
                  <Rate tooltips={desc} onChange={handleChangeReview} value={value} />
                  {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>
              </div>
              <div className="review_field">
                <Text>Review title</Text>
                <Input
                  placeholder="Enter the title of your review"
                  name="title"
                  onChange={handleChange}
                  value={title}
                />
                <Text className="text_right">{90 - title.length} characters left</Text>
              </div>
              <div className="review_textarea">
                <Text>Review</Text>
                <TextArea
                  rows={8}
                  placeholder="Enter your seller review"
                  onChange={handleChange}
                  name="review"
                  value={review}
                />
                <Text className="text_right">{2000 - review.length} characters left</Text>
              </div>
              <div className="leave_btn">
                <Button onClick={handleSubmit}>Leave a review</Button>
              </div>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default LeaveReply;
