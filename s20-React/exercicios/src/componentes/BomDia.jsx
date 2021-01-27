// import {Fragment} from 'react';

export default (props) => [ //This would be the last option
    <h1 key='h1'>Bom Dia {props.nome}! Você hoje continua tendo {props.idade} anos.</h1>,
    <h2 key='h2'>Haha</h2>
];

// export default (props) => 
//     <Fragment>
//         <h1 >Bom Dia {props.nome}! Você hoje continua tendo {props.idade} anos.</h1>
//         <h2>Haha</h2>
//     </Fragment>