import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';


function YourBotArmy() {
    const [yourBotArmy, setYourBotArmy] = useState([])

    const onEnlist = (bot) => {
        const isEnlisted = yourBotArmy.some((b) => b.id === bot.id);
            if (!isEnlisted && yourBotArmy.length < 3) {
          setYourBotArmy([...yourBotArmy, bot]);
        }
      };
   
    const onRelease = (bot) => {
        const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

      const onDischarge = (bot) => {
        
        fetch(`http://localhost:3000/bots/${bot.Id}`, 
        { method: 'DELETE' })
          .then(() => {
            const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
            setYourBotArmy(updatedArmy);
          })
          .catch((error) => console.error('Error discharging bot:', error));
      };

      return (
        <div className="your-bot-army">
          <h2>Your Bot Army</h2>
          <div className='enlisted'>
            {yourBotArmy.map((bot) => (
              <div key={bot.id} className='bot-card' onClick={() => onRelease(bot)}>
                <img src={bot.avatar_url} alt={bot.name} />
                <h3>{bot.name}</h3>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Class: {bot.bot_class}</p>
                <p>Catchphrase: {bot.catchphrase}</p>
                
                <button onClick={() => onDischarge(bot)}>Discharge</button>
              </div>
            ))}
              </div>
              <BotCollection onEnlist={onEnlist} />

              </div>
      
      );

}

export default YourBotArmy