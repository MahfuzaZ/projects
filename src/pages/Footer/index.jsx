import "./footer.css"
import React from 'react'
import logo from "../Img/logo3.svg"
import facebook from "../Img/facebook.svg"

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <img src={logo} alt="" />
            <ul className="ul3">
                <a href="">
                <li><img src={facebook} alt="" /></li>
                </a><a href="">
                <li><img src={facebook} alt="" /></li>
                </a><a href="">
                <li><img src={facebook} alt="" /></li>
                </a><a href="">
                <li><img src={facebook} alt="" /></li>
                </a>
            </ul>
        </div>
        <div className="menu">
            <ul className="ul4">
                <a href="">
                    <li className="li1">Qidiruv</li>
                </a><a href="">
                    <li className="li1">O’quv markazlar</li>
                </a><a href="">
                    <li className="li1">Courses</li>
                </a><a href="">
                    <li className="li1">Biz haqimizda</li>
                </a>
            </ul>
        </div>
        <div className="border"></div>
        <p className="p1">2023 "findedu"</p>
    </div>
  )
}

export default Footer