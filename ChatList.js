import { Avatar, List, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../App";

const ChatList = ({ chats }) => {

    const contextValue = useContext(MyThemeContext);


    return ( <div>
        
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
       Chat List<br/>
       My theme is<h1>{contextValue.theme}</h1>
       <button onClick={() => 
                    contextValue.setTheme(
                        contextValue.theme === 'light' ? 'dark' : 'light')}>
                        Change theme 
                        </button>
    </Typography>
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