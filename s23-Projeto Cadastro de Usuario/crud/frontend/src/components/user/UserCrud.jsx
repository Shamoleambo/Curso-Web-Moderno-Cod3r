import {Component} from 'react';
import axios from 'axios';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Icluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    /*Challenge: Refactor this code separating the code in components*/

    state = {...initialState};

    //Clear the form
    clear(){
        this.setState({user: initialState.user});
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }

    //Insert a new user and updates an already existing user
    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdatedList(resp.data);
                this.setState({user: initialState.user, list});
            });
    }

    render(){
        return(
            <Main {...headerProps}>
                Usuario
            </Main>
        )
    }
}
