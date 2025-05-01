import { FaEnvelope, FaGlobe, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact_details">
                    <p className="heading">Get In Touch</p>
                    <p><FaMapMarkerAlt className="form_ic" /> Portharcourt, Eleme, Rivers State</p> 
                    <p><FaEnvelope className="form_ic" /> royalart@gmail.com</p>  
                    <p><FaPhoneAlt className="form_ic" /> +234-555-555-5555</p>  
                    <p><FaGlobe className="form_ic" /> <a href="#">www.royalart.me</a></p> 
                    <p><FaLinkedin className="form_ic" /> <a href="#">Linkedin Profile</a></p> 
                    <p><SiUpwork className="form_ic" /> <a href="#">Upwork Profile</a></p>
                </div>
                <form>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="text" name="title" id="title" placeholder="Subject" />
                    <textarea name="message" id="message" placeholder="Message..." rows="6"></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    )
}

export default Contact