import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '280 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Родос, Греція' },
  { key: '3', attribute: 'Архітектор', value: 'Чарес' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const ColossusOfRhodes = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Колос Родоський</h4>
      <div className="image-container">
        <img alt="Colossus of Rhodes" src="https://pro-cikave.com.ua/wp-content/uploads/2022/04/11750981.jpg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Колос Родоський — одна з найбільших статуй античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Колос Родоський" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Статуя була знищена під час землетрусу...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default ColossusOfRhodes;
