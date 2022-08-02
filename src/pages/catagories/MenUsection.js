import React, { useEffect } from 'react';
import { Typography, Checkbox, Input, Menu, Dropdown } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const MenUsection = ({ title, i, handleClick, changeIconIndex, changeIcon }) => {
  return (
    <>
      <div className="dropdown_item" key={i} onClick={() => handleClick(i)}>
        <Menu defaultSelectedKeys={[i]} defaultOpenKeys={['sub1']} mode="inline">
          <SubMenu
            key={i}
            title={title}
            expandIcon={changeIconIndex === i ? <MinusOutlined /> : <PlusOutlined />}
          >
            <Menu.Item key="9">Option 1</Menu.Item>
            <Menu.Item key="9">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};
export default MenUsection;
