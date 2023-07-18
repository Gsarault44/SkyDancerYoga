/* eslint-disable @next/next/no-img-element */
import { SetStateAction, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

const beliezeImages = [
  {
    url: '/belize/conch-and-yoga-tattoo.jpg ',
    alt: 'conch-and-yoga-tattoo',
  },
  {
    url: '/belize/conch-mat-holders.jpg',
    alt: 'conch-mat-holders',
  },
  {
    url: '/belize/crane.jpg ',
    alt: 'crane',
  },
  {
    url: '/belize/dive-boat.jpg ',
    alt: 'dive-boat',
  },
  {
    url: '/belize/final-parting-pic.jpg ',
    alt: 'inal-parting-pic',
  },
  {
    url: '/belize/girl-from-nashville-ok-sign.jpg',
    alt: 'girl-from-nashville-ok-sign',
  },
  {
    url: '/belize/lizard.jpg',
    alt: 'lizard',
  },
  {
    url: '/belize/ocean-view.jpg',
    alt: 'ocean-view',
  },
  {
    url: '/belize/on-the-dive-boat.jpg',
    alt: 'on-the-dive-boat',
  },
  {
    url: '/belize/palm-trees.jpg',
    alt: 'palm-trees',
  },
  {
    url: '/belize/pool-ocean.jpg',
    alt: 'pool-ocean',
  },
  {
    url: '/belize/scuba-tanks.jpg ',
    alt: 'scuba-tanks',
  },
  {
    url: '/belize/tony-getting-certified.jpg',
    alt: 'tony-getting-certified',
  },
  {
    url: '/belize/wendy-and-couple-from-nashville.jpg',
    alt: 'wendy-and-couple-from-nashville',
  },
  {
    url: '/belize/wendy-in-urdvah-hastasana.jpg',
    alt: 'wendy-in-urdvah-hastasana',
  },
  {
    url: '/belize/wendy-sup.jpg ',
    alt: 'wendy-sup',
  },
  {
    url: '/belize/wendy-teaching-on-pier.jpg',
    alt: 'wendy-teaching-on-pier',
  },
  {
    url: '/belize/wendy-teaching-on-pier2.jpg',
    alt: 'wendy-teaching-on-pier2',
  },
  {
    url: '/belize/wendy-teaching-triangle-pose.jpg',
    alt: 'wendy-teaching-triangle-pose',
  },
];

const dominicaImages = [  
{
  url: '/dominica/side-angle.jpg',
  alt: 'dominica side-angle'
},
{
  url: '/dominica/hiking.jpg',
  alt: 'hiking'
},
{
  url: '/dominica/reverse-warrior.jpg',
  alt: 'reverse-warrior'
},
{
  url: '/dominica/yoga-pond.jpg',
  alt: 'yoga-pond'
},
{
  url: '/dominica/dominica-view.jpg',
  alt: 'dominica-view'
},
{
  url: '/dominica/wendy-kayaking-dominica.jpg',
  alt: 'wendy-kayaking-dominica'
},
{
  url: '/dominica/pool_ocean.jpg',
  alt: 'pool_ocean'
},
{
  url: '/dominica/infinit-pool.jpg',
  alt: 'infinit-pool'
},
{
  url: '/dominica/yoga-room.jpg',
  alt: 'yoga-room'
},
{
  url: '/dominica/warrior-II.jpg',
  alt: 'warrior-II'
},
{
  url: '/dominica/kim-scuba.jpg',
  alt: 'kim-scuba'
},
];


const curacaoImages = [
{
  url: '/curacao/ajay-tree-pose-underwater.jpg ',
  alt: 'ajay-tree-pose-underwater'
},
{
  url: '/curacao/scuba-lotus-curacao.jpg ',
  alt: 'scuba-lotus-curacao'
},
{
  url: '/curacao/crow-pose.jpg ',
  alt: 'crow-pose'
},
{
  url: '/curacao/fish.jpg ',
  alt: 'fish'
},
{
  url: '/curacao/santa-barbara.jpg ',
  alt: 'santa-barbara'
},
{
  url: '/curacao/retreat-santa-barbara.jpg',
  alt: 'retreat-santa-barbara'
},
];

export default function Retreats() {
  const [showBeliezeModal, setShowBeliezeModal] = useState(false);
  const [showDominicaModal, setShowDominicaModal] = useState(false);
  const [showCuracaoModal, setShowCuracaoModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  const openBeliezeModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowBeliezeModal(true);
  };

  const openDominicaModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowDominicaModal(true);
  };

  const openCuracaoModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowCuracaoModal(true);
  };

  const closeModal = () => {
    setShowBeliezeModal(false);
    setShowDominicaModal(false);
    setShowCuracaoModal(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: string, images: string | any[]) => {
    if (selectedImageIndex !== null) {
      const lastIndex = images.length - 1;
      let newIndex;

      if (direction === 'prev') {
        newIndex = selectedImageIndex === 0 ? lastIndex : selectedImageIndex - 1;
      } else if (direction === 'next') {
        newIndex = selectedImageIndex === lastIndex ? 0 : selectedImageIndex + 1;
      }

      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Entertainment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="retreats">    
      <section className="blogs-hero" style={{ backgroundImage: 'url(/belize/yoga-retreat-pic.jpg)'}}>
        <h1>Embark on a Soulful Journey: Unleash the Serenity of Yoga and Scuba Diving with Skydancer Retreats!</h1>
      </section>
      <section className="retreat retreat-intro">
        <h3>Escape the hustle and bustle of everyday life and embark on a transformative journey with our rejuvenating yoga retreats. Immerse yourself in serene landscapes, indulge in nourishing practices, and find inner peace amidst nature&apos;s embrace. Whether you&apos;re a seasoned yogi or a curious beginner, our retreats offer a sanctuary where you can reconnect with your mind, body, and soul. Step onto the path of self-discovery, embrace tranquility, and unlock a world of holistic well-being. Join us on a yoga retreat that will leave you refreshed, inspired, and truly transformed.</h3>
        {/* <Image
          src={'/belize/yoga-retreat-pic.jpg'}
          alt={'retreat pic'}
          width={250}
          height={200}
          priority
          style={{ objectFit: 'cover' }}
        /> */}
      </section>
      <section className="retreat">
        <h1>Belize Hatchet Caye</h1>
        <div className="image-grid">
          {beliezeImages.map((image, index) => {
            return (
            <Image
              className="image"
              key={image.alt}
              src={image.url}
              alt={image.alt}
              onClick={() => openBeliezeModal(index)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          )})}
          {showBeliezeModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <span className="prev-button" onClick={() => navigateImage('prev', beliezeImages)}>
                &#10094;
              </span>
              <img src={beliezeImages[selectedImageIndex].url} alt={beliezeImages[selectedImageIndex].alt} />
              <span className="next-button" onClick={() => navigateImage('next', beliezeImages)}>
                &#10095;
              </span>
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
              onClick={() => openDominicaModal(index)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          ))}
          {showDominicaModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <span className="prev-button" onClick={() => navigateImage('prev', dominicaImages)}>
                &#10094;
              </span>
              <img src={dominicaImages[selectedImageIndex].url} alt={dominicaImages[selectedImageIndex].url} />
              <span className="next-button" onClick={() => navigateImage('next', dominicaImages)}>
                &#10095;
              </span>
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
              onClick={() => openCuracaoModal(index)}
              width={250}
              height={200}
              priority
              style={{ objectFit: 'cover' }}
            />
          ))}
          {showCuracaoModal && (
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <span className="prev-button" onClick={() => navigateImage('prev', curacaoImages)}>
                &#10094;
              </span>
              <img src={curacaoImages[selectedImageIndex].url} alt={curacaoImages[selectedImageIndex].alt} />
              <span className="next-button" onClick={() => navigateImage('next', curacaoImages)}>
                &#10095;
              </span>
            </div>
          )}
        </div>

      </section>
          {/* <Image
            className="logo"
            src="/yoga-logo.png"
            alt="Next.js Logo"
            width={250}
            height={100}
            priority
          /> */}
      </main>
    </>
  )
}
