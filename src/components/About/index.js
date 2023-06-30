import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="template-container">
      <div className="about-box">
        <img
          src="https://t4.ftcdn.net/jpg/04/87/86/21/240_F_487862125_c1a6mXw4esypDn0zXpNsk6D4ojJst8gW.jpg"
          className="about-image"
        />
        <center>
          <p className="paragraph">
            Myself JITTA LOKESH MANI KUMAR,
            <br /> In 2022, I completed my graduation.
            <br /> At Present I am doing a MERN stack certification program in
            NXT Wave.
          </p>
        </center>
      </div>
    </div>
  </>
)

export default About
