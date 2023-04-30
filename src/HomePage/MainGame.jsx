import React from 'react'
import barca from "./barca icon.jpg"
import rial from "./rial madrid icon.png"
import "./homepage.css";

export default function MainGame() {
  return (
    <div className="main_perent">
      <div className=" main_game ">
          <div className='image_icon'>
        <img  src={barca} alt="" width="180px" />
        <img src={rial} alt=""width="180px" />
        </div>
        <div className='btn_bet'>
        <button className='btn_bet1'>1</button>
        <button className='btn_bet1'>x</button>
        <button className='btn_bet1'>2</button>
        </div>
      </div>
    </div>
  )
}
