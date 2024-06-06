import React from 'react';
import '../styles/Home.css';
import myImg from '../assets/dons.png';
import TypingAnimation from '../components/TypingAnimation';

const Home = () => {
  return (
    <section id='home' className='home-page'>
      <div className='home-page-text'>
        <p>HEY THERE!</p>
        <p>I'M</p>
        <h1>DONA BINU</h1>
        <TypingAnimation/>
      </div>
      <div className='home-page-img'>
        <img src={myImg} alt="Dona Binu" className='bounce'/>
      </div>
      
    </section>
  );
};

export default Home;
