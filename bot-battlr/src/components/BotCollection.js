import React from 'react'
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, onSelectBot }) {

  return (
    
    <div>
    <h2>Available Bots</h2>
    <div className="bot-list-container">
      {bots.map((bot) => (
          <BotCard 
          key={bot.id} 
          bot={bot} 
          enlistBot={enlistBot}
          buttonText="Show Specs"
          onClickButton={() => onSelectBot(bot)}
          
          />
        ))}
        </div>
    </div>
  )
}

export default BotCollection;