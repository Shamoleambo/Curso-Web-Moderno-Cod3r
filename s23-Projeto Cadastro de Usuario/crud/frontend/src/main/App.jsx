import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from '../components/home/Home'; //Inside the Main is the Header
import Nav from '../components/template/Nav';
import Logo from '../components/template/Logo';
import Footer from '../components/template/Footer';

export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Home />
        <Footer/>
    </div>