/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

export default function Retreats() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: { url: string, alt: string}) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const beliezeImages = [
    {
      url: '/belize/conch-and-yoga-tattoo.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/conch-mat-holders.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/crane.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/dive-boat.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/final-parting-pic.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/girl-from-nashville-ok-sign.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/lizard.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/ocean-view.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/on-the-dive-boat.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/palm-trees.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/pool-ocean.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/scuba-tanks.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/tony-getting-certified.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-and-couple-from-nashville.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-in-urdvah-hastasana.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-sup.jpg ',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-teaching-on-pier.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-teaching-on-pier2.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/wendy-teaching-triangle-pose.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
    {
      url: '/belize/yoga retreat pic.jpg',
      alt: 'conch-and-yoga-tattoo',
    },
  ];

const dominicaImages = [  
  {
    url: '/dominica/side-angle.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/hiking.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/reverse-warrior.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/yoga-pond.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/dominica-view.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/wendy-kayaking-dominica.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/pool _ocean.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/infinit-pool.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/ygoa-room.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/warrior-II.jpg',
    alt: 'image'
  },
  {
    url: '/dominica/kim-scuba.jpg',
    alt: 'image'
  },
];


const curacaoImages = [
  {
    url: '/curacao/ajay-tree-pose-underwater.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/scuba-lotus-curacao.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/yoga-retreat.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/crow-pose.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/fish.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/santa-barbara.jpg ',
    alt: 'image'
  },
  {
    url: '/curacao/retreat-santa-barbara.jpg',
    alt: 'image'
  },
];


  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="retreats">    
      <section className="blogs-hero" style={{ backgroundImage: 'url(/Plant.jpg)'}}>
        <h1>Embark on a Soulful Journey: Unleash the Serenity of Yoga and Scuba Diving with Skydancer Retreats!</h1>
      </section>
      <section className="retreat retreat-intro">
        <h3>Escape the hustle and bustle of everyday life and embark on a transformative journey with our rejuvenating yoga retreats. Immerse yourself in serene landscapes, indulge in nourishing practices, and find inner peace amidst nature&apos;s embrace. Whether you&apos;re a seasoned yogi or a curious beginner, our retreats offer a sanctuary where you can reconnect with your mind, body, and soul. Step onto the path of self-discovery, embrace tranquility, and unlock a world of holistic well-being. Join us on a yoga retreat that will leave you refreshed, inspired, and truly transformed.</h3>
      </section>
      <section className="retreat">
        <h1>Belize Hatchet Caye</h1>
        <div className="image-grid">
          {beliezeImages.map((image, index) => (
            <Image
              className="image"
              key={image.alt}
              src={image.url}
              alt={image.alt}
              onClick={() => openModal(image)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          ))}
          {showModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected Image" />
            </div>
          )}
        </div>

      </section>
      <section className="retreat">
        <h1>Dominica Jungle Bay</h1>
        <div className="image-grid">
          {dominicaImages.map((image, index) => (
            <Image
              className="image"
              key={image.alt}
              src={image.url}
              alt={image.alt}
              onClick={() => openModal(image)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          ))}
          {showModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected Image" />
            </div>
          )}
        </div>

      </section>
      <section className="retreat">
        <h1>Curacao Santa Barbara Beach and Golf resort</h1>
        <div className="image-grid">
          {curacaoImages.map((image, index) => (
            <Image
              className="image"
              key={image.alt}
              src={image.url}
              alt={image.alt}
              onClick={() => openModal(image)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          ))}
          {showModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Selected Image" />
            </div>
          )}
        </div>

      </section>
          <Image
            className="logo"
            src="/yoga-logo.png"
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
          />
      </main>
    </>
  )
}
