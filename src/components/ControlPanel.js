import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { useTheme } from '@emotion/react';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  onAddMessageWithSaga } from '../store/messages/actions';


const ControlPanel = () => {
    
    let { chatId} = useParams();
    const [value, setValue] = useState('');
    const theme = useTheme();
    const dispatch = useDispatch();
    const authorName = useSelector((state) => state.profile.name);
    
    


    const handleInput = (event) => {
        setValue(event.target.value);
      };

    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
          const newMessage = { text: value, author: authorName};
          dispatch(onAddMessageWithSaga(chatId, newMessage));
          setValue('');
          inputRef.current?.focus();
        }
    
      }
    
    const inputRef = useRef();

      useEffect( () => {
        inputRef.current?.focus();
      },[])
    
     

    return <div>
    <div className={'controlPanel'}>
  <TextField
  inputRef={inputRef}
  style={{marginRight: '10px'}}
   placeholder={'Введите сообщение'}
   value={value}
   onChange={handleInput}/>
   <Fab
   style={{ backgroundColor: theme.palette.primary.main}}
    onClick={handleClick}
     color="primary"
      aria-label="add">
 <SendIcon />
</Fab>
</div>
    </div>
}


export default ControlPanel;