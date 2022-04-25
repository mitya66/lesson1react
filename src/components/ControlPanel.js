import { AUTHOR } from "../constants/common";
import { Fab, useTheme } from "@mui/material";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const  ControlPanel = () => {
    const theme = useTheme();
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
  

    const handleInput = (event) => {  //не могу понять что не так
     setValue(event.target.value);
    };
  
    const hendleClick = (e) => {
      e.preventDefault();
      if (value !== "") {
        const newMessage = { text: value, author: AUTHOR.me };
        setMessageList([...(messageList || []), newMessage]);
        setValue("");
        inputRef.current?.focus();
      }
    };
  
    useEffect(() => {
      inputRef.current?.focus();
    }, []);
  
    useEffect(() => {
      let timerId;
      if (
        messageList?.length > 0 &&
        messageList[messageList.length - 1].author !== AUTHOR.bot
      ) {
        timerId = setInterval(() => {
          setMessageList([...messageList, newMessage]);
        }, 1500);
        const newMessage = { text: "Привет друг! Как дела?", author: AUTHOR.bot };
      }
      return () => {
        if (timerId) {
          clearInterval(timerId);
        }
      };
    }, [messageList]);


    return <div>
        <div className="{controlPanel}">
        <TextField
          inputRef={inputRef}
        />
        <Fab
          style={{
            backgroundColor: theme.palette.primary.main,
          }}
          onClick={hendleClick}
          color="primary"
          aria-label="add">
          <SendIcon />
        </Fab>
        
      </div>
    </div>
}



export default ControlPanel;