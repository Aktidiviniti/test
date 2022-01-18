import { Component } from "react";
import { Typography, Box} from '@mui/material';
import BasicSelect from "../select/select";
import CustomStyles from "../input/Input";
class ImportBlock extends Component{
    constructor(props){
        super(props)
    }
    state = {
        salary: this.props.salary,
        firstValuteValue: '',
        firstValuteName: '',
        secondValuteValue: '',
        secondValuteName: '',
    } 
    changeSalary = (e) => {
        if(+e.target.value || e.target.value === ''){
           this.setState({salary: e.target.value});
        this.props.changeSalary(e); 
        }
            
    }
    changeValute = (e) => {
        this.props.changeValute(e);
    }
    
    render(){
        const {firstValuteValue, firstValuteName, secondValuteValue, secondValuteName} = this.props,
        compare = `1  ${firstValuteName} = ${(firstValuteValue / secondValuteValue).toFixed(4)}  ${secondValuteName}`;
        return(
        <Box>
            <Typography variant='h6' 
                        className="input__text" 
                        sx = {{
                            color: '#71767A',
                            fontSize: '20px',
                            fontWeight: 'normal'}}>
                        У меня есть
            </Typography>
            <Box sx = {{
                    width: '400px',
                    height: '200px',
                    border: '1px solid #CDCDCD',
                    borderRadius: '8px',
                    marginTop: '10px',
                    position: "relative",
                    borderTop: 'none'}}>
                <BasicSelect data = {this.props.data}
                            changeValute = {this.props.changeValute}
                            class = {"first__input"}
                            currentText = {this.props.currentText}
                            swap = {this.props.swap}/>
                <CustomStyles
                    changeSalary = {this.props.changeSalary}
                    salary = {this.state.salary}> 
                </CustomStyles>
                <Box sx = {{
                        position: "absolute",
                        bottom: '16px',
                        left: '22px',
                        textTransform: 'uppercase',
                        fontSize: '16px',
                        color: '#71767A',
                        }}>
                        {(firstValuteValue && secondValuteValue) ? compare : 'Выберите валюты'}
                </Box>
            </Box>
        </Box>  
        )
    }
}
export default ImportBlock;