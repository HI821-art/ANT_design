// src/pages/TempleOfArtemis.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '550 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Ефес, Туреччина' },
  { key: '3', attribute: 'Архітектор', value: 'Херсіфрон' },
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
      <Card
        title="Храм Артеміди"
        bordered={false}
        cover={<img alt="Temple of Artemis" src="/assets/images/temple_of_artemis.jpg" />}
      >
        <p>Храм Артеміди був одним із найбільших храмів стародавнього світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Храм Артеміди" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Храм був присвячений Артеміді, богині полювання...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[37.9497, 27.363]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[37.9497, 27.363]}>
          <Popup>Храм Артеміди знаходився тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TempleOfArtemis;
