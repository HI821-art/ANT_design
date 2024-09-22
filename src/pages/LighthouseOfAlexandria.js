// src/pages/LighthouseOfAlexandria.js
import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '280 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Олександрія, Єгипет' },
  { key: '3', attribute: 'Архітектор', value: 'Сострат Кнідський' },
];

const columns = [
  { title: 'Атрибут', dataIndex: 'attribute', key: 'attribute' },
  { title: 'Значення', dataIndex: 'value', key: 'value' },
];

const LighthouseOfAlexandria = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <div>
      <Card
        title="Олександрійський маяк"
        bordered={false}
        cover={<img alt="Lighthouse of Alexandria" src="/assets/images/lighthouse_of_alexandria.jpg" />}
      >
        <p>Олександрійський маяк був одним із найвищих маяків стародавнього світу...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Олександрійський маяк" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Маяк служив орієнтиром для моряків, які прибували до Олександрії...</p>
        </Modal>
      </Card>
      
      <h3>Розташування на мапі:</h3>
      <MapContainer center={[31.2156, 29.9553]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[31.2156, 29.9553]}>
          <Popup>Олександрійський маяк знаходився тут.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LighthouseOfAlexandria;
