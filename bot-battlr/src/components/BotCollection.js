import React, { useState, useEffect } from "react"
import '../App.css';

function  BotCollection({ onEnlist }) {

    const [bots, setBots] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/bots')
  .then(response => response.json())
  .then((data) => setBots(data))
}, []);


return (
    <div>
        <h2>Bot Collection</h2>
    <div className="bot-list-container">
            {bots.map((bot) => (
                <div key={bot.id} 
                className="bot-card" 
                onClick={() => onEnlist(bot)}
                >
                    <img src={bot.avatar_url} alt={bot.name} />
                    <h3>{bot.name}</h3>
                    <p>Health: {bot.health}</p>
                    <p>Damage: {bot.damage}</p>
                    <p>Armor: {bot.armor}</p>
                    <p>Class: {bot.bot_class}</p>
                    <p>Catchphrase: {bot.catchphrase}</p>
                    
                     </div>
        ))}
        
    </div>
    </div>
)

}

export default BotCollection;