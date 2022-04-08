import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { AUTHOR } from "./constants/common";
import TextField from "@mui/material/TextField";
import { Fab, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Messages from "./components/Messages";
import ChatList from "./components/Chat.list";
function App() {
  const theme = useTheme();
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  //const [focused, setIsFocused] = useState(true);
  const inputRef = useRef(null);

  const handleInput = (event) => {
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

  return (
    <div className={"App"}>
      <header className="App-header">
        <h4>Список chats:</h4>
        <ChatList />
        <h4>Список сообщений:</h4>
        <br />
        <Messages messages={messageList} />
        <div className="{controlPanel}">
          <TextField
            inputRef={inputRef}
            style={{ margin: "10px" }}
            placeholder={"Введите сообщение"}
            value={value}
            autoFocus
            onChange={handleInput}
          />
          <Fab
            style={{
              backgroundColor: theme.palette.primary.main,
            }}
            onClick={hendleClick}
            color="primary"
            aria-label="add"
          >
            <SendIcon />
          </Fab>
        </div>
      </header>
    </div>
  );
}

export default App;
