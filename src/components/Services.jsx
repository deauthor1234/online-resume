import ServiceCard from "./ServiceCard"
import { GiCube, GiFilmProjector, GiPaintBrush, GiPhotoCamera } from 'react-icons/gi';

const Services = () => {
  return (
    <section id="services">
        <div className="container">
            <p className="heading">Services</p>
            <div className="services_grid">
               <ServiceCard 
               icon={<GiCube className='service_ic' />} 
               title={'Graphic Design'} 
               description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit possimus a porro consectetur reiciendis explicabo!'} 
               />
               <ServiceCard aosDelay={"200"}
               icon={<GiPhotoCamera className='service_ic' />} 
               title={'Photography'} 
               description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit possimus a porro consectetur reiciendis explicabo!'} 
               />
               <ServiceCard aosDelay={"400"}
               icon={<GiPaintBrush className='service_ic' />} 
               title={'Photo Retouch'} 
               description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit possimus a porro consectetur reiciendis explicabo!'} 
               />
               <ServiceCard aosDelay={"600"}
               icon={<GiFilmProjector className='service_ic' />} 
               title={'Video Coverage'} 
               description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit possimus a porro consectetur reiciendis explicabo!'} 
               />
            </div>
        </div>
    </section>
  )
}
export default Services