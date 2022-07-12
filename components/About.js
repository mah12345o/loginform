import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
        <h1 className="header"> New User Register Form </h1>
        <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Re-Enter Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="footer">
          <button type="button" className="btn">
            Submit 
          </button>
        </div>
        <div className="footer">
         <NavLink to="Home">Aready have an Account</NavLink>
        </div>
        </>
        
    )
}; 
export default About ;
