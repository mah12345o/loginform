import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1 className="header"> Login-Form </h1>
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
            <div className="footer">
          <button type="button" className="btn">
            Login 
          </button>
          <div className="footer">
         <NavLink to="About">Sign-up </NavLink>
        </div>
        </div>
        </>
    )
}; 
export default Home;
