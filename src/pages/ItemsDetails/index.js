import React, { useState, useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import Premium from './Premium';
import RecommendSlider from '../homepage/RecommendSlider';
import SellTimeLess from '../homepage/SellTimeLess';
import RecentlySlider from '../homepage/RecentlySlider';
import BuySlider from '../homepage/BuySlider';
import { Button, Layout } from 'antd';
import '../homepage/home.css';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';
export default function CurrentItemDetails() {
  const params = useParams();
  const history = useHistory();
  const type = history.location.pathname.split('/')[3];
  const [curentItemData, setCurentItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemId = params.id.split(':')[1];
  const itemFlag = itemId.split('/')[1];
  const getAuction = (id) => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-getAuctionItemById-default',
        {
          data: {
            uid: localStorage.getItem('uid'),
            itemId: id ? id : itemId,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result;
          if (status.status === 200) {
            setLoading(false);
            setCurentItemData(status.data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const getRecomended = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-getAuctionItemById-default',
        {
          data: {
            uid: localStorage.getItem('uid'),
            itemId: itemId,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result;
          if (status.status === 200) {
            setLoading(false);
            setCurentItemData(status.data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  const getBuyer = () => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-getBuyNowItemById-default',
        {
          data: {
            uid: localStorage.getItem('uid'),
            itemId: itemId,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result;
          if (status.status === 200) {
            setLoading(false);
            setCurentItemData(status.data);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  };
  useEffect(() => {
    if (type === 'auction') {
      getAuction();
    } else if (type === 'recommended') {
      getRecomended();
    } else if (type === 'buyer') {
      getBuyer();
    }
  }, []);
  return (
    <div>
      <PageLayout>
        {loading && (
          <Spin
            style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
            size="large"
          />
        )}
        <Layout className="site-layout-background">
          <Premium
            curentItemData={curentItemData && curentItemData}
            itemId={itemId}
            getAuction={getAuction}
            type={type}
          />
          <RecommendSlider />
          <SellTimeLess />
          <RecentlySlider />
          <BuySlider />
        </Layout>
      </PageLayout>
    </div>
  );
}
