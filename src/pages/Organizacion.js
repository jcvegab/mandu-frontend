import {
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
import '../styles/Organizacion.less';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndexDivisiones } from '../features/organizacion/organizacionSlice';

const columns = [
  {
    title: 'División',
    dataIndex: 'name',
    key: 'division',
    filters: [
      { text: 'CEO ', value: 'CEO' },
      { text: 'Mandu-Corp', value: 'Mandu-Corp' },
      { text: 'Growth', value: 'Growth' },
      { text: 'Strategy', value: 'Strategy' },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'División Superior',
    dataIndex: ['parent', 'name'],
    key: 'division-sup',
    filters: [
      { text: 'Dirección general', value: 'Dirección general' },
      { text: 'Producto', value: 'Producto' },
      { text: 'Operaciones', value: 'Operaciones' },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Colaboradores',
    dataIndex: 'colaboradores',
    key: 'colaboradores',
    sorter: (a, b) => a.colaboradores - b.colaboradores,
  },
  {
    title: 'Nivel',
    dataIndex: 'level',
    key: 'nivel',
    filters: [
      { text: '1', value: 1 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '5', value: 5 },
    ],
    onFilter: (value, record) => record.level === value,
    sorter: (a, b) => a.level - b.level,
  },
  {
    title: 'Subdivisiones',
    dataIndex: 'subdivisiones',
    key: 'subdivisiones',
    sorter: (a, b) => a.subdivisiones - b.subdivisiones,
  },
  {
    title: 'Embajadores',
    dataIndex: 'embajadores',
    key: 'embajadores',
  },
];

function Organizacion() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIndexDivisiones());
  }, []);

  const organizacionData = useSelector((state) => state.organizacion.items);

  const [state, setState] = useState({
    data: [],
    selectedTab: '1',
  });

  return (
    <>
      <Typography.Title level={2}>Organización</Typography.Title>
      <div>
        <Button type="primary" icon={<PlusOutlined />} size={'large'} />
        <Button type="primary" icon={<UploadOutlined />} size={'large'} />
        <Button type="primary" icon={<DownloadOutlined />} size={'large'} />
      </div>
      <Tabs
        defaultActiveKey="1"
        activeKey={state.selectedTab}
        onChange={(activeKey) => setState({ ...state, selectedTab: activeKey })}
      >
        <Tabs.TabPane className="tabs" tab="Divisiones" key="1">
          <section>
            <Space className="tabs-divisiones__filtros">
              <Radio.Group value={'listado'}>
                <Radio.Button value="listado">Listado</Radio.Button>
                <Radio.Button value="arbol">Árbol</Radio.Button>
              </Radio.Group>
              <Space>
                <Select
                  placeholder="Columnas"
                  optionFilterProp="children"
                  style={{ width: 153 }}
                >
                  {columns.map((column, key) => (
                    <Select.Option value={column.key} key={key}>
                      {column.title}
                    </Select.Option>
                  ))}
                </Select>
                <Input.Search placeholder="Buscar" style={{ width: 200 }} />
              </Space>
            </Space>
            <Table
              rowSelection={state.rowSelection}
              columns={columns}
              dataSource={organizacionData}
              pagination={{ current: 1, pageSize: 12 }}
              bordered
            />
          </section>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Colaboradores" key="2">
          <p>Otro Panel</p>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

export default Organizacion;
