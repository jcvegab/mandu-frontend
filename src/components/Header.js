import {
  Layout,
  Menu,
  Button,
  Badge,
  Dropdown,
  Avatar,
  Space,
  Divider,
} from 'antd';
import {
  DownOutlined,
  QuestionCircleFilled,
  BellFilled,
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import logo from '../assets/logo.png';
import logoBox from '../assets/logo_box.png';
import '../styles/Header.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Item</a>
    </Menu.Item>
  </Menu>
);

const PortfolioSvg = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8.80001 11.1999H7.20001C6.76001 11.1999 6.40001 10.8399 6.40001 10.3999H0.808014V13.5999C0.808014 14.4799 1.52801 15.1999 2.40801 15.1999H13.6C14.48 15.1999 15.2 14.4799 15.2 13.5999V10.3999H9.60001C9.60001 10.8399 9.24001 11.1999 8.80001 11.1999Z"
      fill="white"
    />
    <path
      d="M14.4 3.99987H11.2C11.2 2.23187 9.768 0.799866 8 0.799866C6.232 0.799866 4.8 2.23187 4.8 3.99987H1.6C0.72 3.99987 0 4.71987 0 5.59987V7.99987C0 8.88787 0.712 9.59987 1.6 9.59987H6.4V8.79987C6.4 8.35987 6.76 7.99987 7.2 7.99987H8.8C9.24 7.99987 9.6 8.35987 9.6 8.79987V9.59987H14.4C15.28 9.59987 16 8.87987 16 7.99987V5.59987C16 4.71987 15.28 3.99987 14.4 3.99987ZM6.4 3.99987C6.4 3.11987 7.12 2.39987 8 2.39987C8.88 2.39987 9.6 3.11987 9.6 3.99987H9.592H6.392H6.4Z"
      fill="white"
    />
  </svg>
);

const PortfolioIcon = (props) => <Icon component={PortfolioSvg} {...props} />;

function Header() {
  return (
    <Layout.Header className="header">
      <Space className="header__container" split={<Divider type="vertical" />}>
        <img src={logo} alt="Logo Mandu" />
        <Button type="text" style={{ color: 'white' }}>
          Dashboard
        </Button>
        <Button type="text" style={{ color: 'white' }}>
          Organización
        </Button>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="text" style={{ color: 'white' }}>
            Modelos <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="text" style={{ color: 'white' }}>
            Seguimiento <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
      <Space className="header__container">
        <Space split={<Divider type="vertical" />}>
          <Button type="link" icon={<PortfolioIcon />} />
          <Button
            type="link"
            icon={<QuestionCircleFilled style={{ color: 'white' }} />}
          />
          <Button
            type="link"
            icon={
              <Badge size="small" count={3}>
                <BellFilled style={{ color: 'white' }} />
              </Badge>
            }
          />
          <div>
            <Avatar />
            <Dropdown overlay={menu} trigger={['click']}>
              <Button type="text" style={{ color: 'white' }}>
                Administrador <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </Space>
        <img src={logoBox} alt="Logo Mandu Box" />
      </Space>
    </Layout.Header>
  );
}

export default Header;
