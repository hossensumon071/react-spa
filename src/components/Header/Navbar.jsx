import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <ul className="menu-area">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar