import React, { useState, useEffect } from 'react';
import Header from './Header';
import './index.css';
import camera from '../../../../assests/images/Icon material-add-a-photo.png';
import attach from '../../../../assests/images/Icon metro-attachment.png';
import { Row, Col, Typography, Image, Button, Input, notification, Spin } from 'antd';
const { TextArea } = Input;
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
const DisputesDetails = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState('');
  const itemId = id.split(':')[1];
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {},
    });
  };
  const getDisputesComents = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminGetDisputeComments-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            itemDisputeId: itemId,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setLoading(false);
            setComments(data);
          }
          if (status === 400) {
            setLoading(false);
            openNotificationWithIcon('error', message);
            // openNotificationWithIcon('error', message);
          }
          // if (status == 400) {
          //   dispatch({
          //     type: MyAccountConst.ADD_CARD_SUCCESS,
          //     payload: message,
          //   });
          // }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  useEffect(() => {
    getDisputesComents();
  }, [itemId]);
  const getDateYears = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format('LLL');
      return date;
    }
  };
  const hanldeSubmit = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/admin2-adminReplyDispute-default',
        {
          data: {
            adminId: localStorage.getItem('adminId'),
            itemDisputeId: itemId,
            message: reply,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            getDisputesComents();
            setReply('');
            openNotificationWithIcon('success', message);
          }
          if (status === 400) {
            openNotificationWithIcon('error', message);
            // openNotificationWithIcon('error', message);
          }
          // if (status == 400) {
          //   dispatch({
          //     type: MyAccountConst.ADD_CARD_SUCCESS,
          //     payload: message,
          //   });
          // }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  return (
    <>
      {loading && (
        <Spin
          size="large"
          style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
        />
      )}
      <Header text={`Disputed item No. ${itemId} `} />
      {comments &&
        comments.disputeComments &&
        comments.disputeComments.map((item) => {
          if (item.userId) {
            return (
              <div className="disputed_item_wrap">
                <Row>
                  <Col span={24}>
                    <div className="disputed_item_head">
                      <div className="disputed_item_head-left">
                        <p>Buyer: said:</p>
                      </div>
                      <div className="disputed_item_head_right">
                        <p>{getDateYears(item.createdAt && item.createdAt._seconds)}</p>
                      </div>
                    </div>
                    <div className="disputed_item_outer">
                      <div className="disputed_item_info">
                        <p>{item.message}</p>
                      </div>
                      {/* <div className="disputed_item_list">
                  <Row>
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
                  </Row>
                </div> */}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          } else {
            return (
              <div className="disputed_item_wrap">
                <Row>
                  <Col span={24}>
                    <div className="disputed_item_head">
                      <div className="disputed_item_head-left">
                        <p>Amibid dispute manager said:</p>
                      </div>
                      <div className="disputed_item_head_right">
                        {/* <p>10/02/2021 at 21:23</p> */}
                        <p>{getDateYears(item.createdAt && item.createdAt._seconds)}</p>
                      </div>
                    </div>
                    <div className="disputed_item_outer dark_bg">
                      <div className="disputed_item_info">
                        <p>{item.message}</p>
                      </div>
                    </div>
                    {/* <div className="disputed_item_outer white_bg">
                      <div className="disputed_item_info">
                        <p>
                          Could the seller please provide images of the item prior to sale and also
                          an image of the receipt.
                        </p>
                      </div>
                    </div> */}
                  </Col>
                </Row>
              </div>
            );
          }
        })}

      <div className="disputed_form_wrap">
        <Row>
          <Col span={24}>
            <div className="disputed_text-area">
              <TextArea
                rows={4}
                value={reply}
                placeholder="Enter your reply here…"
                onChange={(e) => setReply(e.target.value)}
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
                <Button onClick={hanldeSubmit}>Reply</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default DisputesDetails;
