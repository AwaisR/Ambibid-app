import React, { useState, useEffect } from 'react';
import { Col, Pagination, Row, Image, Typography, notification } from 'antd';
import './catagerios.css';
import './CatagoriesPagination.css';
import Neckles from '../../assests/neckl.png';
import { Pagetitles } from './CatagoriesTitles';
import CatagoriesGridView from './CatagoriesGridView';
import { EyeFilled } from '@ant-design/icons';
import Countdown from './Countdown';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
const pageSize = 7;

const CatagoriesPagination = ({ gridView, subCatData }) => {
  const [totalPage, setTotalPage] = useState(0);

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const getDateYears = (secs) => {
    if (secs) {
      const data = new Date(secs * 1000);
      const date = moment(data).format();
      return date;
    }
  };
  console.log('subCatData', subCatData);
  useEffect(() => {
    setTotalPage(Pagetitles.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);
  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
  const openNotificationWithIcon = (type, messages, onCloseMsg) => {
    notification[type]({
      message: type,
      description: messages,
      onClose: () => {
        // onCloseMsg;
        // dispatch(userActions.CloseErrorMsg());
      },
    });
  };
  const handleAddWatch = (id) => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-addItemToWatchList-default',
        {
          data: {
            uid: localStorage.getItem('uid'),
            itemId: id,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          if (status === 200) {
            openNotificationWithIcon('success', 'Item successfully added to your watchlist');
            // setAddwatchlistTrue(response.data.result.message);
          }
          if (status === 400) {
            openNotificationWithIcon('error', message);
          }
          console.log(response);
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  return (
    <>
      <ul className={gridView ? 'grid-view-bg' : 'detail-view'}>
        {!gridView ? (
          <>
            {subCatData?.map(
              (data, index) =>
                index >= minIndex &&
                index < maxIndex && (
                  <li key={data.id} style={{ lineHeight: '30px', fontWeight: '500' }}>
                    <div className="pagenation_outer">
                      <div className="pagintion_item">
                        <Row>
                          <Col xs={24} sm={8} md={8} xl={5} xxl={5} className="pagention_imge">
                            <Image src={Neckles} preview={false} />
                          </Col>
                          <Col xs={24} sm={16} md={16} xl={12} xxl={12} className="pagenition_text">
                            <h3>{data.itemName}</h3>
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
                            {data.listAsAuction ? <p>3 bids</p> : ''}

                            <p>
                              <strong>£{data.price}</strong>+ £20.00 delivery
                            </p>
                          </Col>
                        </Row>
                        <div className="add_watch" onClick={() => handleAddWatch(data.id)}>
                          <p>
                            <span>
                              <EyeFilled />
                            </span>
                            Add to watchlist
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ),
            )}
            <Pagination
              pageSize={pageSize}
              current={current}
              total={50}
              onChange={handleChange}
              className="pagination"
              style={{ bottom: '50px', left: '50%', position: 'absolute' }}
            />
          </>
        ) : (
          <CatagoriesGridView Pagetitles={subCatData} minIndex={minIndex} maxIndex={minIndex} />
        )}
      </ul>
    </>
  );
};
export default CatagoriesPagination;
