import React from 'react';
import './home.css';
import PageLayout from '../../layout/PageLayout';
import { Button, Layout } from 'antd';
import BannerSlider from './BannerSlider';
import ActionSlider from './ActionSlider';
import RecommendSlider from './RecommendSlider';
import SellTimeLess from './SellTimeLess';
import RecentlySlider from './RecentlySlider';
import BuySlider from './BuySlider';
import DiscoverSlider from './DiscoverSlider';
import AmibidWork from './AmibidWork';
import DownlodSection from './DownlodSection';
const { Content } = Layout;
export default function HomePage() {
  return (
    <PageLayout>
      <Layout className="site-layout-background">
        <BannerSlider />
        <ActionSlider />
        <RecommendSlider />
        <SellTimeLess />
        <RecentlySlider />
        <BuySlider />
        <DiscoverSlider />
        <AmibidWork />
        <DownlodSection />
      </Layout>
    </PageLayout>
  );
}
