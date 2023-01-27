import React from 'react'
// import { useState } from 'react';
import Header from '../Header';
import Buttons from '../Button';
import "./home.css"
import Cards from '../Cards';
import logo2 from "../Img/logo2.svg"
import map from "../Img/map.svg"
import Footer from '../Footer';

function Home() {
    console.log("chiqdi");
  return (
    <div>
      <Header/>
      <div className='showcase'>
            <h3>Kerakli o’quv yurtni izlashingiz mumkin!</h3>
            <Buttons/>
            <p className='p'>Google’da ma’lumotni qanday izlasangiz, shunday izlayvering. Biz sizga kerakligini topib beramiz</p>
      </div>
      <div className='cards2'>
        <Cards name="Bizni takliflarimiz"/>
        <Cards button="Yana"/>
        <button>Yana</button>
      </div>
      <section className='section-1'>
        <h4>Biz haqimizda</h4>
        <div className='main'>
        <div className='left'>
          <p className='p2'><strong>findedu</strong> - Biz birinchi platforma, o’quv markazlarini aniq narxlari, darajasi va reytingini ko’rsatamiz</p>
        </div>
         <div className='right'>
            <img src={logo2}/>
         </div>
        </div>
      </section>
      <section className='section-2'>
        <h4>Aloqa uchun</h4>
        <div className='main'>
        <div className='left'>
          <ul className='ul2'>
            <li className='active'>Address</li>
            <li>Toshkent, Amir Temur k., 21</li>
            <li className='active'>Telefon</li>
            <li>+998 93 638-43-12</li>
            <li>+998 93 638-43-12</li>
            <li className='active'>Mail</li>
            <li>info@findedu.uz</li>
            <li>info@findedu.uz</li>
          </ul>
        </div>
        <div className='right'>
          <img src={map}/>
        </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home