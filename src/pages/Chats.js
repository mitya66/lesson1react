
import  MessageList  from "../components/MessageList";
import ChatList from "../components/ChatList";


const Chats = ({ chats, addMessage }) => {
  
  return (
    <div className={"wrap"}>
      <ChatList chats={chats}/>
      <MessageList chats={chats} />
    </div>
  );
  };

export default Chats;
