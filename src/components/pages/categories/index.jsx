import { NavLink, Outlet } from "react-router-dom";

function Catgeories() {
    return ( <div>
        <ul>
            <li><NavLink className="underline mr-1" to="ships">Ships</NavLink></li> 
            <li><NavLink className="underline" to="planets">Planets</NavLink></li>
        </ul>
        <Outlet />
    </div> );
}

export default Catgeories;