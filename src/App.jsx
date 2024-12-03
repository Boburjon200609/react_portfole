import './App.css'
import Cart from './Cart/cart.jsx'
import Futter from './futter/futter.jsx'
import Logo from './logo/logo.jsx'
import Past_qismi from './logo_past_qismi/past_qismi.jsx'
import Poco_shop from './poco.shop/poco.shop.jsx'
import Poco from './poco/poco.jsx'
import Redmi from './redmi/redmi.jsx'
import Redmi1 from './Redmi1/redmi1.jsx'
import Swiper from './swiper/swiper.jsx'

function App() {

  return (
    <>
      <div className="App">
        <Logo/>
        <Past_qismi/>
        <Redmi/>
        <Cart/>
        <Swiper/>
        <Redmi1/>
        <Poco/>
        <Poco_shop/>
        {/* <Futter/> */}

      </div>

    </>
  )
}

export default App
