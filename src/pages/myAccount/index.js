import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { Layout } from 'antd';
import MyAccount from './MyAccount';
export default function index() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background shipping_bg">
          <MyAccount />
        </Layout>
      </PageLayout>
    </div>
  );
}
