import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '../../assests/images/2016-02_IMG_4900.jpg';
import LeftArow from '../../assests/leftArow.png';
import RightArow from '../../assests/rightArow.png';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
export default function BannerSlider() {
  const { t, i18n } = useTranslation();
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      >
        <img src={LeftArow} alt="arrow_left" />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      >
        <img src={RightArow} alt="arrow_left" />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="main_slider">
        <Slider {...settings}>
          <div className="slider_item">
            <img src={Banner} />
            <div className="slider_item_text">
              <h2>
                {t('sell-timeless')}
                <br /> <span> {t('jewellery')}</span> {t('onClick')} <br />
                {t('btn')}
              </h2>
              <p>
                Enjoy only 2.95% commission fee when you sell in Amibid auctions. <br />
                {t('start-selling')}
                <br /> {t('collectibles')}
              </p>
              <Button> {t('findMore')}</Button>
            </div>
          </div>
          <div className="slider_item">
            <img src={Banner} />
            <div className="slider_item_text">
              <h2>
                Sell items with incredibly low fees.
                <br /> <span> </span> <br />
              </h2>
              <p>
                <br />

                <br />
              </p>
              <Button>Sell now</Button>
            </div>
          </div>
          <div className="slider_item">
            <img src={Banner} />
            <div className="slider_item_text">
              <h2>
                Find special items curated by experts
                <br /> <span> </span> <br />
              </h2>
              <p>
                Whether you’re into jewellery, artworks, movie memorabilia or any other cool stuff,
                you’re sure to find something special here. <br />
                <br />
              </p>
              <Button> Discover more</Button>
            </div>
          </div>
          <div className="slider_item">
            <img src={Banner} />
            <div className="slider_item_text">
              <h2>
                Rediscover timeless antiques to decorate your space...
                <br /> <span> </span> <br />
              </h2>
              <p>
                Dealer, collector or interior designer, you may find the things you love in our{' '}
                <br />
                carefully selected categories spanning all periods and styles
                <br />
              </p>
              <Button> Browse Categories</Button>
            </div>
          </div>
          <div className="slider_item">
            <img src={Banner} />
            <div className="slider_item_text">
              <h2>
                Rediscover timeless antiques to decorate your space...
                <br /> <span> </span> <br />
              </h2>
              <p>
                Dealer, collector or interior designer, you may find the things you love in our
                <br />
                carefully selected categories spanning all periods and styles.
                <br />
              </p>
              <Button> Browse Categories</Button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
