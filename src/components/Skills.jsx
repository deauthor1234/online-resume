import Skill from "./Skill"

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <p className="heading">Skills</p>
                <div className="skills_wrapper">
                    <Skill value={"85%"} title={"Graphics Design"} />
                    <Skill value={"90%"} title={"Photography"} />
                    <Skill value={"95%"} title={"Photo Retouch"} />
                    <Skill value={"70%"} title={"Videography"} />
                </div>
            </div>
        </section>
    )
}

export default Skills