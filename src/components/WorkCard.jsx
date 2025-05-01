import { FaExternalLinkAlt } from 'react-icons/fa'

const WorkCard = ({ pic, index }) => {
  return (
    <div className="work" data-aos="zoom-in" data-aos-delay={`${index}00`}>
        <img className='work_img' src={pic} />
        <a href={pic} alt={`royalart_work_pic${index+1}`} className='img_link'><FaExternalLinkAlt className='work_ic' /></a>
    </div>
  )
}

export default WorkCard