import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  let{data} = props,
        list = [];
        for(let i in data){
            list.push(<MenuItem className={props.class} key = {data[i].ID} value={data[i].Value} data-char = {data[i].CharCode} name = {data[i].Name} onClick={(e) => props.changeValute(e)} sx={{ height: 40 }}>{data[i].CharCode} {data[i].Name}</MenuItem>)
        }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {list}
        </Select>
      </FormControl>
    </Box>
  );
}