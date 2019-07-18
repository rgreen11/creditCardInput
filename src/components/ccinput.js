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

    if(firstInt === 4){
        card = 'Visa Card';
        console.log('input 2', input[0]);
    } else if (firstInt === 5){
        card = 'Master Card';
    } 

        this.setState({output: input, card:card});
       
}




    render(){
        const {output, card} = this.state
        console.log('card', card)
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