import './Main.css';
import React from 'react';
import Header from './Header';

export default props =>
    <React.Fragment>
        {/* React.Fragment does not create a html element when rendering the page */}
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>