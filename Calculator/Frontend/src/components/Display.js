import React, {Component} from 'react';

class Display extends Component{


    constructor(props)
    {   super();
        this.props = props;
    }

    render()
    { 
        let result = this.props.value


        if (result == null){
            result = 'Cannot Divide by Zero'
        }
        
        console.log('This value'+result);
        return(<input type='text' id='disp' readOnly value={result}/>);
    }
}

export default Display;