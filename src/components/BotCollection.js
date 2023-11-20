import React,{useState, useEffect} from "react";
import BotCard from './BotCard';
import YourBotArmy from "./YourBotArmy";

function BotCollection(){
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]);



useEffect(() => {
  fetch('http://localhost:3000/bots')
  .then(res => res.json())
  .then((data) => {
    setBots(data);
  });
    
}, [enlistedBots]);
function handleEnlistBot(bot) {
  if (!enlistedBots.find(enlistedBot => enlistedBot.name === bot.name)) {
    setEnlistedBots([...enlistedBots, bot]);
}
};
function handleReleaseBot(bot) {
  const updatedEnlistedBots = enlistedBots.filter(
    enlistedBot => enlistedBot.name !== bot.name
);
setEnlistedBots(updatedEnlistedBots);
};
function handleDischargeBot(bot) {
  setEnlistedBots((prevEnlistedBots)=>{
    const updatedEnlistedBots = prevEnlistedBots.filter((enlistedBot)=> enlistedBot.id !== bot.id);
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json());
    .then(()=>{
      setEnlistedBots(updatedEnlistedBots);
    })
    return updatedEnlistedBots;
  })
}

  // const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
  // setEnlistedBots(updatedEnlistedBots);

    // Update the state immediately using a callback function
    //setEnlistedBots((prevEnlistedBots) => {
      // Ensure that the state is not overwritten by other updates
    //   if (JSON.stringify(prevEnlistedBots) === JSON.stringify(enlistedBots)) {
    //     return updatedEnlistedBots;
    //   }
    //   return prevEnlistedBots;
    // });
  
  //   fetch(`http://localhost:3000/bots/${bot.id}`, {
  //     method: 'DELETE',
  //   }).then((response) => response.json());
    
  // setEnlistedBots([... enlistedBots, bot]);
  // };
   
  
  


console.log(bots)
return(
    <div>
        <h1>Bot Collection</h1>
        <YourBotArmy enlistedBots={enlistedBots} onRelease={handleReleaseBot} onDischarge={handleDischargeBot}/>
        <div style={{
     display: 'grid', 
     gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: 'minmax(200px, auto)', 
      gap: '10px' }}>{bots.map((bot)=>(
        <BotCard key={bot.id} bot={bot} onEnlist={()=>handleEnlistBot(bot)}  />))}
        
        </div>
       


    </div>
)
      }

export default BotCollection;