import React from 'react';
import Header from './Header';
import './index.css';
import camera from '../../../assests/images/Icon material-add-a-photo.png';
import attach from '../../../assests/images/Icon metro-attachment.png';
import { Row, Col, Typography, Image, Button, Input } from 'antd';
const { TextArea } = Input;

const DisputesDetails = () => {
  return (
    <>
      <Header text="Disputed item No. 998290840" />
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
            <div className="disputed_item_outer">
              <div className="disputed_item_info">
                <p>
                  Hi there, there’s an issue with my product. It’s not as it should be etc. Please
                  refund me as I don’t need this hassle in my life.
                </p>
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
            </div>
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
              <TextArea rows={4} placeholder="Enter your reply here…" />
            </div>
            <div className="disputed_form_btn">
              <div className="form_icon">
                <Image src={attach} preview={false} />
              </div>
              <div className="form_icon">
                <Image src={camera} preview={false} />
              </div>
              <div className="form_button">
                <Button>Reply</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default DisputesDetails;
