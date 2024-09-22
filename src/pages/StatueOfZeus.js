// src/pages/StatueOfZeus.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '435 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Олімпія, Греція' },
  { key: '3', attribute: 'Архітектор', value: 'Фідій' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const StatueOfZeus = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <Card
        title="Статуя Зевса в Олімпії"
        bordered={false}
        cover={<img alt="Statue of Zeus" src="/assets/images/statue_of_zeus.jpg" />}
      >
        <p>Статуя Зевса була однією з найвеличніших скульптур стародавнього світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Статую Зевса" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Статуя Зевса була виготовлена із золота та слонової кістки...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[37.6379, 21.6308]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[37.6379, 21.6308]}>
          <Popup>Статуя Зевса знаходилася тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default StatueOfZeus;
