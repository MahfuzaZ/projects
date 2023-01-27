import React from 'react'
import Buttons from '../Button'
import Cards from '../Cards'
import Header from '../Header'
import "./page2.css"
import map from "../Img/map.svg"
import Footer from '../Footer'
// import { useState } from 'react';

function Page() {
  return (
    <div>
      <Header/>
      <div className="buttons">
      <Buttons/>
      </div>
      <div className="cards3">
        <h1>O’quv markazlani ro’yxati</h1>
        <ul className='ul3'>
          <a href="">
            <li className='active2'>IT</li>
          </a>
          <a href="">
            <li className='lim'>Marketing</li>
          </a>
          <a href="">
            <li className='lim'>SMM</li>
          </a>
          <a href="">
            <li className='lim'>Matematika</li>
          </a>
          <a href="">
            <li className='lim'>Kimyo</li>
          </a>
          <a href="">
            <li className='lim'>Arab tili</li>
          </a>
          <a href="">
            <li className='lim'>Ingliz tili</li>
          </a>
          <a href="">
            <li className='lim'>Rus tili</li>
          </a>
          <a href="">
            <li className='lim'>Fizika</li>
          </a>
          <a href="">
            <li className='lim'>Adabiyot</li>
          </a>
        </ul>
      </div>
      <Cards/>
      <Cards/>
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
      <Footer/>
    </div>
  )
}

export default Page