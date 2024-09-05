import './Navbar.css'
import logo from './image/Logo2.svg'

const Navbar = () =>{
    return(
        <nav>
           <div className="logo">
                <img src={logo} alt="Company Logo"/>
                <h1>Der Freischütz</h1>
           </div>
           <div className="navigation">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Page">Page</a></li>
                </ul>
           </div>
        </nav>
    )
}

export default Navbar