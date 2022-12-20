import { Component } from "react";
import arrow from './arrow.png';
import check from './check.png';

export class List extends Component{

    constructor() {
        super();
        this.state = {
            inputText:'',
            List:[],
            Image: arrow,
        }
    }

    inputChange = (e) => {
        this.setState({inputText: e});
    }

    addItem(input) {
        if (input === '') {
            alert ('Enter something!')
        }
        else {
            let listArray = this.state.List;
            listArray.push(input);
            this.setState({List: listArray, inputText:''});
        }
    }

    crossedWords(event) {
        const li = event.target;
        li.classList.toggle('crossed');
        this.setState({Image: check});
    }

    deleteItems() {
        let listArray = this.state.List;
        listArray = [];
        this.setState({List: listArray});
    }

    formSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return(
        <div>
            <form onSubmit={this.formSubmit}>
                <div className="container">
                    <input type='text' 
                    placeholder="Let's do this!" 
                    onChange = {(e) => {this.inputChange(e.target.value)}}
                    value = {this.state.inputText}/>
                    <button onClick={() => this.addItem(this.state.inputText)} className='btn_add btn'> One more </button>
                </div>
                <div className="container">
                    <ul>
                        {this.state.List.map((item, index) =>(
                            <li onClick={this.crossedWords} key={index}>
                                <img src={this.state.Image} width='25px' alt="check"/> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='container'>
                    <button onClick={() => this.deleteItems()} className='btn_delete btn'> Delete all </button>
                </div>
            </form>
        </div>
        )
    }
}