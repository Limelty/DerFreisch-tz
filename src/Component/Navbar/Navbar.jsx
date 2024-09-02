import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <div className="left">
                <h1>Element</h1>
            </div>
            <div className="center">
                <ul>
                   <li><a href="#Home">Home</a></li>
                   <li><a href="#About">About Us</a></li>
                   <li><a href="#Service">Service</a></li>
                   <li><a href="#Contact Us">Contact Us</a></li>
                   <li><a href="#Page">Page</a></li>
                </ul>
            </div>
            <div className="right">
                <button>Get an Appointment</button>
            </div>
        </nav>
    )
}

export default Navbar