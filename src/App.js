import {
  Layout,
  Typography,
  Tabs,
  Space,
  Button,
  Radio,
  Input,
  Select,
  Table,
} from 'antd';
import {
  PlusOutlined,
  DownloadOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Header from './components/Header';
import 'antd/dist/antd.less';
import data from './assets/data.json';

const columns = [
  {
    title: 'División',
    dataIndex: 'division',
    key: 'division',
    filters: [
      { text: 'CEO ', value: 'CEO' },
      { text: 'Mandu-Corp', value: 'Mandu-Corp' },
      { text: 'Growth', value: 'Growth' },
      { text: 'Strategy', value: 'Strategy' },
    ],
    onFilter: (value, record) => record.division.indexOf(value) === 0,
    sorter: (a, b) => a.division.length - b.division.length,
  },
  {
    title: 'División Superior',
    dataIndex: 'division-sup',
    key: 'division-sup',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
  },
  {
    title: 'Colaboradores',
    dataIndex: 'colaboradores',
    key: 'colaboradores',
  },
  {
    title: 'Nivel',
    dataIndex: 'nivel',
    key: 'nivel',
    filters: [
      { text: '1', value: 1 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '5', value: 5 },
    ],
    onFilter: (value, record) => record.nivel === value,
    sorter: (a, b) => a.nivel - b.nivel,
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivisiones',
    key: 'subdivisiones',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
  },
  {
    title: 'Embajadores',
    dataIndex: 'embajadores',
    key: 'embajadores',
  },
];

const rowSelection = {};

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content style={{ backgroundColor: 'white', padding: '0 25px' }}>
        <Typography.Title level={2}>Organización</Typography.Title>
        <div>
          <Button type="primary" icon={<PlusOutlined />} size={'large'} />
          <Button type="primary" icon={<UploadOutlined />} size={'large'} />
          <Button type="primary" icon={<DownloadOutlined />} size={'large'} />
        </div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Divisiones" key="1">
            <section>
              <Space>
                <Radio.Group value={'listado'}>
                  <Radio.Button value="listado">Listado</Radio.Button>
                  <Radio.Button value="arbol">Árbol</Radio.Button>
                </Radio.Group>
                <Select
                  placeholder="Columnas"
                  optionFilterProp="children"
                ></Select>
                <Input.Search placeholder="Buscar" style={{ width: 200 }} />
              </Space>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={{ current: 1, pageSize: 12 }}
                bordered
              />
            </section>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Colaboradores" key="2">
            <p>Otro Panel</p>
          </Tabs.TabPane>
        </Tabs>
      </Layout.Content>
    </Layout>
  );
}

export default App;
