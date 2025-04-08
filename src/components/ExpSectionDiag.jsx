import { BsCircle } from 'react-icons/bs';

const ExpSectionDiag = ({ year, lineCont }) => {
  return (
    <div className='exp_diag' data-aos="fade-out">
        <p><span>{year}</span></p>
        <div className="diag">
            <BsCircle className='circle' />
            { lineCont && <div className="line"></div> }
        </div>
    </div>
  )
}
export default ExpSectionDiag