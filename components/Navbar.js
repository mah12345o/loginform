 import { NavLink } from "react-router-dom";
 const Navbar = () => {
    return (
        <>
        <ul>
            <li><NavLink  to='/' >login</NavLink></li>
              <li> <NavLink  to='/About' >Registeration Form</NavLink></li>
              
        
          
        </ul>
        </>
    )
}
export default Navbar ;
