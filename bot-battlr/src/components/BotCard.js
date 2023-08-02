import React from 'react'

function BotCard({ bot, enlistBot, releaseBot, dischargeBot , buttonText, onClickButton,showEnlistButton }) {
    
    //function to handle setBot
    const handleEnlist = () => {
        enlistBot(bot);
    };

    const handleRelease = () => {
        releaseBot(bot.id);
    };

    const handleDischarge = () => {
        dischargeBot(bot.id);
    };

  return (

    <div className="bot-card">
    <img src={bot.avatar_url} alt={bot.name} />
    <h3>{bot.name}</h3>
    <p>Class: {bot.bot_class}</p>
    <p>Health: {bot.health}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>

    
    
    {enlistBot &&   (
        <button onClick={handleEnlist}> Enlist </button> )}

    {releaseBot && <button onClick={handleRelease}>Release</button>}
    {dischargeBot && <button onClick={handleDischarge}>Delete</button>}

</div>
);
};



export default BotCard