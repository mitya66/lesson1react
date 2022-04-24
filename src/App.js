import "./App.scss";
import Router from "./pages/Router";
import React, { useState } from "react";

export const MyThemeContext = React.createContext({ theme: 'dark' })
function App() {
  const [theme, setTheme] = useState('state')

  const handleInput = (event) => {  //не могу понять что не так
    setValue(event.target.value);
   };


  return (
    <div className={"App"}>
      <header className="App-header">
        <MyThemeContext.Provider value={ {theme: theme, setTheme: setTheme} }>
        <Router />
        </MyThemeContext.Provider>
        <input
            placeholder={"Введите сообщение"}
            value={value}
            onChange={handleInput}
          />
          <button onClick={hendleClick}>Добавить сообщение</button>
      </header>
    </div>
  );
}

export default App;
