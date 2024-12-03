import React from 'react'
import { useState } from 'react';
import rasim from './mi.jpg';
import rasim2 from '../assets/shop.png';
import rasim3 from '../assets/search.png';
import rasim4 from '../assets/uzer.png';
import "./logo.css"


export default function Logo() {
    const [chiqish, setChiqish] = useState(false);
    const [uzer, setuzer] = useState(false);
    const [data, setdata] = useState(false);
    const [name, setname] = useState(false);
    const [text, setText] = useState(false);




    const myStyle3 = {
        width: '100%',
        height: '150px', 
        backgroundColor: 'rgb(249, 244, 244)',
        padding: '10px',
        display: name ? 'block' : 'none',



        position: 'absolute',
        zIndex: 10,
        animation: name ? 'paydo 1s' : 'none',
        marginTop: "-33px",
    }; const myStyle0 = {
        width: '100%',
        height: '150px',
        backgroundColor: 'rgb(249, 244, 244)',
        padding: '10px',
        display: data ? 'block' : 'none',



        position: 'absolute',
        zIndex: 10,
        animation: data ? 'paydo 1s' : 'none',
        marginTop: "-33px",
    }; const myStyle1 = {
        width: '100%',
        height: '150px',
        backgroundColor: 'rgb(249, 244, 244)',
        padding: '10px',
        display: uzer ? 'block' : 'none',



        position: 'absolute',
        zIndex: 10,
        animation: 'paydo',
        marginTop: "-33px",

    };
    const myStyle4 = {
        width: '100px',
        height: '80px',
        backgroundColor: 'rgb(249, 244, 244)',
        padding: '10px',
        display: text ? 'block' : 'none',



        position: 'absolute',
        zIndex: 10,
        animation: 'paydo',
        marginTop: "-31px",
        marginLeft: "93%",

    };

    return (
        <div className="">
            <div className='Logo'>
                <div className="logo_text">
                    <div className="logo_icon">
                        <div className='imgicon'>
                            <img style={{ borderRadius: "10px", cursor: "pointer", }} width={"45px"} height={"45px"} src={rasim} alt='' />
                        </div>
                    </div>
                    <div className="logo_text_name">
                        <div className="logo_textlar">
                            <h1 onMouseOver={() => setChiqish(true)}
                                onMouseLeave={() => setChiqish(false)}
                                style={{  cursor: 'pointer', fontSize: "18px", }}>Акции</h1>
                            <h1 onMouseOver={() => setuzer(true)}
                                onMouseLeave={() => setuzer(false)}
                                style={{ cursor: 'pointer', fontSize: "18px", }}>Смартфоны</h1>
                            <h1 onMouseOver={() => setname(true)}
                                onMouseLeave={() => setname(false)}
                                style={{ cursor: 'pointer', fontSize: "18px", }}>Умный дом</h1>
                            <h1 onMouseOver={() => setdata(true)}
                                onMouseLeave={() => setdata(false)}
                                style={{ cursor: 'pointer', fontSize: "18px", }}>Лайфстайл</h1>
                        </div>

                    </div>


                </div>
                <div className="logo_login_text">
                    <div className="login_text">
                        <h1>Блог</h1>
                        <h1>Поддержка</h1>
                    </div>
                    <div className="login_iconlar">
                        <button>
                            <img width={"40px"} src={rasim3} alt='Search' />
                        </button>
                        <button>
                            <img width={"40px"} src={rasim2} alt='Shop' />
                        </button>
                        <button onMouseOver={() => setText(true)}
                            onMouseLeave={() => setText(false)}>
                            <img width={"50px"} src={rasim4} alt='User' />
                        </button>

                    </div>
                </div>


            </div>
            <div onMouseOver={() => setdata(true)} onMouseLeave={() => setdata(false)} style={myStyle0} id='aksiya'>
          <div className='Лайфстайл' style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-evenly", fontSize: "10px", placeItems: "center", alignItems: "center", textAlign: "center" }}>
            <h1>Лайфстайл</h1>
            <h1>Бесплатные услуги</h1>
            <h1>Скидки и акции</h1>
            <h1>Сервисные услуги</h1>
            <h1>Контакты</h1>
          </div>
        </div>
        <div onMouseOver={() => setuzer(true)} onMouseLeave={() => setuzer(false)} style={myStyle1} id='aksiya'>
          <div className='Управление' style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-evenly", fontSize: "10px", placeItems: "center", alignItems: "center", textAlign: "center" }}>
            <h1>Умный дом</h1>
            <h1>Интеллектуальные устройства</h1>
            <h1>Управление домом</h1>
            <h1>Отопление</h1>
            <h1>Кондиционирование</h1>

          </div>

        </div>
        <div onMouseOver={() => setname(true)} onMouseLeave={() => setname(false)} style={myStyle3} id='aksiya'>
          <div className='Контакты' style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-evenly", fontSize: "10px", placeItems: "center", alignItems: "center", textAlign: "center" }}>
            <h1>Акции</h1>
            <h1>Скидки и акции</h1>
            <h1>Распродажа устройств</h1>
            <h1>Сервисные услуги</h1>
            <h1>Контакты</h1>

          </div>

        </div>
        <div onMouseOver={() => setText(true)} onMouseLeave={() => setText(false)} style={myStyle4} className='Кондиционирование'>
          <div className='Контакты'>
            <p style={{ fontSize: "20px", color: "black" }}>войти</p>
            <hr style={{ width: "100%" }} />
            <h1 style={{ fontSize: "14px", marginTop: "5px", color: "black" }}>Регистрасция</h1>


          </div>

        </div>

        </div>

    )
}
