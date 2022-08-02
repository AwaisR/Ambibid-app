import React from 'react';
import PageLayout from '../../../../layout/PageLayout';
import './thanksub.css';
import { Typography, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export default function SunmitDisputes() {
  return (
    <div>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="sumbit_outer">
            <div className="sumbit_info">
              <Title level={5}>Your dispute form has been submitted.</Title>
              <Text>
                We’ll do our best to hear both sides of the story and find the best solution for our
                customers. Please bare with us as it may take up to 48 hours to get a response from
                us.
              </Text>
            </div>
            <div className="submint_button">
              <Button>
                <Link to="/List-items/Catagory">Purchase history</Link>
              </Button>
              <Text>
                <Link to="/sellar-dashboard">Go to ‘My account’</Link>
              </Text>
            </div>
          </div>
        </Layout>
      </PageLayout>
    </div>
  );
}
