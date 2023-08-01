import React from 'react';

const SelectedBotDetails = ({ selectedBots }) => {
  return (
    <div className="selected-bot-section">
      {selectedBots && selectedBots.length > 0 ? (
        selectedBots.map((bot) => (
          <div key={bot.id} className="selected-bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
          </div>
        ))
      ) : (
        <p>No bots selected.</p>
      )}
    </div>
  );
};

export default SelectedBotDetails;

