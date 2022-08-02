import React from 'react';
import PageLayout from '../../../layout/PageLayout';
import { Layout } from 'antd';
import AdminMain from './AdminMain';
export default function index() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background shipping_bg">
          <AdminMain />
        </Layout>
      </PageLayout>
    </div>
  );
}
