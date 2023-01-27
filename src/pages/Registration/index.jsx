import React from 'react'
import img from "../Img/logo4.svg"
import img2 from "../Img/iphone.svg"
import "./register.css"
import img3 from "../Img/arrow.svg"
import img4 from "../Img/left.svg"
import img5 from "../Img/right.svg"

function Registration() {
  return (
    <div className='registration'>
        <div className="img4">
            <img className='limg' src={img4} alt="" />
        </div>
        <div className="center">
           <div className="left">
            <img src={img} alt="" />
           </div>
           <div className="right">
              <div className="lside">
                 <div className="top">
                    <h4 className='log'>Log in</h4>
                    <h4 className='sign'>Sign in</h4>
                 </div>
                    <form action="">
                        <input type="email"  placeholder='info2468@gmail.com'/>
                        <input type="text" placeholder='name' />
                        <input type="password" placeholder='password'/>
                        <input type="password"  placeholder='confirm password'/>
                    </form>
                    <h5>or Sign in with</h5>
                    <div className="icons">
                    <img src={img2} alt="" />
                    <img src={img2} alt="" />
                    <img src={img2} alt="" />

                    </div>
              </div>
              <div className="rside1">
                <img className='arrow' src={img3} alt="" />
              </div>
           </div>
        </div>
        <div className="img5">
            <img className='rimg' src={img5} alt="" />
        </div>

    </div>
  )
}

export default Registration