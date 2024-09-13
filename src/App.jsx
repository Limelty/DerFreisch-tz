import './App.css'
import video from './image/Background2.mp4'
import Navbar from './Component/Navbar/Navbar'
import car1 from './image/AE86.jpg'
import car2 from './image/Ferrari1987.jpg'

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

        <div className="Page" id='Page'>
          <div className="container">
            <h1>Latest News & Article:</h1>
            <div className="Article">
            <div className="Blog1">
              <div className="image"></div>
              <div className="text">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, ratione impedit corrupti rerum possimus quod quasi voluptatum velit officiis accusamus nihil enim pariatur eaque nam ipsam eveniet reprehenderit expedita veritatis delectus magnam laudantium ducimus alias maxime? Magni cupiditate sed quod.</p>
              </div>
            </div>
            <div className="Blog2">
              <div className="image"></div>
              <div className="text">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sunt consequuntur assumenda? Perferendis rerum ipsum magni nostrum? Totam voluptas dolore animi quam! Veritatis distinctio quae perferendis ullam quam necessitatibus alias eos exercitationem iure possimus fugiat autem repellat, unde itaque! Repellat, velit maxime excepturi obcaecati aliquam tempora. Perferendis aut illo quaerat.</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="box2"></div>

        <div className="Contact" id='Contact'>
          <div className="section1">
            <h1>How Can We Help Today?</h1>
            <h2>Get Special Offer Today!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, placeat.</p>
            <button>Contact Now</button>
          </div>
          <div className="section2">
            <div className="image"></div>
            <div className="text">
              <h1>Contact Us:</h1>
              <ul>
                <li><p>Email: Example@gmail.com</p></li>
                <li><p>Telp: +1-111-111</p></li>
                <li><p>JL: Example Road</p></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          
        </div>
      </footer>
    </>
  )
}

export default App
