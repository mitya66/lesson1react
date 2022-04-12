
import  MessageList  from "../components/MessageList";
import ChatList from "../components/Chat.list";


const Chats = ({ chats, addMessage }) => {
  
  return (
    <div className={"wrap"}>
      <ChatList chats={chats}/>
      <MessageList chats={chats} />
    </div>
  );
  };

export default Chats;
