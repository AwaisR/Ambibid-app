import React, { useState } from 'react';
import { Typography, Checkbox, Input, Menu, Dropdown } from 'antd';
import { Pagetitles } from './CatagoriesTitles';
import { PagetitlesHide } from './CatagoriesTitles';
import { PlusOutlined, DownOutlined, UpOutlined, MinusOutlined } from '@ant-design/icons';
import MenUsection from './MenUsection';
import './catagerios.css';
import './CatagoriesSideBar.css';
import Item from 'antd/lib/list/Item';
const { Title } = Typography;
const { SubMenu } = Menu;
const actionTittle = [
  'Material (2)',
  'Stone (5)',
  'Extras (2)',
  'Period (6)',
  'Technique(1)',
  'Signature (4)',
  'Binding (3)',
  'Edition (9)',
];
export default function CatagoriesSideBar({ Active, categories, parentId }) {
  console.log('location.parentId', parentId);
  const [show, setShow] = useState(true);
  const [changeIconIndex, setchangeIconIndex] = useState('');
  const [changeIcon, setChangeIcon] = useState(false);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleClick = (index) => {
    console.log('changeIconIndex', changeIconIndex);
    if (changeIconIndex) {
      setchangeIconIndex('');
    } else setchangeIconIndex(index);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Auctions & Buy it now
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Auctions only
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Buy it now only
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="mobile_view">
      <div className="conition_list ">
        <Title level={5}>Category</Title>
        {show
          ? categories &&
            categories.map((title, i) => (
              <>
                <div className="conition_item">
                  <Checkbox onChange={onChange} checked={title.id === parentId ? true : false}>
                    {title.name}
                  </Checkbox>
                </div>
              </>
            ))
          : categories &&
            categories.map((title, i) => (
              <>
                <div className="conition_item">
                  <Checkbox onChange={onChange} checked={title.id === parentId ? true : false}>
                    {title.name}
                  </Checkbox>
                </div>
              </>
            ))}
        <p onClick={() => setShow(!show)}>
          {show ? (
            <p style={{ color: '#1773D0' }}>
              Show More <DownOutlined />
            </p>
          ) : (
            <p style={{ color: '#1773D0' }}>
              Hide List <UpOutlined />
            </p>
          )}
        </p>
      </div>
      <div className="conition_list">
        <Title level={5}>Condition</Title>
        <div className="conition_item">
          <Checkbox onChange={onChange}> Used (47)</Checkbox>
        </div>
        <div className="conition_item">
          <Checkbox onChange={onChange}> Used (47)</Checkbox>
        </div>
        <div className="conition_item">
          <Checkbox onChange={onChange}> Used (47)</Checkbox>
        </div>
      </div>
      <div className="type_list">
        <Title level={5}>Type</Title>
        <div className="type_item">
          <Checkbox onChange={onChange}> Auction (47) </Checkbox>
        </div>
        <div className="type_item">
          <Checkbox onChange={onChange}> Buy it now (20)</Checkbox>
        </div>
      </div>
      <div className="price_list">
        <Title level={5}></Title>
        <Input placeholder="£ Enter Min." />
        <Input placeholder="£ Enter Max." />
      </div>
      <div className="dropdown_list">
        {actionTittle.map((title, i) => (
          <MenUsection
            title={title}
            i={i + 1}
            handleClick={handleClick}
            changeIconIndex={changeIconIndex}
            changeIcon={changeIcon}
          />
        ))}
      </div>
    </div>
  );
}
