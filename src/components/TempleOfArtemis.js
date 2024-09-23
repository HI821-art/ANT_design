import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '550 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Ефес, Туреччина' },
  { key: '3', attribute: 'Архітектор', value: 'Херсіпп' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const TempleOfArtemis = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Храм Артеміди</h4>
      <div className="image-container">
        <img alt="Temple of Artemis" src="https://putidorogi-nn.ru/images/stories/evropa/hram_artemidy_3.jpg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Храм Артеміди був одним з найбільших храмів античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Храм Артеміди" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Храм був знищений внаслідок численних нападів...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default TempleOfArtemis;
