import { BsArrowRightShort } from 'react-icons/bs'
import pic1 from '../assets/images/pic1.jpg'                
import pic2 from '../assets/images/pic2.jpg'                
import pic3 from '../assets/images/pic3.jpg'                
import pic4 from '../assets/images/pic4.jpg'                
import pic5 from '../assets/images/pic5.jpg'                
import pic6 from '../assets/images/pic6.jpeg'                                
import Heading from './Heading'
import WorkCard from './WorkCard'

const Works = () => {
    const firstPics = [pic1, pic2, pic3];
    const secondPics = [pic4, pic5, pic6];

    return (
        <section id="works">
            <div className="container">
                <Heading headingTxt={"My Works"} />
                <div className="work_grid_wrapper">
                    <p className="work_division">Photographs</p>
                    <div className="works_grid">
                        {firstPics.map((picture, index) => (
                            <WorkCard pic={picture} key={index} index={index} />
                        ))}
                    </div>
                    <p className="work_division spaced">Designs & Manupulations</p>
                    <div className="works_grid">
                        {secondPics.map((picture, index) => (
                            <WorkCard pic={picture} key={index} index={index} />
                        ))}
                    </div>
                </div>
                <div className="view_more_wrapper">
                  <a className="view_more" href='#'>View More <BsArrowRightShort className='view_more_ic' /></a> 
                </div>
            </div>    
        </section>
    )
}
export default Works