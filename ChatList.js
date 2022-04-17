import { Avatar, List, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const ChatList = ({ chats }) => {
    return ( <div>
    <List>
          {Object.keys(chats).map((chat, index) => (
        <Link to={`/chats/${chat}`} key={index}>
        <ListItem
            key={index}
             secondaryAction={
        <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
        </IconButton>
      }
     >
        <ListItemAvatar>
        <Avatar/>
        </ListItemAvatar>
        <ListItemText
          primary={chats[chat].name} />
        </ListItem>
        </Link>
        
          ))}
          </List>
      </div>
      );
    };


export default ChatList;