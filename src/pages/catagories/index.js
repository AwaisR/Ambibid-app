import React, { useState, useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import Scrollspy from 'react-scrollspy';
import './catagerios.css';
import { Layout, Button, Spin } from 'antd';
import Section from './Section';
import { Pagetitles } from './CatagoriesTitles';
import { LeftOutlined } from '@ant-design/icons';
import DownlodSection from '../homepage/DownlodSection';
import axios from 'axios';
const { Content } = Layout;

const Catagories = () => {
  const [mobileView, setMobielView] = useState(false);
  const [categories, setCatgories] = useState([]);
  const [loading, setLoading] = useState(true);
  const Temp = () => {
    return <div style={{ display: 'none' }}></div>;
  };
  useEffect(() => {
    axios
      .post('https://us-central1-amibid-24a48.cloudfunctions.net/default-getCategories-default', {
        data: {},
      })
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setLoading(false);
            setCatgories(data.categories);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
  }, []);
  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background">
          {loading && (
            <Spin
              size="large"
              style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
            />
          )}
          <div className="catagories_outer main-cat">
            <div className="catagories_nav_mobile ">
              <Button onClick={() => setMobielView(!mobileView)}>
                <LeftOutlined />
                All Catagories
              </Button>
              {mobileView && (
                <>
                  <div className="catagores_nav_scroll">
                    <Scrollspy
                      className="scrollspy"
                      items={[
                        'section-1',
                        'section-2',
                        'section-3',
                        'section-4',
                        'section-5',
                        'section-6',
                        'section-7',
                        'section-8',
                        'section-9',
                        'section-10',
                        'section-11',
                        'section-12',
                        'section-13',
                        'section-14',
                        'section-15',
                        'section-16',
                      ]}
                      rootEl={'.catagores_main'}
                      currentClassName="active"
                      offset={-3}
                    >
                      {categories &&
                        categories.map((title, i) => (
                          <li key={i} onClick={() => setMobielView(!mobileView)}>
                            <a href={`#section-${i + 1}`}>{title.name}</a>
                          </li>
                        ))}
                    </Scrollspy>
                  </div>
                  {mobileView && (
                    <div style={{ display: mobileView ? 'none' : '' }} className={'catagores_main'}>
                      {categories &&
                        categories.map((title, i) => (
                          <Temp title={title} sectionId={`section-${i + 1}`} key={i} />
                        ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="catagores_nav">
              <h3>All Categories</h3>
              <div className="catagores_nav_scroll">
                <Scrollspy
                  className="scrollspy"
                  items={[
                    'section-1',
                    'section-2',
                    'section-3',
                    'section-4',
                    'section-5',
                    'section-6',
                    'section-7',
                    'section-8',
                    'section-9',
                    'section-10',
                    'section-11',
                    'section-12',
                    'section-13',
                    'section-14',
                    'section-15',
                    'section-16',
                  ]}
                  rootEl={'.catagores_main'}
                  currentClassName="active"
                  offset={-3}
                >
                  {categories &&
                    categories.map((title, i) => (
                      <li key={i}>
                        <a href={`#section-${i + 1}`}>{title.name}</a>
                      </li>
                    ))}
                </Scrollspy>
              </div>
            </div>
            {!mobileView && (
              <div className={'catagores_main'}>
                {categories &&
                  categories.map((item, i) => (
                    <Section
                      title={item.name}
                      sectionId={`section-${i + 1}`}
                      key={i}
                      // subCatId={item1.id}
                      // parentId={item1.parentId}
                      itemSpecificsForm={item.subCategories}
                    />
                  ))}
              </div>
            )}
          </div>
          <DownlodSection />
        </Layout>
      </PageLayout>
    </>
  );
};
export default Catagories;
