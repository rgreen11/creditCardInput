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
    let input = e.target.value;
    let {output, card} = this.state;
    let startIndex = input[0];
    this.setState({output: input})
    if(startIndex === 4){
        this.setState({card: 'Visa Card'})
        return;
    } else if (startIndex === 5){
        this.setState({card: 'Master Card'})
        return;
        }


}




    render(){
        const {output, card} = this.state
        console.log(card)
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