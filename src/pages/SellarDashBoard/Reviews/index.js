import React, { useEffect } from 'react';
import Header from './Header';
import './index.css';
import { Row, Col, Typography, Image, Button, Input } from 'antd';
import ReportIcon from '../../../assests/images/Icon material-report.png';
import ReactStars from 'react-rating-stars-component';
import { useSelector, useDispatch } from 'react-redux';
import { SellerActions } from '../../../store/SellerDashboard/action';
const { Title, Text, Paragraph } = Typography;

const Review = () => {
  const state = useSelector((state) => state.SellerReducer);
  const { Reviews } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SellerActions.getReviews());
  }, []);
  const firstExample = {
    size: 30,
    value: 5,
    edit: false,
  };
  return (
    <>
      <Header text="My reviews" />
      {/* <div className="disputed_item_wrap review">
        <Row>
          <Col span={24}>
            <div className="disputed_item_outer">
              <div className="disputed_item_info">
                <div className="review_rating">
                  <Paragraph>
                    <ReactStars {...firstExample} />
                  </Paragraph>
                  <Paragraph>Incredible item! Amazing seller</Paragraph>
                </div>
                <div className="review_item">
                  <Paragraph>Item No. #1937219080</Paragraph>
                </div>
              </div>
              <div className="review_text">
                <Paragraph>
                  Fantastic item, great seller. Would recommend to anyone and everyone. Fantastic
                  item, great seller. Would recommend to anyone Fantastic item, great seller. Would
                  recommend to anyone and everyone.Fantastic item, great seller. Would recommend to
                  anyone and everyone. Fantastic item, great seller. Would recommend to anyone and
                  everyone.
                </Paragraph>
              </div>
              <div className="reviewed_text">
                <Paragraph>Reviewed by Abi_912319</Paragraph>
              </div>
            </div>
            <div className="report_text">
              <Paragraph>Report Issue</Paragraph>
              <Image src={ReportIcon} preview={false} />
            </div>
          </Col>
        </Row>
      </div> */}
      {Reviews &&
        Reviews.map((review) => (
          <div className="disputed_item_wrap review">
            <Row>
              <Col span={24}>
                <div className="disputed_item_outer">
                  <div className="disputed_item_info">
                    <div className="review_rating">
                      <Paragraph>
                        <ReactStars size="30" value={review.rating} edit="false" />
                      </Paragraph>
                      <Paragraph>{review.item.itemName}</Paragraph>
                    </div>
                    <div className="review_item">
                      <Paragraph>Item No: {review.item.id}</Paragraph>
                    </div>
                  </div>
                  <div className="review_text">
                    <Paragraph>{review.review}</Paragraph>
                  </div>
                  <div className="disputed_item_list">
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
                  </div>
                  <div className="reviewed_text">
                    <Paragraph>Reviewed by {review.id}</Paragraph>
                  </div>
                </div>
                <div className="report_text">
                  <Paragraph>Report Issue</Paragraph>
                  <Image src={ReportIcon} preview={false} />
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
};
export default Review;
