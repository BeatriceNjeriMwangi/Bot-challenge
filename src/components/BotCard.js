import React from "react";

function BotCard({bot, onEnlist}){
    console.log(bot)
    
    
    
      return (
        <div>
          
          
            
                <img src={bot.avatar_url} alt={bot.name} style={{backgroundColor:"blue"}} />
                <p>Name: {bot.name}</p>
                <p>{bot.description}</p>
                <p>{bot.catchphrase}</p>
                <p>{bot.health}</p>
                <p>{bot.damage}</p>
                <p>{bot.armor}</p>
            
         <button onClick={() => onEnlist(bot)}>Enlist</button>
       
        </div>
      );
    }
    
    export default BotCard;
