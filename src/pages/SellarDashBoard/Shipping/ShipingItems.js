import React from 'react';
import { Typography, Table } from 'antd';
import './shippingTable.css';
const { Title, Text } = Typography;
export default function ShipingItems({ tittle, text, dataSource, columns, addClass }) {
  return (
    <div className={`shipping_table ${addClass}`}>
      <Title level={5}>{tittle}</Title>
      {text && <Text className="table_main_text">{text}</Text>}
      <Table
        columns={columns}
        rowClassName={'shipping_table_row'}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: true }}
      />
    </div>
  );
}
