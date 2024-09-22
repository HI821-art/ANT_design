// src/pages/MausoleumAtHalicarnassus.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Card
        title="Мавзолей в Галікарнасі"
        bordered={false}
        cover={<img alt="Mausoleum at Halicarnassus" src="/assets/images/mausoleum.jpg" />}
      >
        <p>Мавзолей в Галікарнасі — один з найбільших мавзолеїв античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Мавзолей" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Мавзолей був зруйнований внаслідок землетрусів у середньовіччі...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[37.0365, 27.4294]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[37.0365, 27.4294]}>
          <Popup>Мавзолей знаходився тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MausoleumAtHalicarnassus;
