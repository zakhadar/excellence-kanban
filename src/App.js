import './App.css';
import Header from './Components/Header/Header';
import Panel from './Components/Panel/Panel';
import Editable from './Components/Editable/Editable';
import { useState } from 'react';

function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random(),
      title: "To Do",
      cards: [
        {
          id: Date.now + Math.random()*2,
          title: "Complete Task 1",
          tasks: [],
          labels: [
            {
              text: "ReactJS",
              color: "green"
            }
          ],
          desc: "Loream ipsum dolor amet sit",
          date: "",
        },
        {
          id: Date.now + Math.random()*2,
          title: "Complete Task 2",
          tasks: [],
          labels: [
            {
              text: "HTML",
              color: "blue"
            }
          ],
          desc: "Loream ipsum dolor amet sit",
          date: "",
        }
      ]
    },
    {
      id: Date.now() + Math.random(),
      title: "In Progress",
      cards: [
        {
          id: Date.now + Math.random()*2,
          title: "Task 3",
          tasks: [],
          labels: [
            {
              text: "ReactJS",
              color: "red"
            }
          ],
          desc: "Loream ipsum dolor amet sit",
          date: "",
        },
        {
          id: Date.now + Math.random()*2,
          title: "Task 4",
          tasks: [],
          labels: [
            {
              text: "HTML",
              color: "skyblue"
            }
          ],
          desc: "Loream ipsum dolor amet sit",
          date: "",
        }
      ]
    }
  ]);
  return (
    <div className="app">
      <Header />
      <div className='panels_container'>
        <div className='panels_subContainer'>
          {
            boards.map((item)=><Panel
            key={item.id}
            panel={item}
            />)
          }
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
