import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import AppRoutes from './components/routes';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/pyramid">Піраміда Хеопса</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/zeus-statue">Статуя Зевса</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/hanging-gardens">Висячі сади Семіраміди</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/temple-of-artemis">Храм Артеміди</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/mausoleum">Мавзолей у Галікарнасі</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/colossus-of-rhodes">Колос Родоський</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/lighthouse-of-alexandria">Александрійський маяк</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <AppRoutes />
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
