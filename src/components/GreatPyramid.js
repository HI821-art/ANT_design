import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '2560 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Гіза, Єгипет' },
  { key: '3', attribute: 'Архітектор', value: 'Хеміун' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const GreatPyramid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Піраміда Хеопса</h4>
      <div className="image-container">
        <img alt="Great Pyramid" src="https://pohcdn.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/the-pyramid-of-cheops_optimized.jpg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Піраміда Хеопса — єдине збережене чудо світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про піраміду Хеопса" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Піраміда Хеопса була побудована для фараона Хуфу...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default GreatPyramid;
