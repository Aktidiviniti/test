import {Box} from '@mui/material';
import arrowLeft from '../../resourser/icons/ArrowLeft.png';
import arrowRight from '../../resourser/icons/ArrowRight.png'
function Arrows(){
    return(
        <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                width: '75px',
                height: '75px',
                marginTop: '50px'
                }}>
            <img src={arrowLeft} alt="arrowLeft"/>
            <img src={arrowRight} alt="arrowRight"/>
        </Box>
    )
}
export default Arrows;