import './App.scss';
import Example from './Examle';
import AFew from './AFew';
import Message from './Message';

function App(props) {
  const isPurple = `App-header ${props.showPurple ? 'header-purple' : 'header-gold'}`;
  return (
    <div 
     className="App"
     style={{ top : props.TopPosition || '20px', position: 'relative' }}>
      <header 
      className=  {isPurple}>
        Hello, {props.name}
        <Example/>
        <AFew/>

        <Message text={'Hello'}/>
  
      </header>
    </div>
  );
}

export default App;
