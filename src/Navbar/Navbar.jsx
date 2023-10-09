import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/about us'>About Us</NavLink></li>
    <li><NavLink to='/explore'>Explore</NavLink></li>
    </>
    /*button(login page) dynamic form*/
    const loginLink=<>
      <NavLink to='/login'>Login</NavLink>
    </>
     /*button(register page) dynamic form*/
     const registerLink=<>
     <NavLink to='/register'>Register</NavLink>
   </>


    return (
        <div className="my-4 font-poppins text-cyan-500 ">
            <div className="navbar bg-base-100">
                 <div className="navbar-start">
             <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks }
            </ul>
            </div>
            <h1 className="font-extrabold text-2xl"><span className="text-gray-700">FIT</span>NESS</h1>
            </div>
        <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end ">
    <button className="btn text-cyan-500 hover:text-white hover:bg-sky-700 px-8"> {loginLink}</button>
    <button className="btn text-cyan-500 hover:text-white hover:bg-sky-700"> {registerLink}</button>
  </div>
</div>
<div>
            <img src="src\assets\frontpicture.jpg" alt="" />
        </div>
            
</div>
    );
};

export default Navbar;