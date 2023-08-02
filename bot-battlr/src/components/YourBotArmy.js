import React from 'react'
import BotCard from './BotCard';

function YourBotArmy ({ bots, releaseBot, dischargeBot }) {

  return (
<div>
      <h2>Your Bot Army</h2>
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