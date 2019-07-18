import React from 'react';


export default class CCInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            output: '',
            card: '',
        }
    }

handleCardType = (e) => {
    const input = e.target.value;
    let card = '';
    let firstInt = parseInt(input[0])
    if(firstInt === 3){
        card = 'American Express';
        if(input.length === 19) return;
        this.setState({output: input, card:card});
        this.handleAmex(input)
    } else if(firstInt === 4){
        card = 'Visa Card';
        if(input.length === 20) return;
        this.setState({output: input, card:card});
        this.handleSpace(input)
    } else if (firstInt === 5){
        card = 'Master Card';
        if(input.length === 20) return;
        this.setState({output: input, card:card});
        this.handleSpace(input)
    } 
}

handleSpace = (input) => {
    const space = ' ';
    console.log(input.length)
    if(input.length === 4){
        let newInput = input + space;
        this.setState({output: newInput})
        return;
    } else if(input.length === 9){
        let newInput = input + space;
        this.setState({output: newInput})
        return;
    } else if(input.length === 14){
        let newInput = input + space;
        this.setState({output: newInput})
        return;
    } 
}

handleAmex = (input) => {
    const space = ' ';
    let firstInt = parseInt(input[0])
    if(firstInt === 3){
        this.setState({card: 'American Express'})
    }
    if(input.length === 4){
        let newInput = input + space;
        this.setState({output: newInput})
        return;
    } else if(input.length === 12){
        let newInput = input + space;
        this.setState({output: newInput})
        return;
    } 
}


    render(){
        const {output, card} = this.state

    return( <>
                <h1>Card Type: {card}</h1>
                <input 
                value={output}
                onChange={this.handleCardType} 
                style={{ height: 50, width: 400, fontSize: 30 }}
                />
            </>
    )
}

}