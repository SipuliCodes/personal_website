import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className='item1'>
      <div></div>
      <nav className="navigation">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending navButton" : isActive ? "active navButton" : "passive navButton"}> Home </NavLink>
        <NavLink to="/weather" className={({ isActive, isPending }) => isPending ? "pending navButton" : isActive ? "active navButton" : "passive navButton"}> Weather </NavLink>
        <NavLink to="/roadmap" className={({ isActive, isPending}) => isPending ? "pending navButton" : isActive ? "active navButton" : "passive navButton"}>Roadmap</NavLink>
      </nav>
      <div></div>
    </div>
  )
}

export default Header