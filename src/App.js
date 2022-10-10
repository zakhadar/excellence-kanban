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

  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });

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

  const dragEnded = (bid, cid) => {
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);

    setTargetCard({
      bid: "",
      cid: "",
    });
  };

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };

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
            dragEnded={dragEnded}
            dragEntered={dragEntered}
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
