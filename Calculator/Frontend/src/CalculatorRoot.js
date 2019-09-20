import React, {Component} from 'react';
import axios from 'axios';
import ButtonCompnent from './components/ButtonComponent';  
import Display from './components/Display'; 
//Create a Main Component
class  CalculatorRoot extends Component {

    constructor(){
        super();
        this.state = {  
            input:'',
            expression:'',
            result: '0',
        }
    }
   
    
    handleClick = (event) =>{
        let {type,value} = event.target;
        console.log(type+'value '+value);
        let operandString = '+ - * /'
        let decimalOperator = '.'
        let previousValue = this.state.expression[this.state.expression.length-1];
        if(this.state.expression==='' && operandString.includes(value))
            return
        if(operandString.includes(value) && (operandString.includes(previousValue)||previousValue==='.'))
            return
        
         if(value==='.' && (operandString.includes(previousValue)||previousValue==='.'))
            return
        
        if(value==='=')
        {
            this.performCalculation();
        }

        else if (value==='Cls')
            {
                this.setState({
                    expression:'',
                    result:'0'
                })
            }

        else{
            console.log('here',value);
            
            this.setState(
                { expression: this.state.expression += value}
            );
                console.log('State Value',this.state);
        }
        }

       


    performCalculation = ()=>{
       
        const data = {
            expression:this.state.expression
        }
        axios.defaults.withCredentials = true;
        console.log('Sending data for calculation',data)
        axios.post('http://localhost:3001/calculate',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                if(response.status === 200){
                    console.log("Response",response.data.result);
                    this.setState({
                        result : response.data.result
                    })
                }else{
                    this.setState({
                        authFlag : false
                    })
                }
            }).catch(error=>{
                this.setState({
                    expression:this.state.expression 
                })
            })
    }

   
    render(){
        return(
            
                
            <div className='container'>
            <div className='jumbotron'>
             <h2 align='center'><b>React Calculator</b></h2>
             <div id='calc-contain'>
             
                <Display  value={this.state.result} type='inputScreen'></Display>
                <Display  value={this.state.expression} type='resultScreen'></Display>
                
              
          <ButtonCompnent  label={'1'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'2'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'3'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'-'}  type='operation'  handleClick={this.handleClick} />
          <ButtonCompnent  label={'4'}  type='operand'   handleClick={this.handleClick}/>
          
          <ButtonCompnent  label={'5'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'6'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'+'}  type='operation'  handleClick={this.handleClick} />

          <ButtonCompnent  label={'7'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'8'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'9'}  type='operand'   handleClick={this.handleClick}/>
        <ButtonCompnent  label={'*'}  type='operation'  handleClick={this.handleClick} />
         
        <ButtonCompnent  label={'.'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'0'}  type='operand'   handleClick={this.handleClick}/>
          <ButtonCompnent  label={'/'}  type='operation'  handleClick={this.handleClick} />
         <ButtonCompnent  label={'Cls'}  type='operation'  handleClick={this.handleClick} />
         <ButtonCompnent  label={'='}  type='operation'  handleClick={this.handleClick} />
        
        </div>
            </div>
           </div>
           
        )
    }
}
//Export The Main Component
export default CalculatorRoot;