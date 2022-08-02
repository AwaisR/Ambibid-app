import React, { useState, useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import './catagerios.css';
import './CatagoriesSideBar.css';
import { Layout, Button, Spin } from 'antd';
import CatagoriesPagination from './CatagoriesPagination';
import CatagoriesSideBar from './CatagoriesSideBar';
import CatagoriesHeader from './CatagoriesHeader';
import { useLocation, useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Content } = Layout;

export default function CatagoriesDetails() {
  let location = useLocation();
  let { id } = useParams();
  const [mobileView, setMobielView] = useState(false);
  const [categories, setCatgories] = useState([]);
  const [gridView, setGridView] = useState(false);
  const [subCatData, setSubCatData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const subCatId = id.split(':')[1];
  console.log('location.state', location.state);
  console.log('location.parentId', location.parentId);

  useEffect(() => {
    const subCatId = id.split(':')[1];
    axios
      .post(
        'https://us-central1-amibid-24a48.cloudfunctions.net/default-getItemsBySubCategory-default',
        {
          data: {
            subCategoryId: subCatId,
            limit: 20,
            offset: 0,
          },
        },
      )
      .then(
        (response) => {
          const status = response.data.result.status;
          const message = response.data.result.message;
          const data = response.data.result.data;
          if (status == 200) {
            setSubCatData(data);
            setLoading(false);
            // setCatgories(data.categories);
          }
        },
        (error) => {
          console.log('error', error);
        },
      );
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
  }, [id]);
  const handleChangeView = (View) => {
    if (View === 'Normal View') setGridView(false);
    else setGridView(true);
  };

  return (
    <>
      <PageLayout>
        <Layout className="site-layout-background mbile_bg">
          {loading && (
            <Spin
              size="large"
              style={{ position: 'absolute', top: '50%', right: '50%', left: '50%', zIndex: '999' }}
            />
          )}
          <div className="catagories_outer ">
            <div className="catagories_nav_mobile">
              <Button onClick={() => setMobielView(!mobileView)}>
                <LeftOutlined />
                All Catagories
              </Button>
              {mobileView && <CatagoriesSideBar Active={location.state} />}
            </div>

            <div className="catagores_nav catagory_side_bar">
              <CatagoriesSideBar
                Active={location.state}
                categories={categories}
                parentId={location.parentId}
              />
            </div>
            {!mobileView && (
              <div className="catagores_main catagories-pagenation">
                <CatagoriesHeader
                  title={location.state}
                  gridView={gridView}
                  handleChangeView={handleChangeView}
                  subCatData={subCatData}
                />
                <CatagoriesPagination gridView={gridView} subCatData={subCatData} />
              </div>
            )}
          </div>
        </Layout>
      </PageLayout>
    </>
  );
}
