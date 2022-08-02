import React from 'react';
import Header from './Header';
import ShipingItems from '../MyOrders/ShipingItems';
import './index.css';
import { Typography, Image, Button, Popover } from 'antd';
import StatusIcon from '../../../assests/images/Icon material-speaker-notes.png';
const { Paragraph, Text, Title } = Typography;

const Unsold = () => {
  const content = (
    <div>
      <Title level={4}>Expert’s note</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum
      </Paragraph>
    </div>
  );
  const columns = [
    {
      title: 'Item',
      dataIndex: 'Item',
      key: 'Item',
      render: (text) => (
        <div className="table_item_image">
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <p>Golden earrings antique</p>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text) => (
        <div className="table_item">
          <Text>Processing</Text>
        </div>
      ),
    },
    {
      title: 'Expert’s note ',
      dataIndex: 'Expert’s note .',
      key: 'Expert’s note .',
      render: (tags) => (
        <div className="table_tracking">
          <Text>
            The buyer did not pay for the item on time. You must….
            <Popover content={content} trigger="click" className="unsold-popover">
              <Image preview={false} src={StatusIcon} addClass="unsold-table" />
            </Popover>
          </Text>
        </div>
      ),
    },
    {
      title: 'Action required',
      dataIndex: 'Action required.',
      key: 'Action required.',
      render: (tags) => (
        <div className="table_tracking">
          <Button>Relist</Button>
        </div>
      ),
    },
  ];

  const datas = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,

      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key:
        '3                                                                                                                                                                                                                                                                                                                                                                                                            ',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
  ];
  return (
    <>
      <Header />
      <ShipingItems columns={columns} dataSource={datas} addClass="Unsold-table" />
    </>
  );
};
export default Unsold;
