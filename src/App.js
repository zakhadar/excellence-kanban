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

  const addCard = (title, pid) => {
    const card = {
      id: Date.now() + Math.random()*2,
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: ""
    }
    const index = boards.findIndex((item) => item.id === pid);
    if (index < 0) return;
    const tempPanel = [...boards];
    tempPanel[index].cards.push(card);
    setBoards(tempPanel);
  }

  const removeCard = (pid, cid) => {
    const index = boards.findIndex((item) => item.id === pid);
    if (index < 0) return;

    const tempBoards = [...boards];
    const cards = tempBoards[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoards);
  };

  const addPanel = (title) => {
     setBoards([...boards,
      {
        id: Date.now() + Math.random,
        title,
        cards: []
      }
    ]);
  }

  const removePanel = (pid) => {
    const tempPanels = boards.filter(item=>item.id!==pid);
    setBoards(tempPanels);
  }

  return (
    <div className="app">
      <Header />
      <div className='panels_container'>
        <div className='panels_subContainer'>
          {
            boards.map((item)=><Panel
            key={item.id}
            panel={item}
            removePanel = {removePanel}
            addCard = {addCard}
            removeCard = {removeCard}
            />)
          }
          <div className='addPanel'>
            <Editable
            text="Add Panel"
            placeholder="Enter Panel Title"
            onSubmit = {(value)=> addPanel(value)} />
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
