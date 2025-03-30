import profile from "../assets/images/profile.jpg"

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="content">
                <div className="profile_img_wrapper">
                  <img className="profile_img" src={profile} alt="profile" />
                </div>
                <div className="text">
                  <p className="my_name">Oladapo Royal</p>
                  <p className="doc_info">Resume / Portfolio</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero