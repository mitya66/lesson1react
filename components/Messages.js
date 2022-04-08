import PropTypes from 'prop-types';
const Messages = ({messages}) => {
    return <>
            {messages?.map((element, index) => (
          <div key={index}>
            <p>{element.text}</p>
            <sup>{element.author}</sup>
          </div>
        ))}
    </>
}

export default Messages;