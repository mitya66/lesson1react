import {  List, ListItem, IconButton, ListItemAvatar, Avatar, Dialog, Button, DialogTitle, TextField  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addChat } from '../store/chats/actions';

const ChatList = () => {
  const chats = useSelector(state => state.chats.chatList);
  const [visible, setVisible] = useState(false);
  const [chatName, setChatName] = useState('');
  const dispatch = useDispatch();

  const handleChatName = (e) => {
    setChatName(e.target.value);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleAdd = () => {
    setVisible(true)
  };

  const handleSave = () => {
    dispatch(addChat(chatName));
    setChatName('');
    handleClose();
  };

    return (
       
      <div>
        <List>
          {chats?.length > 0 ? ( chats.map((chat) => (
              <Link to={`/chats/${chat.id}`} key={chat.id}> 
 
     <ListItem
       secondaryAction={
         <IconButton edge="end" aria-label="delete">
           <DeleteIcon />
         </IconButton>
       }
     >
       <ListItemAvatar>
         <Avatar />
       </ListItemAvatar>
       <ListItemText primary={chat.name } />
     </ListItem>
     </Link>
          ))) : ( <div>Chats not found</div>
          )} 
           </List>
           <Button onClick={handleAdd}>Add Chat</Button>
           <Dialog open={visible} onClose={handleClose}></Dialog>
           <DialogTitle>Please enter a name fo new chat </DialogTitle>
           <TextField
           placeholder="Chat Name"
           value={chatName}
           onChange={handleChatName}
           />
           <br/>
           <br/>
           <Button onClick={handleSave} style={{ color: 'white'}}>Save chat</Button>
    </div>
    )
}


export default ChatList;