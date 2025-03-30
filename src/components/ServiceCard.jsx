const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className='service'>
            {icon}
            <p className="service_name">{title}</p>
            <p className="service_info">{description}</p>
        </div>
    )
}

export default ServiceCard