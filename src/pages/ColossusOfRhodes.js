// src/pages/ColossusOfRhodes.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Card
        title="Колос Родоський"
        bordered={false}
        cover={<img alt="Colossus of Rhodes" src="/assets/images/colossus.jpg" />}
      >
        <p>Колос Родоський — величезна статуя бога Сонця Геліоса...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Колос Родоський" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Статуя була зруйнована під час землетрусу у 226 році до н.е...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[36.4470, 28.2340]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[36.4470, 28.2340]}>
          <Popup>Колос Родоський знаходився тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ColossusOfRhodes;
