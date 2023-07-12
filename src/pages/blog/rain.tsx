import { useState } from 'react'; 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export const blogs = [
  {
    title: 'Step into the flow',
    excerpt: 'Can you open yourself.',
    content:'<p>Take yourself to a time when excitement boils inside you.  Your emotion is barely contained.  Maybe at your favorite concert or just after a big win in your particular sport or art. Just before you said “yes” to the love of your life, upon opening an admission letter or crossing the finish line…., being reunited with a loved one.  It is at those times that you want to dance in the sky because you are,  indeed(!),  ”one with it all.”  It is these moments that we are truly in the flow.</p><p>There is a constant flow of grace that the universe invites you to step into.  The yoga is one avenue, one vehicle to help you step into that flow….to come home.</p><p>Skydancer yoga invites you to be yourself with reckless abandon, to dance to the beat of your own drum, to tap into that uninhibited place inside that pulls you into the divine dance of your own, pure authenticity.</p><p>Please join me in my dance in the sky.</p>',
    date: 'Feb 16, 2023',
    imgSrc: '/warrior-2.jpg',
    imgAlt: 'Lotus flower floating on the water.'
  },
  {
    title: 'Rain',
    excerpt: 'Cleansing the earch and yourslef with rain.',
    content: '<p>There is something about the rain that is spiritual.  When it rains I feel like the earth is cleansing itself and I, being a part of this beautiful planet, am cleansed right along with it.</p><p>Recently I was venting to my running partner about the trajectory of good things in life….they always end.  The clouds we float upon seem to fall.  The highs become lows, the rushes calm and the waves we ride crash everytime.  He reminded me that life is cyclical.  This sent my black-and-white mind spinning.  Where are we going then?  Just riding this ferris wheel of life until we fall off?  Where is the aim?  The goal?  The point?  The end?</p><p>As I woke up this morning to my favorite kind of day….a rainy one, I realized that nature itself is cyclical.  The flowers bloom and the grass is green until soon the flowers die,  the leaves fall off the trees and the grass dies.  Mother earth teaches us about the nature of our own lives as she moves in and out of cycles.</p><p>We learn through repetition.  Trust life to throw us the same curve ball over and over until we finally learn how to catch it.  So maybe we need these cycles and as badly as it hurts to go through some cycles more than once, we learn from them.</p><p>The earth circles the sun, the moon circles the earth and on really good days… it rains.</p>',
    date: 'Jul 8, 2023',
    imgSrc: '/water-droplet.jpg',
    imgAlt: 'Drop of water on a leaf zoomed in'
  },
  {
    title: 'Guatemala',
    excerpt: 'Volumteering in Latin America',
    content: '<p>For years I have had a dream  to volunteer in Latin America. I finally submitted my application, was accepted and am headed to Guatamala to teach yoga, health and maybe even do some gardening!  Below I share my application essay which depicts my feelings about giving back.  Enjoy…</p><p>Some people ask the question “why me?”  in response to the unfortunate or difficult circumstances they find themselves in.  I ask “why me?” in response to the extremely blessed life I have been fortunate to live.  The reason behind the very fortunate or incredibly unfortunate lives we are each born into is a conundrum and I don’t have the answer.  However, I do have a response and a dedication towards action for whichever circumstance or situation in which we find ourselves.</p><p>My response is simply personal responsibility.    Wherever, however and with whomever we find ourselves can be shifted by taking personal responsibility to elevate our lives and the world to a more peaceful, positive, and powerful place.  By being open to possibility we can manifest a new future for ourselves and there will always be people to help.  I grew up in a loving home with parents who are still married and madly in love.  I was taught by example how to love and care for others and lived an abundant life, full of opportunity.  I soon realized that my fortunate condition deemed a grave personal responsibility to use my time and talent to give back to the world.   It has been a goal of mine for the last five years to volunteer in a Spanish-speaking country.</p><p>  I finally have space and time in my life to do it and am jumping at the chance to give back.  Why Spanish-Speaking?  I have had a love for Latin culture ever since I picked up a Spanish picture book in 5th grade.  I began teaching myself the language and when I was old enough, enrolled in a formal class.  The more I learned about Latin culture the more I fell in love.  I enjoy the food, the dancing, the hospitality, and the compassionate grace of the Latin people and especially enjoy speaking the musical language.  I hope that I can contribute to El Nahual to the same extent that I know El Nahual will contribute to my life.</p>',
    date: 'July 11, 2023',
    imgSrc: '/rocks.jpg',
    imgAlt: 'Rocks stacked 7 high with biggest at the bottom to smallest at the top'
  }

];

export default function Home() {


  return (
    <>
      <Head>
        <title>SkyDancer Entertainment</title>
        <meta name="description" content="SkyDancer Yoga Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`blog`}>
        <section className="blog-hero" style={{ backgroundImage: 'url(/lotus-flower.jpg)'}}>
          <h1>{blogs[1].title}</h1>
        </section>
        <section className="blog">
          <div className="blog-content">
            <div className="blog-media">
              <Image
                src={blogs[1].imgSrc}
                alt={blogs[1].imgAlt}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '90%', height: '500px', objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: blogs[1].content }}/>
          </div>
        </section>
      </main>
    </>
  )
}