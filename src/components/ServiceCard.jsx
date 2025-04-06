const ServiceCard = ({ icon, title, description, aosDelay }) => {
    return (
        <div className='service' data-aos="fade-in" data-aos-delay={aosDelay}>
            {icon}
            <p className="service_name">{title}</p>
            <p className="service_info">{description}</p>
        </div>
    )
}

export default ServiceCard