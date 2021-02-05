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

    updateField(event){
        //Never change the object's state directly
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    //Try refactoring this to be a new component
    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    {/*Below: xs and sm devices: col-12 - md and beyond: col-md-6*/}
                    <div className="col-12 col-md-6"> 
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu email" />
                        </div>
                    </div>

                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)} >
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)} >
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>
        )
    }


    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}
