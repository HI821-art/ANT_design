import React, { useState } from 'react';
import { Card, Table, Button, Modal } from 'antd';
import "../App.css";

const dataSource = [
  { key: '1', attribute: 'Дата побудови', value: '280 р. до н.е.' },
  { key: '2', attribute: 'Місце розташування', value: 'Олександрія, Єгипет' },
  { key: '3', attribute: 'Архітектор', value: 'Сосіген' },
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
      <h4>Александрійський маяк</h4>
      <div className="image-container">
        <img alt="Lighthouse of Alexandria" src="https://th.bing.com/th/id/R.7eeacee3097d9480994da879928616cd?rik=%2fi0q%2fkGbQiXwaA&riu=http%3a%2f%2fcdn.mapme.club%2fimages%2f14176%2f14176-1.jpg&ehk=jqP%2b1KwGvkLn6uh9%2fD0%2bk3FMPlJpiYP92ktbtBi7m24%3d&risl=&pid=ImgRaw&r=0" width='80%' height='auto' />
      </div>
      <Card>
        <p>Александрійський маяк — один з найбільших маяків античності...</p>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Button type="primary" onClick={showModal}>
          Детальніше
        </Button>
        <Modal title="Деталі про Александрійський маяк" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Маяк був знищений у серії землетрусів...</p>
        </Modal>
      </Card>
    </div>
  );
};

export default LighthouseOfAlexandria;
