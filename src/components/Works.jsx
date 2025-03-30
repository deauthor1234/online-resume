import pic1 from '../assets/images/pic1.jpg'                
import pic2 from '../assets/images/pic2.jpg'                
import pic3 from '../assets/images/pic3.jpg'                
import pic4 from '../assets/images/pic4.jpg'                
import pic5 from '../assets/images/pic5.jpg'                
import pic6 from '../assets/images/pic6.jpg'                                
import WorkCard from './WorkCard'

const Works = () => {
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6];

    return (
        <section id="works">
            <div className="container">
                <p className="heading">My Works</p>
                <div className="works_grid">
                    {pics.map((picture) => (
                        <WorkCard pic={picture} />
                    ))}
                </div>
            </div>    
        </section>
    )
}
export default Works