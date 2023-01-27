import React from 'react'
import logo from "../Img/logo.svg"
import search from "../Img/search.png"
import heart from "../Img/heart.png"
import "./main.css"

function Header() {
  return (
    <div className='header'> 
       <div className="left">
       <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu">
            <ul>
                <a href="">
                    <li className='myli'>Bosh sahifa</li>
                </a><a href="">
                    <li className='myli'>O’quv markazlar</li>
                </a><a href="">
                    <li className='myli'>Courses</li>
                </a><a href="">
                    <li className='myli'>Biz haqimizda</li>
                </a>
            </ul>
        </div>
       </div>
        <div className="button">
            <img src={search} alt="" />
            <img src={heart} alt="" />
            <button className='button2'>Kirish</button>
        </div>
        
    </div>
  )
}

export default Header