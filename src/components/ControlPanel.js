import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { useTheme } from '@emotion/react';
import { useEffect, useState, useRef } from 'react';
import { AUTHOR } from '../constants/common';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from '../store/messages/actions';


const ControlPanel = () => {
    
    let { chatId} = useParams();
    const [value, setValue] = useState('');
    const theme = useTheme();
    const dispatch = useDispatch();
    const authorName = useSelector((state) => state.profile.name);
    const allMessages = useSelector((state) => state.message.messageList);
    const messages = allMessages[chatId];


    const handleInput = (event) => {
        setValue(event.target.value);
      }
    const handleClick = (e) => {
        e.preventDefault();
        if (value !== '') {
          const newMessage = { text: value, author: authorName};
         // setMessageList([...(messageList || []), newMessage]);
          dispatch(addMessage(chatId, newMessage));
          setValue('');
          inputRef.current?.focus();
        }
    
      }
    
    const inputRef = useRef();

      useEffect( () => {
        inputRef.current?.focus();
      },[])
    
      useEffect(() => {
        let timerId;
        if (messages?.length > 0 
          && messages[messages.length - 1].author !== AUTHOR.bot){
            const newMessage = { text: 'Привет друг, как дела?', author: AUTHOR.bot } 
            timerId = setInterval( () => {
              dispatch(addMessage(chatId, newMessage))
            }, 1500);
           
          }
          return () => {
            if (timerId) {
            clearInterval(timerId)
            }
          }
    
      },[messages, chatId]);

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