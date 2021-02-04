import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Main from '../components/template/Main'; //Inside the Main is the Header
import Nav from '../components/template/Nav';
import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início" 
            subtitle="Segundo Projeto em React"/>
        <Footer/>
    </div>