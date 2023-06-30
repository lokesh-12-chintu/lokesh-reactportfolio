import './index.css'
import Header from '../Header'

const Profile = () => (
  <>
    <Header />
    <div className="template-container">
      <div className="contact-box">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
          className="profile-image"
        />
        <div>
          <div className="small-box">
            <p className="para-2">Name</p>
            <p className="para-2">Lokesh Mani Kumar</p>
          </div>
          <div className="small-box">
            <p className="para-2">D.O.B</p>
            <p className="para-2">Aug 20 2001</p>
          </div>
          <div className="small-box">
            <p className="para-2">Mobile.No</p>
            <p className="para-2">8688533502</p>
          </div>
          <div className="small-box">
            <p className="para-2">Gmail</p>
            <p className="para-2">jittalokeshmanikumar@gmail.com</p>
          </div>
          <div className="small-box">
            <p className="para-2">Location</p>
            <a href="https://goo.gl/maps/7PufKSCsawSS3U2b7" className="para-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/535/535137.png"
                className="location-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Profile
