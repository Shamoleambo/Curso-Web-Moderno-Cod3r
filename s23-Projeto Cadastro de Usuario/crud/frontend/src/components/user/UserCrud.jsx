import {Component} from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Icluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    /*Challenge: Refactor this code separating the code in components*/
    render(){
        return(
            <Main {...headerProps}>
                Usuario
            </Main>
        )
    }
}
