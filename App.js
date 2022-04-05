import { useEffect, useState } from "react";
import "./App.scss";
import { AUTHOR } from "./constants/common";
import Message from "./Message";
function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const hendleClick = () => {
    if (value !== "") {
      const newMessage = { text: value, author: AUTHOR.me };
      setMessageList([...messageList, newMessage]);
    }
  };

  useEffect(() => {
    let timerId;
    if (
      messageList.length > 0 &&
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
        <h4>Список сообщений:</h4>
        <br />
        {messageList.map((element) => (
          <div>
            <p>{element.text}</p>
            <sup>{element.author}</sup>
          </div>
        ))}
        <div>
          <input
            placeholder={"Введите сообщение"}
            value={value}
            onChange={handleInput}
          />
          <button onClick={hendleClick}>Добавить сообщение</button>
        </div>
      </header>
    </div>
  );
}

export default App;
