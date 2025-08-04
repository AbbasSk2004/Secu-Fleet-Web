import React from 'react';
import '../../assets/css/industrySlider.css';

const IndustrySlider = () => {
  return (
    <section className="industrySlider" style={{ backgroundColor: '#081f3e', paddingBottom: '3%' }}>
      <div className="expertise-section">
        <h1 className="Ih1">Bridging the Gap between trusted partners & leading OEMs compatibilities</h1>
        <div className="expertise-points">
          <div className="expertise-point">
            <img src="https://i.ibb.co/cLyzWcd/number1.png" loading="lazy" alt="number 1 icon" />
            <p className="Ifeature-text">Drive success with AI-enabled Fleet solutions gaining up to 40% in productivity</p>
          </div>
          <div className="expertise-point">
            <img src="https://i.ibb.co/pKF5H8V/number2.png" loading="lazy" alt="number 2 icon" />
            <p>Aligning industry leaders with OEM Perfection</p>
          </div>
          <div className="expertise-point">
            <img src="https://i.ibb.co/k9c6gGL/number3.png" loading="lazy" alt="number 3 icon" />
            <p className="Ifeature-text">Harnessing data analytics for a greener sustainable future</p>
          </div>
        </div>
      </div>
      
      <div className="Islider-container">
        <div className="Iarrow left" id="IprevArrow"></div>
        <div className="Iarrow right" id="InextArrow"></div>

        <div className="Islider">
          <div className="Islide">
            <img src="https://i.ibb.co/88tc88W/car.png" loading="lazy" alt="Car Tracking" />
            <div className="Islide-caption"><b>Car Tracking</b></div>
          </div>
          <div className="Islide">
            <img src="/assets/images/mercedes.webp" loading="lazy" alt="mercedes" />
            <div className="Islide-caption"><b>GPS Tracking</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/hcMPhtP/motor.png" loading="lazy" alt="Motor Tracking" />
            <div className="Islide-caption"><b>Moto</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/fktQhZz/drifting.png" loading="lazy" alt="driver drifting" />
            <div className="Islide-caption"><b>Driver Behaviour</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/G0sRGJd/shipping.png" loading="lazy" alt="Shipping Tracking" />
            <div className="Islide-caption"><b>Shipping</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/vZ3Fhx8/cruise.png" loading="lazy" alt="Cruise Ship" />
            <div className="Islide-caption"><b>Cruise Ship</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/bFhjgJD/airplane.png" loading="lazy" alt="Airplane Tracking" />
            <div className="Islide-caption"><b>Logistics</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/4WgGSDF/taxi.png" loading="lazy" alt="Taxi Tracking" />
            <div className="Islide-caption"><b>Rental & taxi</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/hcydsdk/emergency.png" loading="lazy" alt="Emergency Vehicles tracking" />
            <div className="Islide-caption"><b>Emergency Vehicles</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/VD6S0Fm/construction.png" loading="lazy" alt="Construction Site equipment tracking" />
            <div className="Islide-caption"><b>Construction Site</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/HFPpSX3/agriculture.png" loading="lazy" alt="Agriculture equipment tracking" />
            <div className="Islide-caption"><b>Agriculture</b></div>
          </div>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default IndustrySlider; 