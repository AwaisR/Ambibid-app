import React, { useState, useEffect } from 'react';
import './index.css';
import PageLayout from '../../layout/PageLayout';
import { Row, Col, Typography, Button, Image, Layout } from 'antd';
import HumainPic from '../../assests/images/A-Human-Sitting.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const { Title, Text } = Typography;

const BuyItems = () => {
  const [questionData, setQuestionData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-getHelpQuestions-default',
        {
          data: {},
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          if (status === 200) {
            setQuestionData(response.data.result.data.questions);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  console.log('questionData', questionData);
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background">
          <div className="support-center-outer">
            <div className="support-center_con buy_heading">
              <Title level={2}>We’re here to help.</Title>
              <Text onClick={() => history.push('/support-center')}>back to help desk</Text>
              <Row>
                <Col span={24}>
                  {questionData &&
                    questionData.map((ques) =>
                      ques.topicHelpQuestions.map((item) => (
                        // <Text className="buy_item_text">{item.answer}</Text>
                        <div
                          className="buy_item_text"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      )),
                    )}
                  {/* <Text className="buy_item_text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet.
                  </Text> */}
                  {/* <Text className="buy_item_text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet.
                  </Text> */}
                </Col>
              </Row>
            </div>
          </div>
          <div className="support_end_outer">
            <Title level={5}>Still need help? Get in touch</Title>
            <Button className="contact_btn">
              <Link to="contact-us">Contact us</Link>
            </Button>
          </div>
        </Layout>
      </PageLayout>
    </>
  );
};
export default BuyItems;
