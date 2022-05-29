import { Routes, Route, Link } from "react-router-dom";
import RequireAuth from "../hoks/RequireAuth";
import Chats from "./Chats";
import Gists from "./Gists";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Registration from "./Registration";



const Router = () => {
    return <>
    <ul className={'menu'}>
     <li>
        <Link to='/home'>Home</Link>
        </li>
        <li>
        <Link to='/profile'>Profile</Link>
        </li>
        <li>
        <Link to='/chats'>Chats</Link>
        </li>
        <li>
        <Link to='/gists'>Gists</Link>
        </li>
        <li>
        <Link to='/login'>Login</Link>
        </li>
        <li>
        <Link to='/registration'>Registration</Link>
        </li>
    </ul>

    <Routes>
    <Route path="/" exact element={<Home/>} />
    
    <Route path="/login" element={<Login/>} />
    <Route path="/registration" element={<Registration/>} />
    <Route element={<RequireAuth/>}>
    <Route path="/profile" element={<Profile/>} />
    <Route path="/gists" element={<Gists/>} />
    <Route index path="/chats:chatId" element={<Chats/>}/>
    
    </Route>
    <Route path="*" element={<Chats/>} />
        </Routes> 
    </>
}


export default Router;
