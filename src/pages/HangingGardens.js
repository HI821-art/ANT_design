// src/pages/HangingGardens.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Card
        title="Висячі сади Семіраміди"
        bordered={false}
        cover={<img alt="Hanging Gardens" src="/assets/images/hanging_gardens.jpg" />}
      >
        <p>Висячі сади Семіраміди — одне з семи чудес світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Висячі сади" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Достовірність їх існування досі під питанням...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[32.5373, 44.4207]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[32.5373, 44.4207]}>
          <Popup>Висячі сади знаходилися тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HangingGardens;
