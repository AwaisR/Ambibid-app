import React from 'react';
import PageLayout from '../../../layout/PageLayout';
import LayoutInner from '../../../components/Layout/Layout';
import './thanksub.css';
import { Typography, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export default function ThankSubmit() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="sumbit_outer">
            <div className="sumbit_info">
              <Title level={5}>Thank you for submitting your item.</Title>
              <Text>
                Our team of experts are currently reviewing your submission. If your submission has
                been successful it will appear in your seller’s dashboard under ‘Active’. If for
                some reason your submission is not successful, you will find it under ‘unsold’ with
                a note from our experts.
              </Text>
            </div>
            <div className="submint_button">
              <Button>
                <Link to="/List-items/Catagory">List another item</Link>
              </Button>
              <Text>
                <Link to="/sellar-dashboard">Go to seller’s dashboard</Link>
              </Text>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
