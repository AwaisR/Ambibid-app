import React from 'react';
import PageLayout from '../../../../layout/PageLayout';
import './thanksub.css';
import { Typography, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export default function ThnksReviewPage() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="sumbit_outer">
            <div className="sumbit_info">
              <Title level={5}>Thank you for your review.</Title>
              <Text>
                An honest review helps other buyers know more about the seller and helps the seller
                with their business practise too.
              </Text>
            </div>
            <div className="submint_button">
              <Button>
                <Link to="/List-items/Catagory">Purchase history</Link>
              </Button>
              <Text>
                <Link to="/my-account">Go to ‘My account’</Link>
              </Text>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
