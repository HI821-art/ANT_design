import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '350 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Галікарнас, Туреччина' },
  { key: '3', attribute: 'Архітектор', value: 'Сатирос та Фрарат' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const MausoleumAtHalicarnassus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Мавзолей в Галікарнасі</h4>
      <div className="image-container">
        <img alt="Mausoleum at Halicarnassus" src="https://1.bp.blogspot.com/-sT2vkOsGfXg/WAyLoQoeYGI/AAAAAAAAACI/mILiKQvnlag39yTPiUFsf0BFXIUlBPFHwCLcB/s1600/Mavzoley-v-Galikarnase.jpg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Мавзолей в Галікарнасі — один з найбільших мавзолеїв античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Мавзолей в Галікарнасі" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Мавзолей був знищений внаслідок землетрусів...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default MausoleumAtHalicarnassus;
