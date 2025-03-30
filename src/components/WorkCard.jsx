import { FaExternalLinkAlt } from 'react-icons/fa'

const WorkCard = ({ pic }) => {
  return (
    <div className="work">
        <img className='work_img' src={pic} />
        <a href={pic} className='img_link'><FaExternalLinkAlt className='work_ic' /></a>
    </div>
  )
}

export default WorkCard