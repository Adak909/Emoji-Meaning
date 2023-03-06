import '../styles/App.css';
import { useState } from 'react';

function App() {

  const [meaning, setMeaning] = useState("");
  const emoji = require("emoji-dictionary");

  function emojiClickHandler(val){
    setMeaning(emoji.getName(val))
  }

  function handleChangeEvent(event) {
    var input = event.target.value;
    if (emoji.getName(input) !== undefined) {
      setMeaning(emoji.getName(input));
    }
    else if (input.length === 0) {
      setMeaning("")
    }
    else if (emoji.getName(input) === undefined) {
      setMeaning("Sorry we don't have this emoji in our databse!!")
    }

  }
  return (<>
    <div className='App'>
      <h1>Enter emoji to know its meaning!!!</h1>
      <input type="text" onChange={handleChangeEvent} />
      <h2 className='output'>{meaning}</h2>
      <h3>Emojis we know!</h3>
      <h2>
        {
          emoji.unicode.map((val, index) => {
            if (index < 111 && index > 1)
              return <span onClick={()=>emojiClickHandler(val)} className='emojis' key={val}>{val}</span>
              return ""
          })
        }
      </h2>
    </div>
  </>
  );
}

export default App;
