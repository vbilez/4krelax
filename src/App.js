import './App.css';
import HeaderBootstrap from './componets/header-bootstrap/header-bootstrap';
import FooterBootstrap from './componets/footer-bootstrap/footer-bootstrap'
import Pages from './pages/pages';

function App() {
  return (
    <>
      {/* <Header /> */}
      <HeaderBootstrap />
      <Pages />
      <FooterBootstrap />
      
    </>
  );
}

export default App;
