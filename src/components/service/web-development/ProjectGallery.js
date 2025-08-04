"use client";

import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectGallery = () => {
  const projects = [
    // Restaurants
    {
      id: 1,
      type: 'Type1',
      title: 'FinStep',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/rest/gusto/main.png',
        '/assets/images/works/web/rest/gusto/ourSpecial.png',
        '/assets/images/works/web/rest/gusto/ourStory.png',
        '/assets/images/works/web/rest/gusto/menu1.png',
        '/assets/images/works/web/rest/gusto/menu2.png',
        '/assets/images/works/web/rest/gusto/contact.png'
      ],
      mainImage: '/assets/images/works/web/rest/gusto/main.png'
    },
    {
      id: 2,
      type: 'Type1',
      title: 'Cafe House',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/rest/cafeHouse/main.png',
        '/assets/images/works/web/rest/cafeHouse/about.png',
        '/assets/images/works/web/rest/cafeHouse/popular.png',
        '/assets/images/works/web/rest/cafeHouse/menu.png',
        '/assets/images/works/web/rest/cafeHouse/contact.png'
      ],
      mainImage: '/assets/images/works/web/rest/cafeHouse/main.png'
    },
    {
      id: 3,
      type: 'Type1',
      title: 'Live Dinner',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/rest/LiveDinner/home.png',
        '/assets/images/works/web/rest/LiveDinner/about.png',
        '/assets/images/works/web/rest/LiveDinner/menu.png',
        '/assets/images/works/web/rest/LiveDinner/gallery.png',
        '/assets/images/works/web/rest/LiveDinner/footer.png'
      ],
      mainImage: '/assets/images/works/web/rest/LiveDinner/home.png'
    },
    {
      id: 14,
      type: 'Type1',
      title: 'Le Street four Lebanise',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/rest/mana2esh/home1.png',
        '/assets/images/works/web/rest/mana2esh/home2.png',
        '/assets/images/works/web/rest/mana2esh/home3.png',
        '/assets/images/works/web/rest/mana2esh/home4.png',
        '/assets/images/works/web/rest/mana2esh/home5.png',
        '/assets/images/works/web/rest/mana2esh/home6.png',
        '/assets/images/works/web/rest/mana2esh/home7.png'
      ],
      mainImage: '/assets/images/works/web/rest/mana2esh/home1.png'
    },
    // Admin Pages
    {
      id: 4,
      type: 'Type2',
      title: 'Shopping Admin Page',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/admin/admin1/home1.png',
        '/assets/images/works/web/admin/admin1/home2.png',
        '/assets/images/works/web/admin/admin1/home3.png',
        '/assets/images/works/web/admin/admin1/login.png',
        '/assets/images/works/web/admin/admin1/products.png',
        '/assets/images/works/web/admin/admin1/addProduct.png',
        '/assets/images/works/web/admin/admin1/accounts2.png',
        '/assets/images/works/web/admin/admin1/accounts3.png'
      ],
      mainImage: '/assets/images/works/web/admin/admin1/home1.png'
    },
    {
      id: 11,
      type: 'Type2',
      title: 'Admin Page',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/admin/admin2/admin.PNG',
        '/assets/images/works/web/admin/admin2/invoicenew1.PNG',
        '/assets/images/works/web/admin/admin2/invoicenew2.PNG',
        '/assets/images/works/web/admin/admin2/not.PNG',
        '/assets/images/works/web/admin/admin2/not1.PNG',
        '/assets/images/works/web/admin/admin2/pagesnew1..PNG',
        '/assets/images/works/web/admin/admin2/signinew1.PNG',
        '/assets/images/works/web/admin/admin2/tables1.PNG',
        '/assets/images/works/web/admin/admin2/tables2.PNG',
        '/assets/images/works/web/admin/admin2/tables3.PNG'
      ],
      mainImage: '/assets/images/works/web/admin/admin2/admin.PNG'
    },
    // Hotels
    {
      id: 5,
      type: 'Type3',
      title: 'Ski Resort',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/hotel/hotel1/home.png',
        '/assets/images/works/web/hotel/hotel1/features.png',
        '/assets/images/works/web/hotel/hotel1/booking1.png',
        '/assets/images/works/web/hotel/hotel1/booking2.png',
        '/assets/images/works/web/hotel/hotel1/special offers.png',
        '/assets/images/works/web/hotel/hotel1/testom.png',
        '/assets/images/works/web/hotel/hotel1/footer.png'
      ],
      mainImage: '/assets/images/works/web/hotel/hotel1/home.png'
    },
    {
      id: 12,
      type: 'Type3',
      title: 'Hotel',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/hotel/hotel2/L1.png',
        '/assets/images/works/web/hotel/hotel2/L2.png',
        '/assets/images/works/web/hotel/hotel2/L4.png',
        '/assets/images/works/web/hotel/hotel2/L5.png',
        '/assets/images/works/web/hotel/hotel2/L6.png',
        '/assets/images/works/web/hotel/hotel2/L7.png',
        '/assets/images/works/web/hotel/hotel2/L8.png',
        '/assets/images/works/web/hotel/hotel2/L9.png'
      ],
      mainImage: '/assets/images/works/web/hotel/hotel2/L1.png'
    },
    {
      id: 13,
      type: 'Type3',
      title: 'Construction',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/hotel/hotel3/home1.png',
        '/assets/images/works/web/hotel/hotel3/home2.png',
        '/assets/images/works/web/hotel/hotel3/home3.png',
        '/assets/images/works/web/hotel/hotel3/home4.png',
        '/assets/images/works/web/hotel/hotel3/home5.png',
        '/assets/images/works/web/hotel/hotel3/home6.png'
      ],
      mainImage: '/assets/images/works/web/hotel/hotel3/home1.png'
    },
    // Cars
    {
      id: 6,
      type: 'Type4',
      title: 'Car Rental',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/CarRental/car1/home2.png',
        '/assets/images/works/web/CarRental/car1/home1.png',
        '/assets/images/works/web/CarRental/car1/about.png'
      ],
      mainImage: '/assets/images/works/web/CarRental/car1/home2.png'
    },
    // Construction
    {
      id: 7,
      type: 'Type5',
      title: 'Construction',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/construction/constuction1/home1.png',
        '/assets/images/works/web/construction/constuction1/home2.png',
        '/assets/images/works/web/construction/constuction1/services1.png',
        '/assets/images/works/web/construction/constuction1/about.png',
        '/assets/images/works/web/construction/constuction1/testom.png',
        '/assets/images/works/web/construction/constuction1/featured.png',
        '/assets/images/works/web/construction/constuction1/featured2.png',
        '/assets/images/works/web/construction/constuction1/feature3.png',
        '/assets/images/works/web/construction/constuction1/contact.png',
        '/assets/images/works/web/construction/constuction1/numbers.png',
        '/assets/images/works/web/construction/constuction1/blog.png',
        '/assets/images/works/web/construction/constuction1/footer.png',
        '/assets/images/works/web/construction/constuction1/404.png'
      ],
      mainImage: '/assets/images/works/web/construction/constuction1/home1.png'
    },
    {
      id: 8,
      type: 'Type5',
      title: 'Construction',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/construction/construction2/home1.png',
        '/assets/images/works/web/construction/construction2/about.png',
        '/assets/images/works/web/construction/construction2/team.png',
        '/assets/images/works/web/construction/construction2/features.png',
        '/assets/images/works/web/construction/construction2/projects.png',
        '/assets/images/works/web/construction/construction2/recent.png',
        '/assets/images/works/web/construction/construction2/footer.png'
      ],
      mainImage: '/assets/images/works/web/construction/construction2/home1.png'
    },
    // Interior Design
    {
      id: 10,
      type: 'Type6',
      title: 'Interior Design',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/InteriorDesign/home1.png',
        '/assets/images/works/web/InteriorDesign/home2.png',
        '/assets/images/works/web/InteriorDesign/home3.png',
        '/assets/images/works/web/InteriorDesign/home4.png',
        '/assets/images/works/web/InteriorDesign/home5.png',
        '/assets/images/works/web/InteriorDesign/home6.png',
        '/assets/images/works/web/InteriorDesign/home7.png'
      ],
      mainImage: '/assets/images/works/web/InteriorDesign/home1.png'
    },
    {
      id: 15,
      type: 'Type6',
      title: 'Interior Design',
      description: 'We work hard on every app to deliver top-notch features with great UI that you won\'t find anywhere else.',
      images: [
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home1.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home2.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home3.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home4.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home5.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home6.png',
        '/assets/images/works/web/InteriorDesign/interiorDesign2/home7.png'
      ],
      mainImage: '/assets/images/works/web/InteriorDesign/interiorDesign2/home1.png'
    }
  ];

  return (
    <div className="row row-30 isotope" data-isotope-layout="fitRows" data-isotope-group="gallery" data-lightgallery="group">
      {projects.map((project) => (
        <div key={project.id} className={`col-sm-6 col-lg-4 col-xxl-3 isotope-item ${project.type} wow`} data-filter={project.type}>
          <ProjectItem project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery; 