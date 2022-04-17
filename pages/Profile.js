import { TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVisible } from "../store/profile/actions"; 
const Profile = () =>{
    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [value, setValue] = useState('name')
    
    const setSowName = useCallback(()=>{
        dispatch(changeVisible);
       
    }, [dispatch]);

    const handleInput = (e) => {
        setValue(e.tareget.value);
    }
   

    return ( <div>
        <h1>Profile</h1>
        <button onClick={setSowName}>Show Click</button>
        <blockquote style={{height: '40px'}}>
            {showName && <h3>{name}</h3>}
        </blockquote>
        <TextField
        name="name"
        label="name"
        placeholder= "Введите ваше имя"
        value={value}
        autoFocus
        onChange={handleInput}
        />
        </div>
    );
};


export default Profile;