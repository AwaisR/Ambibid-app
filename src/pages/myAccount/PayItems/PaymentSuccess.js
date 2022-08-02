import React from 'react';
import PageLayout from '../../../layout/PageLayout';
import { Layout, Typography, Button } from 'antd';
const { Title, Text } = Typography;

export default function PaymentSuccess() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="payment-success-outer">
            <Title level={5}>Your payment was successful!</Title>
            <Text>
              You can find your item in the ‘Purchase history’ section of your account. Once the
              seller has updated the shipping information, you’ll be able to see it there too.
            </Text>
            <Button>Purchase history</Button>
            <Text>Go to ‘My account’</Text>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
