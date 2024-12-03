import React from 'react'
import './cart.css'

export default function Cart() {
    return (
        <div className="cartlar">
            <div className='Cart'>
                <div className='cart_redmi'>
                    <div className='sikidka'>
                        <button style={{ width: "80px", height: "20px", border: "none", border: "1px solid rgb(255, 167, 106)", marginLeft: "20px", color: "rgb(242, 125, 48)", borderRadius: "3px" }}>Скидка 22%</button>

                    </div>
                    <div className='cart_telfon'>
                        <div className='telfon_nomi'>
                            <h1>Xiaomi 13 Lite</h1>
                            <p style={{ marginTop: "20px" }}>38 990 ₽ <span style={{ color: "rgb(170, 169, 169)" }}>49 990 ₽</span></p>

                        </div>
                        <div className='sotuv_button'>
                            <button type='submit' style={{ width: "150px", height: "35px", backgroundColor: "rgb(204, 201, 199)", color: "white", border: "none", borderRadius: "8px", cursor: "no-drop" }}>нет в наличии</button>
                            <button type='submit' style={{ width: "135px", height: "35px", backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "8px" }}>Подробнее</button>

                        </div>
                        <div className='redmi_rasim'>

                        </div>
                    </div>
                </div>
                <div className='cart_redmi1'>
                    <div className='sikidka'>
                        <button style={{ width: "80px", height: "20px", border: "none", border: "1px solid rgb(255, 167, 106)", marginLeft: "20px", color: "rgb(242, 125, 48)", borderRadius: "3px" }}>Скидка 11%</button>

                    </div>
                    <div className='cart_telfon'>
                        <div className='telfon_nomi'>
                            <h1>Xiaomi 12T Pro</h1>
                            <h1> 12 ГБ + 256 ГБ</h1>
                            <p style={{ marginTop: "15px" }}>55 990 ₽ <span style={{ color: "rgb(170, 169, 169)" }}>62 990 ₽</span></p>

                        </div>
                        <div className='sotuv_button'>
                            <button type='submit' style={{ marginTop: "-15px", width: "150px", height: "35px", backgroundColor: "rgb(204, 201, 199)", color: "white", border: "none", borderRadius: "8px", cursor: "no-drop" }}>нет в наличии</button>
                            <button type='submit' style={{ marginTop: "-15px", width: "135px", height: "35px", backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "8px" }}>Подробнее</button>

                        </div>
                        <div className='redmi_rasim2'>

                        </div>
                    </div>
                </div>


            </div>
            <div className='cart_pasti'>
            <div className='cart_text' style={{marginTop:"20px"}}>
                <h1>Смартфоны Xiaomi</h1>
                <div className='cart_xiomi'>
                <button style={{marginLeft:"20px",fontSize:"15px",marginTop:"-230px",width:"150px",height:"40px",borderRadius:"10px",backgroundColor:"black",color:"white"}}>узнать больше</button>

                </div>
            </div>
        </div>

        </div>

    )
}
