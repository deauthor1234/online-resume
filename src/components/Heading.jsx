const Heading = ({ headingTxt, animName }) => {
    return (
        <p className="heading" data-aos={animName}>{headingTxt}</p>
    )
}

export default Heading