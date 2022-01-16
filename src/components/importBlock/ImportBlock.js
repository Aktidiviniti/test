import { Component } from "react";
import { Typography, Box, InputLabel, MenuItem, FormControl, Select,} from '@mui/material';
import TextField from '@mui/material/TextField';
import BasicSelect from "../select/select";
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
        if(+e.target.value || e.target.value==''){
           this.setState({salary: e.target.value})
        this.props.changeSalary(e); 
        }
            
    }
    changeValute = (e) => {
        this.props.changeValute(e);
    }
    
    render(){
        let{salary, firstValuteValue, firstValuteName, secondValuteValue, secondValuteName, data} = this.props,
        compare = '1' + ' ' + firstValuteName + ' ' + '=' + ' ' + (firstValuteValue / secondValuteValue).toFixed(4) + ' ' + secondValuteName
        console.log(this.state.firstValuteName);
        console.log(this.state.secondValuteName);
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
                            class = {"first__input"}/>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined" value = {this.state.salary} onChange={this.changeSalary}/>
                </Box> 
                <Box sx = {{
                        position: "absolute",
                        bottom: '16px',
                        left: '22px',
                        textTransform: 'uppercase',
                        fontSize: '16px',
                        color: '#71767A',
                        fonFamily: 'Roboto'}}>
                        {(firstValuteValue && secondValuteValue) ? compare : 'Выберите валюты'}
                </Box>
            </Box>
        </Box>
            
        )
    }
}
export default ImportBlock;