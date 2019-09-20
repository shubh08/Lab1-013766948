import React, {Component} from 'react';

class ButtonComponent extends Component{

constructor(props){
    super();
this.props = props;
}

    render(){

        return (
            <input 
              type="button"
             className={this.props.type === 'operand' ? 'btn btn-info ' : 'btn btn-warning'}
              onClick={this.props.handleClick}
              value={this.props.label}
              id='bt'
            />
          ); 
        
    }
}

export default ButtonComponent;