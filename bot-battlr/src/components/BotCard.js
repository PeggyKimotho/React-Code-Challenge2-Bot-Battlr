import React from 'react'

function BotCard({ bot, enlistBot, releaseBot, dischargeBot , buttonText, onClickButton,showEnlistButton,  showSpecsView }) {
    
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


    {onClickButton && (
        <button onClick={onClickButton}>
          {buttonText}
        </button>
      )}

    {showSpecsView && (
        <div>
          {/* Additional descriptions only available in "Show Specs" view */}
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Created at: {bot.created_at}</p>
        <p>Updated at: {bot.updated_at}</p>
        </div>
    )}
    
    
    {enlistBot &&   (
        <button onClick={handleEnlist}> Enlist </button> )}

    {releaseBot && <button onClick={handleRelease}>Release</button>}
    {dischargeBot && <button onClick={handleDischarge}>Discharge Forever</button>}

</div>
);
};



export default BotCard