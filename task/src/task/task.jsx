import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
const Task = () => {
  const [card, setcard] = useState(null);
  useEffect(() => {
    const loadedData = JSON.parse(localStorage.getItem("data"));
    if (loadedData) {
      setcard(loadedData);
    }
  }, []);
  useEffect(() => {
    if (card) {
      localStorage.setItem("data", JSON.stringify(card));
    }
  }, [card]);

  const addCard = () => {
    setcard([...card, { id: Math.floor(Math.random() * 1000) }]);
  };
  const deleteCard = async (id) => {
    const items = card.filter((e) => e.id !== id);
    setcard(items);
  };
  const sortCards = () => {
    const sorted = card.sort((a, b) => a.id - b.id);
    setcard([...sorted]);
  };

  return (       
      <div>
        <div id="header">
          <button id="button" onClick={addCard}>
            add card
          </button>
          <button id="button" onClick={sortCards}>
            sort cards
          </button>
        </div>

        <div id="instructions">
          Press the "add card" button to add the new Card.Use the "sort cards"
          button to sort the Cards by the increase.Press an X icon on the top
          right to delete them.
        </div>
        <div id="main">
          <div id="card">
            {card !== null &&
              card.map((e, i) => {
                return (
                  <div key={i} id="cardId">
                    <button id="delet" onClick={() => deleteCard(e.id)}>
                      <BsXLg />
                    </button>
                    <h1>{e.id}</h1>
                  </div>
                );
              })}
          </div>
        </div>
        <div id="footer" />
      </div>
    
  );
};

export default Task;
