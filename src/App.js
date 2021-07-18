import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Organizacion from './pages/Organizacion';
import Modelos from './pages/Modelos';
import Seguimiento from './pages/Seguimiento';
import Perfil from './pages/Perfil';
import 'antd/dist/antd.less';

function App() {
  return (
    <Layout>
      <Router>
        <Header />
        <Layout.Content style={{ backgroundColor: 'white', padding: '0 25px' }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/organizacion" component={Organizacion} />
            <Route path="/modelos" component={Modelos} />
            <Route exact path="/seguimiento" component={Seguimiento} />
            <Route exact path="/perfil" component={Perfil} />
          </Switch>
        </Layout.Content>
      </Router>
    </Layout>
  );
}

export default App;
