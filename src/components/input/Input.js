import * as React from 'react';
import TextField from '@mui/material/TextField';
import {makeStyles,createStyles} from "@mui/styles";

export default function CustomStyles(props) {
    const [salary, setSalary] = React.useState('');
    const handleChange = (e) => {
    setSalary(e.target.value);
    props.changeSalary(e);
};
    const useStyles = makeStyles(() =>
                createStyles({
                            input: {
                            fontSize: 36,
                            fontWeight: 700,
                            '& .MuiOutlinedInput-notchedOutline': {border: 'none'},
                            }
                        })
                    );
    const classes = useStyles();
    return (
        <TextField InputProps={{ className: classes.input}} value = {salary} onChange = {handleChange} placeholder='Введите число'/>
    );
}