import './App.css';
import Header from './Components/Header/Header';
import Panel from './Components/Panel/Panel';
import Editable from './Components/Editable/Editable';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='panels_container'>
        <div className='panels_subContainer'>
          <Panel />
          <Panel />
          <div className='addPanel'>
            <Editable
            text="Add Panel"
            placeholder="Enter Panel Title" />
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
