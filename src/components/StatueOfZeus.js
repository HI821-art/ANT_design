import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '435 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Олімпія, Греція' },
  { key: '3', attribute: 'Архітектор', value: 'Фідій' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];


const StatueOfZeus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Статуя Зевса</h4>
      <div className="image-container">
        <img alt="Statue of Zeus" src="https://chydesa-mira.ru/wp-content/uploads/2015/12/%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%8F-%D0%97%D0%B5%D0%B2%D1%81%D0%B0-%D0%B2-%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B8.jpg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Статуя Зевса — одна з найвідоміших скульптур античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про статую Зевса" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Статуя Зевса була знищена в середньовіччі...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default StatueOfZeus;
