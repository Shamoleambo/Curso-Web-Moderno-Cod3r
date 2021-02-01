import {Component} from 'react';

export default class Saudacao extends Component{
    /*The state attribute can be altered, props can't*/

    state = { //When the state is declared inside the constructor it must have be like: this.state = ...
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props){
        super(props);

        this.setTipo = this.setTipo.bind(this);
        this.setNome = this.setNome.bind(this);
    }

    setTipo(e){
        this.setState({tipo: e.target.value});
    }

    setNome(e){
        this.setState({nome: e.target.value});
    }

    render(){
        const {tipo, nome} = this.state;
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo saudação"
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="nome"
                    value={nome} onChange={this.setNome} />
            </div>
        );
    }
}