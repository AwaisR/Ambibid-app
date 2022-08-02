import React from 'react';
import PageLayout from '../../layout/PageLayout';
import { Layout } from 'antd';
import SellarDashboard from './SellarDashboard';
export default function index() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background shipping_bg">
          <SellarDashboard />
        </Layout>
      </PageLayout>
    </div>
  );
}
