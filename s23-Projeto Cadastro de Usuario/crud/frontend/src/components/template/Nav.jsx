import NavItem from './NavItem';
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem route='' icon='home' value='Início'/>
            <NavItem route='users' icon='users' value='Usuários'/>
        </nav>
    </aside>