import React, { useState, useEffect } from 'react';
import { Col, Row, Image, Typography, Pagination } from 'antd';
import Neckles from '../../assests/neckl.png';
const { Title, Paragraph } = Typography;
import Countdown from './Countdown';
import moment from 'moment';
const pageSize = 6;
export default function CatagoriesGridView({ Pagetitles }) {
  const [current, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  useEffect(() => {
    setTotalPage(Pagetitles.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);
  const getDateYears = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format();
      return date;
    }
  };
  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
  return (
    <div className="catagories_grid">
      <Row>
        {Pagetitles?.map(
          (data, index) =>
            index >= minIndex &&
            index < maxIndex && (
              <Col xs={24} sm={12} md={8} xl={8} xxl={8} key={index}>
                <div className="catagories_grid_item">
                  <div className="grid_item_img">
                    <Image src={Neckles} preview={false} />
                  </div>
                  <div className="grid_item_text">
                    <Title level={5}>{data.itemName}</Title>
                    <Title level={5}>£{data.price}</Title>
                    <div className="grid_item_value">
                      {data.listAsAuction ? (
                        <p>
                          <Countdown
                            date={getDateYears(
                              data.auctionStartTime && data.auctionStartTime._seconds,
                            )}
                          />
                        </p>
                      ) : (
                        ''
                      )}
                      {data.listAsAuction ? <Paragraph>3 bids</Paragraph> : ''}
                    </div>
                  </div>
                </div>
              </Col>
            ),
        )}
      </Row>
      <Pagination
        pageSize={pageSize}
        current={current}
        total={50}
        onChange={handleChange}
        className="pagination"
        style={{ bottom: '50px', left: '50%', position: 'absolute' }}
      />
    </div>
  );
}
