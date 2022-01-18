import {Box} from '@mui/material';
import arrowLeft from '../../resourser/icons/ArrowLeft.png';
import arrowRight from '../../resourser/icons/ArrowRight.png';
import { Component } from 'react';
class Arrows extends Component{
    constructor(props){
        super(props)
    }
    state = {
        rotate: false,
    }
    changeSwap = () => {
        this.setState({rotate: !this.state.rotate})
        this.props.changeSwap();
      };
    render(){
        let arrows = <div><img src={arrowLeft} alt="arrowLeft"/><img src={arrowRight} alt="arrowRight"/></div>,
            unarrows = <div><img src={arrowRight} alt="arrowRight"/><img src={arrowLeft} alt="arrowLeft"/></div>;
        return(
            <Box    sx = {{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '75px',
                    height: '75px',
                    marginTop: '50px',
                    cursor: 'pointer'}} 
                    onClick = {this.changeSwap}>
            {this.state.rotate ? arrows : unarrows}    
            </Box> 
        )
    }       
}
export default Arrows;