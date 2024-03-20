import React from 'react'

const MapComponent = () => {
    return (
      
            <section className="wrapper bg-light ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12 ">
                        {/* <iframe src="https://goo.gl/maps/fkbHJcvDJ8gquJpW6" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.405439803944!2d73.8903602!3d15.354513299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb73f2b13b8a1%3A0x95267d3a22384ba8!2sVillage%20Panchayat%20Velsao-Pale-Issorcim!5e0!3m2!1sen!2sin!4v1710139329140!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

export default MapComponent
