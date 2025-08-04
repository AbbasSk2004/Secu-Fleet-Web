import React from 'react';
import Image from 'next/image';

const WorldwideOffices = () => {
  return (
    <section className="worldwide">
      <div className="map-worldwide">
        <h2>We Are Worldwide</h2>
        <img className="worldMap" src="https://i.ibb.co/2KBVcMK/mapWLoc.png" alt="World Map" />
        <div className="location" id="new-york">
          <h3>Our Locations</h3>
          <div className="flag lebanon">
            <Image src="/assets/images/contact/Flags/lebanon.png" alt="Lebanon Flag" width={50} height={50} />
            <p>Lebanon</p>
          </div>
          <div className="flag france">
            <Image src="/assets/images/contact/Flags/france.png" alt="France Flag" width={50} height={50} />
            <p>France</p>
          </div>
          <div className="flag nigeria">
            <Image src="/assets/images/contact/Flags/nigeria.png" alt="Nigeria Flag" width={50} height={50} />
            <p>Nigeria</p>
          </div>
          <div className="flag cote">
            <Image src="/assets/images/contact/Flags/cote.png" alt="Cote d&apos;Ivoire Flag" width={50} height={50} />
            <p>Cote d&apos;Ivoire</p>
          </div>
          <div className="flag drc">
            <Image src="/assets/images/contact/Flags/congo.png" alt="DRC Flag" width={50} height={50} />
            <p>DRC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwideOffices; 