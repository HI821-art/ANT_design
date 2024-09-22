// src/pages/GreatPyramid.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
      <Card
        title="Піраміда Хеопса"
        bordered={false}
        cover={<img alt="Great Pyramid" src="/assets/images/pyramid.jpg" />}
      >
        <p>Піраміда Хеопса — єдине збережене чудо світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про піраміду Хеопса" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Піраміда Хеопса була побудована для фараона Хуфу...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[29.9792, 31.1342]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[29.9792, 31.1342]}>
          <Popup>Піраміда Хеопса знаходиться тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GreatPyramid;
