import ExpSectionDiag from "./ExpSectionDiag"

const ExpSection = ({ startYear, endYear, lineCont, des }) => {
    return (
        <div className="exp">
            <ExpSectionDiag year={startYear} lineCont={lineCont} />
            <p className="exp_des" data-aos="fade-in"><span>{startYear} - {endYear}</span><br />{des}</p>
        </div>
    )
}

export default ExpSection