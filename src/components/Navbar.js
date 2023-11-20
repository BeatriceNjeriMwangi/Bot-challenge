import {Link, NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <>
        <NavLink to="/">BotCollection</NavLink> | 

        <NavLink to="/army">YourBotArmy</NavLink> |
        </>
    )
}
export default Navbar;