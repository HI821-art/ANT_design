import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '600 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Вавилон, Ірак' },
  { key: '3', attribute: 'Архітектор', value: 'Не відомо' },
];


const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const HangingGardens = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <h4>Підвісні сади</h4>
      <div className="image-container">
        <img alt="Hanging Gardens" src="https://3.bp.blogspot.com/-yDY55aoDflg/WAyJJijSGiI/AAAAAAAAABw/luoa3Z-pxgIGVd8Yym2hfSMCP7t2PkePQCLcB/w1200-h630-p-k-no-nu/jardines-colgantes-babilonia-L-C3_MKL.jpeg" width='80%' height='auto' />
      </div>
      <Card>
        <p>Підвісні сади Вавилона — одне з найбільш загадкових чудес світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Підвісні сади" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Про існування садів досі ведуться дискусії...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default HangingGardens;
