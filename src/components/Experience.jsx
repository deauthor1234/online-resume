import ExpSection from "./ExpSection"

const Experience = () => {
  const endLine = true;
  return (
    <section id="experience">
        <div className="container">
            <p className="heading">Experience</p>
            <div className="exp_wrapper">
              <ExpSection startYear={'2022'} endYear={'2023'} lineCont={true} des={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, ipsam mollitia quod praesentium at quos dolor possimus deleniti ad! Beatae quae soluta at sit maxime corrupti tempore eos quam? Facilis excepturi aliquam nostrum iste similique debitis asperiores maiores corporis, omnis, magni repudiandae mollitia. Sed minus ex earum veniam!'} />
              <ExpSection startYear={'2023'} endYear={'2024'} lineCont={true} des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolor sequi ut! Dicta, alias. Nemo ut inventore pariatur dolor repellendus consectetur at voluptas explicabo, repudiandae laborum officia accusamus quas provident.'} />
              <ExpSection startYear={'2024'} endYear={'2025'} lineCont={false} des={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ex, eius ducimus at incidunt, architecto earum ipsa accusantium, labore vero facilis sint beatae non dolorum perspiciatis fuga eligendi sit quisquam!'} />
            </div>
        </div>
    </section>
  )
}
export default Experience