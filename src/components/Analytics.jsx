import React from 'react';
import BeautyPic from '../assets/BeautyPic.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={BeautyPic} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Beautify</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Beauty inspired by you.</h1>
          <p>
          Welcome to Beautijess, where elegance meets innovation. Our luxury cosmetics brand is dedicated to empowering women to unleash their inner radiance. With high-performance formulas, exquisite packaging, and expertly crafted shades, our products combine artistry and science to reveal your timeless beauty. Indulge in our curated collection of lipsticks, foundations, and skincare, and discover a world of sophistication and glamour.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
