import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { AccountCircle, Android } from '@mui/icons-material';
import { AUTHOR } from "../constants/common";
import { useSelector } from "react-redux";
import React from 'react';

const MessageList = () => {

    let { chatId } = useParams('');
    const { name } = useSelector((state) => state.profile);
    const allMessages  = useSelector((state) => state.message.messageList);

    if (!allMessages[chatId]) return null;

    const messages = allMessages[chatId];

    
    const isAuthorBot = (author) => {
     return author === AUTHOR.bot;
    };

    return  (
    <> 
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {messages.map((element) =>  (
        <div key={element.id}>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp">
            {isAuthorBot(element.author) ? ( <Android /> ) : 
            ( <AccountCircle /> )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={isAuthorBot(element.author) ? AUTHOR.bot : name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {element.text}
              </Typography>
            </>
          }
        />
      </ListItem>
          <Divider variant="inset" component="li" />
        </div>))}
        </List>
    </>
    );
    };


export default MessageList;