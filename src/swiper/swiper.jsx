import React from 'react'
import './swiper.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function SwiperComponent() {
  return (
    <div>
        <Swiper pagination={{clickable: true}} autoplay={true} loop={true} modules={[Navigation, Pagination, Autoplay]} className='swiper'>
            <SwiperSlide className='wider_swiper'>
                <div className='redmi_note_12pro'>
                    <div className='redmi_note_12pro_text'>
                        <div className='redmi_note_12pro_text_nomi' style={{marginTop:"100px"}}>
                            <h1>Redmi Note 12 Pro+</h1>
                            <h1 style={{fontSize:"25px"}}>Передовая камера с разрешением 200 Мп</h1>
                        </div>
                        <div className='redmi_note_narxi' style={{marginTop:"-90px"}}>
                            <h1 style={{fontSize:"20px"}}>От 32 990 ₽ <span style={{ fontSize:"20px",textDecoration:"line-through",color:"rgb(170, 169, 169)"}}>От 45 990 ₽</span></h1>
                        </div>
                        <div className='redmi_note_sotuv_button' style={{marginTop:"-220px"}}>
                            <button style={{width:"100px",cursor:"help", height:"30px",backgroundColor:"black", color:"white", borderRadius:"10px"}}>Купить</button>
                            <h1 style={{fontSize:"15px",color:"rgb(148, 148, 148)"}}>Подробнее</h1>
                        </div>
                    </div>
                    <div className='redmi_note_12pro_img2'>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='wider_swiper'>
                <div className='redmi_note_12pro'>
                    <div className='redmi_note_12pro_text'>
                        <div className='redmi_note_12pro_text_nomi' style={{marginTop:"100px"}}>
                            <h1>Redmi Note 12</h1>
                            <h1 style={{fontSize:"25px"}}>120 Гц AMOLED-дисплей | 33 Вт быстрая зарядка</h1>
                        </div>
                        <div className='redmi_note_narxi' style={{marginTop:"-90px"}}>
                            <h1 style={{fontSize:"20px"}}>От 11 990 ₽  <span style={{ fontSize:"20px",textDecoration:"line-through",color:"rgb(170, 169, 169)"}}>От 19 990 ₽</span></h1>
                        </div>
                        <div className='redmi_note_sotuv_button' style={{marginTop:"-220px"}}>
                            <button style={{width:"100px",cursor:"help", height:"30px",backgroundColor:"black", color:"white", borderRadius:"10px"}}>Купить</button>
                            <h1 style={{fontSize:"15px",color:"rgb(148, 148, 148)"}}>Подробнее</h1>
                        </div>
                    </div>
                    <div className='redmi_note_12pro_img1'>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
