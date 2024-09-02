import './About.css';
import image1 from 'Automotive/src/Picture/Sekiro.jpg'

const About = () => {
    return(
        <div className="About_Us" id='About'>
            <div className="container_img">
                <div className="image1">
                    <img src={image1} alt="" />
                </div>
                <div className="image2"></div>
            </div>
            <div className="container_txt">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore enim dolor excepturi autem architecto commodi?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab tenetur, consectetur consequuntur, dignissimos, veniam tempore commodi ut aperiam recusandae tempora iusto laudantium. Soluta magni repudiandae autem adipisci eum nesciunt qui officia, amet, nobis consequuntur ab, assumenda ullam sed nisi! Pariatur vel ullam soluta est error quidem excepturi possimus. Accusamus?</p>
                <button>Discover More</button>
            </div>
        </div>
    )
}

export default About