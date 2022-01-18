import * as React from 'react';
import {Select, FormControl, MenuItem, Box} from '@mui/material';
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
let createList = () => {
  let{data, changeValute} = props,
      list = [];
        for(let i in data){
            let text = data[i].CharCode + ' ' + data[i].Name;
            list.push(<MenuItem className={props.class} 
                                selected={true}
                                key = {data[i].ID} 
                                value={data[i].Value} 
                                data-char = {data[i].CharCode} 
                                name = {data[i].Name} 
                                onClick={(e) => changeValute(e, `${data[i].Value}`)} 
                                sx={{ height: 40, 
                                      display: 'flex',
                                      justifyContent: 'space-between',
                                      '&.Mui-selected': {
                                        color: 'blue'
                                      },
                                    }} 
                                >
                                  {text.length > 35 ? text.slice(0, 36) + '...' : text}
                      </MenuItem>)
      } 
  return list
}
return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={!props.swap ? age : props.currentText}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {createList()}
        </Select>
      </FormControl>
    </Box>
  );
}