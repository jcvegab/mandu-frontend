import { Layout } from 'antd';
// import { Layout, Tabs, Button, Pagination, Radio, Input, Select, Table } from 'antd';
// import {
//   PlusOutlined,
//   DownloadOutlined,
//   UploadOutlined,
// } from '@ant-design/icons';
import Header from './components/Header';
import 'antd/dist/antd.less';

// const columns = [
//   {
//     title: 'División',
//     dataIndex: 'name',
//     key: 'name',
//     filters: [
//       { text: 'Joe', value: 'Joe' },
//       { text: 'Jim', value: 'Jim' },
//     ],
//   },
//   {
//     title: 'División Superior',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//     filters: [
//       { text: 'London', value: 'London' },
//       { text: 'New York', value: 'New York' },
//     ],
//     ellipsis: true,
//   },
//   {
//     title: 'Colaboradores',
//     dataIndex: 'colaboradores',
//     key: 'colaboradores',
//     filters: [
//       { text: 'London', value: 'London' },
//       { text: 'New York', value: 'New York' },
//     ],
//   },
//   {
//     title: 'Nivel',
//     dataIndex: 'nivel',
//     key: 'nivel',
//     filters: [
//       { text: 'London', value: 'London' },
//       { text: 'New York', value: 'New York' },
//     ],
//   },
//   {
//     title: 'Subdivisiones',
//     dataIndex: 'subdivisiones',
//     key: 'subdivisiones',
//     filters: [
//       { text: 'London', value: 'London' },
//       { text: 'New York', value: 'New York' },
//     ],
//   },
//   {
//     title: 'Embajadores',
//     dataIndex: 'embajadores',
//     key: 'embajadores',
//     filters: [
//       { text: 'London', value: 'London' },
//       { text: 'New York', value: 'New York' },
//     ],
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// const rowSelection = {};

function App() {
  return (
    <Layout>
      <Header />
      {/* <div>
        <Button type="primary" icon={<PlusOutlined />} size={'large'} />
        <Button type="primary" icon={<UploadOutlined />} size={'large'} />
        <Button type="primary" icon={<DownloadOutlined />} size={'large'} />
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Divisiones" key="1">
          <section>
            <Radio.Group value={'default'}>
              <Radio.Button value="listado">Listado</Radio.Button>
              <Radio.Button value="arbol">Árbol</Radio.Button>
            </Radio.Group>
            <Select placeholder="Columnas" optionFilterProp="children"></Select>
            <Input.Search placeholder="Buscar" style={{ width: 200 }} />
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              bordered
            />
            <Pagination defaultCurrent={1} total={50} />
          </section>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Colaboradores" key="2">
          <p>Otro Panel</p>
        </Tabs.TabPane>
      </Tabs> */}
    </Layout>
  );
}

export default App;
