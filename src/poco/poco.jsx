import React from 'react'
import './poco.css'

export default function Poco() {
  return (
    <div className='poco_img'>
        <div className='poco_cart'>
            <p style={{color:"white",fontSize:"30px"}}>Настоящий. Уровень PRO.</p>
            <h1 style={{fontSize:"40px",color:"white",}}>POCO X5 Pro 5G</h1>
            <h1 style={{fontSize:"24px",color:"white"}}>Процессор Snapdragon® 778G 120 Гц FHD+ AMOLED DotDisplay</h1>
            <div className='poco_narxi' style={{marginTop:"80px",marginLeft:"2px"}}>
                <p style={{fontSize:"20px",marginLeft:"15px",marginTop:"-10px",color:"white"}}>24 990 ₽ <span style={{marginLeft:"30px",textDecoration:"line-through",color:"rgb(147, 158, 169)"}}>35 990 ₽</span></p>
            </div>
            <div className='poco_sotish_button' style={{marginTop:"10p"}}>
                <button style={{border:"none",backgroundColor:"white",width:"120px",height:"35px",borderRadius:"10px"}}>Купить</button>
                <h1 style={{fontSize:"20px",color:"white" }}>Подробнее</h1>

            </div>
        </div>
      
    </div>
  )
}
