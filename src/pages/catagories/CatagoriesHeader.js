import React from 'react';
import './catgoriesHeader.css';
import { Typography, Select } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function CatagoriesHeader({ title, gridView, handleChangeView, subCatData }) {
  return (
    <div>
      <div className="catagerios_menu catagories_main_head">
        <div className="main_head_left">
          <Title level={5}>{`Results for “${title}”`}</Title>
          <p>Showing {subCatData && subCatData.length} results</p>
        </div>
        <div className="main_head_right">
          <Select
            defaultValue="Auctions & Buy it now"
            className="catagories_drp"
            onChange={handleChange}
          >
            <Option value="jack">Auctions & Buy it now</Option>
            <Option value="lucy">Auctions only</Option>

            <Option value="Yiminghe">Buy it now only</Option>
          </Select>
          <Select
            defaultValue="Sort by relevance"
            className="catagories_drp"
            onChange={handleChange}
          >
            <Option value="jack">Auctions & Buy it now</Option>
            <Option value="lucy">Auctions only</Option>

            <Option value="Yiminghe">Buy it now only</Option>
          </Select>
          <UnorderedListOutlined
            className={!gridView ? 'menu_icon active_grid_icon' : 'menu_icon'}
            onClick={() => handleChangeView('Normal View')}
          />
          <AppstoreOutlined
            className={gridView ? 'menu_icon active_grid_icon' : 'menu_icon'}
            onClick={() => handleChangeView('Grid View')}
          />
        </div>
      </div>
    </div>
  );
}
