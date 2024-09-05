import './App.css'
import video from './image/Background2.mp4'
import Navbar from './Component/Navbar/Navbar'
import car1 from './image/AE86.jpg'
import car2 from './image/Ferrari1987.jpg'
import wolf1 from './image/Wolf1.jpg'

function App() {
  return (
    <>
      <Navbar/>

      <header id='Home'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>

       <div className="text">
       <h2>LOOKING FOR THE RIGHT VEHICLE</h2>
       <h1><span>OPTIMIZATIONS</span> SERVICES?</h1>
       <button>Book an Appointment Now</button>
       </div>
      </header>

      <main>
        <div className="About-Us" id='About Us'>
          <div className="image">
            <div className="card1">
              <img src={car1} alt="" />
            </div>
            <div className="card2">
              <img src={car2} alt="" />
            </div>
          </div>

          <div className="text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero numquam porro aperiam vero eius nobis, dolorem sit corporis exercitationem cumque quis, quo deleniti. Soluta possimus tempora, culpa dolorem recusandae voluptatem unde aspernatur quod repudiandae illo error exercitationem autem vel aliquam minima ex eveniet rem maiores magni similique quibusdam animi eaque excepturi.</p>
            <p>Dolorum vero quod ut iusto velit voluptatibus ratione ipsa, molestiae asperiores iste suscipit exercitationem perferendis obcaecati tenetur praesentium expedita? Dolore asperiores voluptate itaque. Labore, quibusdam! Fugit minima tempore laboriosam, quae repellat corporis soluta blanditiis aliquid harum est veritatis veniam modi illo voluptates quos, beatae iusto maiores? Velit, nobis sit.</p>
          </div>
        </div>

        <div className="Services" id='Services'>
          <h1>Our Service:</h1>
          <div className="container">
            <div className="option1">
              <div className="text">
                <h1>[Option 1]</h1>
                <ul>
                  <li>[Insert Text Here]</li>
                  <li>[Insert Text Here]</li>
                  <li>[Insert Text Here]</li>
                  <li>[Insert Text Here]</li>
                  <li>[Insert Text Here]</li>
                </ul>
              </div>
            </div>
            <div className="option2">
              <div className="text">
              <h1>[Option 2]</h1>
              <ul>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              </ul>
              </div>
            </div>
            <div className="option3">
              <div className="text">
              <h1>[Option 3]</h1>
              <ul>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              <li>[Insert Text Here]</li>
              </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="box1"></div>

        <div className="Contact" id='Contact'>
          <div className="container">
            <div className="Owner">
              <div className="image"></div>
              <div className="text">
                <h1>Contact:</h1>
                <ul>
                  <li>Email: Example@gmail.com</li>
                  <li>Phone: +1-111-111</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="box2"></div>

        <div className="Page">

        </div>
      </main>
    </>
  )
}

export default App
