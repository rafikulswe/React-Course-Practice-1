import React, { Component } from 'react';
import SplitChar from './splitChar';

class TextBox extends Component {
    state = { 
        mainText: ''
    }
    splitCharHandler = (e) => {
        this.setState({
            mainText: e.target.value
        })
    }
    deleteCharHandler = (index) => {
        const text = this.state.mainText.split('');
        text.splice(index, 1);
        const updateText = text.join('');
        this.setState({ mainText: updateText });
    }
    render() {
        const charList = this.state.mainText.split('').map((char, index) => {
            return <SplitChar 
                mainText={char} 
                key={index}
                clicked={() => this.deleteCharHandler(index) }
                />;
        });
        return ( 
            <div className="container">
                {charList}
                <div className="form-group row">
                    <label htmlFor="email" className="col-md-3">Input Any Text</label>
                    <input type="text" className="form-control col-md-9" value={this.state.mainText} onChange={this.splitCharHandler}/>
                </div>
            </div>
        );
    }
}
 
export default TextBox;