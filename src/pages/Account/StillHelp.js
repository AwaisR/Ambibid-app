import React from 'react';
import './style.css';
import { Row, Col, Image, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import humaaan from '../../assests/images/humaaan-5.png';
import humaaansStanding from '../../assests/images/humaaans-standing-3.png';
import humaaanSTanding from '../../assests/images/humaaans-standing-12.png';
import humaaans23 from '../../assests/images/humaaans-standing-23.png';
const { Title, Text } = Typography;

const StillHelp = () => {
  return (
    <>
      <div>
        <Title level={5}>Still need help? Get in touch</Title>
        <Button>
          <Link to="contact-us">Contact us</Link>
        </Button>
      </div>
    </>
  );
};
export default StillHelp;
