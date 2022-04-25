import { Button, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible, updateName } from "../store/profile/actions"; 
const Profile = () => {
    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [value, setValue] = useState('name')
    
    const setSowName = useCallback( () => {
        dispatch(changeVisible);
       
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const saveName = () => {
        dispatch(updateName(value));
    }
   

    return ( <div>
        <h1>Profile</h1>
        <button onClick={setSowName}>Show Click</button>
        <blockquote style={{height: '40px'}}>
            {showName && <h3>Текущее имя: {name}</h3>}
        </blockquote>
        <TextField
        name="name"
        label="name"
        placeholder= "Введите ваше имя"
        value={value}
        autoFocus
        onChange={handleInput}
        />
        <Button onClick={saveName}>Сохранить</Button>
        </div>
    );
};


export default Profile;