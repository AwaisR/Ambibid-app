import React, { useState, useEffect } from 'react';
import Header from './Header';
import './index.css';
import camera from '../../../assests/images/Icon material-add-a-photo.png';
import attach from '../../../assests/images/Icon metro-attachment.png';
import { Row, Col, Typography, Image, Button, Input, notification } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyAccountAction } from '../../../store/myAccount/action';
import axios from 'axios';
const { TextArea } = Input;

const DisputesDetails = () => {
  const [message, setMessage] = useState('');
  let dispatch = useDispatch();
  const state = useSelector((state) => state.myAccountReducer);
  const { disputesComents } = state;

  let { id } = useParams();
  const itemID = id.split(':')[1];
  useEffect(() => {
    dispatch(MyAccountAction.getDisputesComments(itemID));
  }, []);
  const openNotification = (message, description) => {
    notification.open({
      message: message,
      description: description,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-replyDispute-default', {
        data: {
          uid: localStorage.getItem('uid'),
          // uid: '001',
          itemDisputeId: itemID,
          message,
        },
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          if (status == 200) {
            dispatch(MyAccountAction.getDisputesComments(itemID));
            setMessage('');
            openNotification('success', message);
            // history.push('/Submited-disputes');
          }
          if (status == 400) {
            openNotification('Error', message);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  return (
    <>
      <Header text={`Disputed item No. ${itemID}`} />
      <div className="disputed_item_wrap">
        <Row>
          <Col span={24}>
            <div className="disputed_item_head">
              <div className="disputed_item_head-left">
                <p>Buyer: Abi_2193 said:</p>
              </div>
              <div className="disputed_item_head_right">
                <p>10/02/2021 at 17:23</p>
              </div>
            </div>
            {disputesComents &&
              disputesComents.disputeComments &&
              disputesComents.disputeComments.map((item) => (
                <div className="disputed_item_outer">
                  <div className="disputed_item_info">
                    <p>{item.message}</p>
                  </div>
                  <div className="disputed_item_list">
                    {/* <Row>
                   <Col xs={8} sm={4} lg={4} xl={3}>
                     <div className="disputed_list_img">
                       <Image
                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         preview={false}
                       />
                     </div>
                   </Col>
                   <Col xs={8} sm={4} lg={4} xl={3}>
                     <div className="disputed_list_img">
                       <Image
                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         preview={false}
                       />
                     </div>
                   </Col>
                   <Col xs={8} sm={4} lg={4} xl={3}>
                     <div className="disputed_list_img">
                       <Image
                         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         preview={false}
                       />
                     </div>
                   </Col>
                 </Row> */}
                  </div>
                </div>
              ))}
          </Col>
        </Row>
      </div>

      <div className="disputed_item_wrap">
        <Row>
          <Col span={24}>
            <div className="disputed_item_head">
              <div className="disputed_item_head-left">
                <p>Amibid dispute manager said:</p>
              </div>
              <div className="disputed_item_head_right">
                <p>10/02/2021 at 21:23</p>
              </div>
            </div>
            <div className="disputed_item_outer dark_bg">
              <div className="disputed_item_info">
                <p>
                  Could the seller please provide images of the item prior to sale and also an image
                  of the receipt.
                </p>
              </div>
            </div>
            <div className="disputed_item_outer white_bg">
              <div className="disputed_item_info">
                <p>
                  Could the seller please provide images of the item prior to sale and also an image
                  of the receipt.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="disputed_form_wrap">
        <Row>
          <Col span={24}>
            <div className="disputed_text-area">
              <TextArea
                rows={4}
                placeholder="Enter your reply here…"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="disputed_form_btn">
              <div className="form_icon">
                <Image src={attach} preview={false} />
              </div>
              <div className="form_icon">
                <Image src={camera} preview={false} />
              </div>
              <div className="form_button">
                <Button onClick={handleSubmit}>Reply</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default DisputesDetails;
