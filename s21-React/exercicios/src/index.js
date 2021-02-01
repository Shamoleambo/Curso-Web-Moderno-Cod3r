import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(
    <Pai nome="Goku" sobrenome="Silva">
        <Filho nome="Gohan" />
        <Filho nome="Goku" />
        <Filho nome="Bulma" />
    </Pai>
, document.getElementById("root"));