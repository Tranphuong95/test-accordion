import React, {useState} from 'react';
import './App.css';
import { TextField,InputAdornment, ListItem } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from './component/Accordion';
import Routers from './router';

const listItems=[
  {
    id: 'name1-value1',
    name: 'name1',
    value: 'value1'
  },
  {
    id: 'name2-value2',
    name: 'name2',
    value: 'value2'
  },
  {
    id: 'name3-value3',
    name: 'name3',
    value: 'value3'
  },
  {
    id: 'name4-value4',
    name: 'name4',
    value: 'value4'
  },
  {
    id: 'name5-value5',
    name: 'name5',
    value: 'value5'
  },
]
const App =(props)=>{
  const [open, setOpen]=useState({})
 
  const handleChangeOpen=(index)=>{
    console.log(index)
    // const {open}=this.state;
    // open[index]=!open[index]; //cho phep mo nhieu accordion 
    // this.setState({open})

    // this.setState(state=>({
    //   open: { [index]: !state.open[index] }, //chỉ cho phep mo 1 accordian
    // }))
    setOpen({
      [index]:!open[index]
    })
  }
  const color=['blue', 'yellow', 'red', 'blue', 'yellow', 'green'];
  const res1=color.filter((v, i, self)=>{ //remove duplicate item in array
    return self.indexOf(v)===i
  });
  const res2=color.filter((v, i, self)=>{ // show item duplicated
    return self.indexOf(v)!==i
  });
  console.log(open, res1, res2)
  return (
    <div className="App">
      <div style={{ height: 400, width: '100%' }}>
      {listItems.map((item, index)=>(
        <React.Fragment key={index}>
          <TextField
            fullWidth
            value={item.value}
            // onChange={onHandleChange}
            lable={item.name}
            InputProps={{
              endAdornment: (
                <InputAdornment style={{cursor: 'pointer'}} position="end">
                  {open[index]?<ExpandLessIcon onClick={()=>handleChangeOpen(index)}/>: 
                  <ExpandMoreIcon onClick={()=>handleChangeOpen(index)}/>}
                </InputAdornment>
              )
            }}
          />
          {open[index]?<Accordion name={item.name}/>: null}
        </React.Fragment>
      ))}
      
      </div>
      <Routers/>
    </div>
  );
  
}

export default App;
