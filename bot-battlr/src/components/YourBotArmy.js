import React from 'react'
import BotCard from './BotCard';

function YourBotArmy ({ bots, releaseBot, dischargeBot }) {

  return (
<div className="your-bot-army">
      <h1>Your Bot Army</h1>
      <div className="bot-list-container">
        {bots.map((bot) => (
          <BotCard key={bot.id}
                bot={bot} 
                releaseBot={releaseBot}
                dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy