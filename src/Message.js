import { useEffect } from "react";

const Message = ({Hello}) =>{
  useEffect(() => {
    return () => {
      console.log('Message unmounted');
    }
  }, [])
    return <div>Message text here: {Hello}</div>
  };

  export default Message;