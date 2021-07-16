import { Button, Dropdown, Avatar, Badge, Menu } from 'antd';
import {
  DownOutlined,
  QuestionCircleFilled,
  BellFilled,
} from '@ant-design/icons';
import logo from '../assets/logo.png';
import '../styles/Header.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Item</a>
    </Menu.Item>
  </Menu>
);

function Header() {
  return (
    <header className="header-container">
      <div>
        <img src={logo} alt="Logo Mandu" />
        <Button>Dashboard</Button>
        <Button>Organización</Button>
        <Dropdown overlay={menu} trigger={['click']}>
          <button onClick={(e) => e.preventDefault()}>
            Modelos <DownOutlined />
          </button>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <button onClick={(e) => e.preventDefault()}>
            Seguimiento <DownOutlined />
          </button>
        </Dropdown>
      </div>
      <div>
        <Button type="primary" icon={<QuestionCircleFilled />} size={'large'} />
        <Badge size={'small'} count={3}>
          <BellFilled />
        </Badge>
        <Avatar />
        <Dropdown overlay={menu} trigger={['click']}>
          <button onClick={(e) => e.preventDefault()}>
            Administrator <DownOutlined />
          </button>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
