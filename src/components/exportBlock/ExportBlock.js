import { Component} from "react";
import { Typography, Box} from '@mui/material';
import BasicSelect from "../select/select";
class ExportBlock extends Component{
    constructor(props){
        super(props)
    }
    state = {
        salary: '',
        firstValuteValue: '',
        firstValuteName: '',
        secondValuteValue: '',
        secondValuteName: '',
    } 
    changeValute = (e) => {
        this.props.changeValute(e);
    }
    render(){
        const {salary, firstValuteValue, firstValuteName, secondValuteValue, secondValuteName} = this.props,
            compare = `1 ${secondValuteName}   =   ${(secondValuteValue / firstValuteValue).toFixed(4)}  ${firstValuteName}`,
            result = ((firstValuteValue / secondValuteValue) * salary).toFixed(2);
        return(
        <Box>
            <Typography 
                variant='h6' 
                className="input__text" 
                sx = {{
                    color: '#71767A',
                    fontSize: '20px',
                    fontWeight: 'normal'}}>
                Я получу
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
                            class = {"second__input"}
                            currentText = {this.props.currentText}
                            swap = {this.props.swap}/>
                <Box sx = {{
                        fontWeight: 'bold',
                        fontSize: '36px',
                        margin: '24px 0 0 22px',
                        lineHeight: 1,
                        textTransform: 'uppercase',}}>
                    {(salary  && firstValuteValue && secondValuteValue) ? result : ''}
                </Box>  
                <Box sx = {{
                        position: "absolute",
                        bottom: '16px',
                        left: '22px',
                        textTransform: 'uppercase',
                        color: '#71767A'}}>
                    {(firstValuteValue && secondValuteValue) ? compare : 'Выберите валюты'}
                </Box>
            </Box>    
        </Box>  
        )
    }
}
export default ExportBlock;