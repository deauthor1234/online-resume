const Skill = ({ value, title }) => {
    return (
        <div className="skill">
            <div className="first_section">
                <div className="progressbar_wrapper">
                    <div className="progressbar" style={{width: value}} data-aos="fade-right" data-aos-delay="400"  data-aos-easing="ease-out"></div>
                </div>
                <p className="skill_value" data-aos="fade-up">{value}</p>
            </div>
            <p className="skill_title" data-aos="fade">{title}</p>
        </div>
    )
}

export default Skill