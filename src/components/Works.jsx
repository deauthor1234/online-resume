import pic1 from '../assets/images/pic1.jpg'                
import pic2 from '../assets/images/pic2.jpg'                
import pic3 from '../assets/images/pic3.jpg'                
import pic4 from '../assets/images/pic4.jpg'                
import pic5 from '../assets/images/pic5.jpg'                
import pic6 from '../assets/images/pic6.jpg'                                
import Heading from './Heading'
import WorkCard from './WorkCard'

const Works = () => {
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6];

    return (
        <section id="works">
            <div className="container">
                <Heading headingTxt={"My Works"} />
                <div className="works_grid">
                    {pics.map((picture, index) => (
                        <WorkCard pic={picture} key={index} index={index} />
                    ))}
                </div>
            </div>    
        </section>
    )
}
export default Works