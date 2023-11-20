import React from 'react';
import BotCard from './BotCard';


function YourBotArmy({enlistedBots,onRelease,onDischarge}){
    

    return (
        <div>
            <h1>Bot Army</h1>
            {enlistedBots.map((bot)=>(
                <div key={bot.id}>
                    <button onClick={()=>onRelease(bot)}>Release</button>
                    <button onClick={()=>onDischarge(bot)} >X</button>
                <BotCard bot={bot} />
                </div>
            ))}
        </div>
    );
}
export default YourBotArmy;