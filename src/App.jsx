import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Catalog } from './components/Catalog/Catalog'
import { About } from './components/About/About'
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="logo">KazanAuto</div>
          <div className="header__btns">
            <img src="/Message.png" alt="" />
            <img src="/User.png" alt="" />
            <img src="/Shopping cart.png" alt="" />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <div className="logo">KazanAuto</div>
          <div className="header__btns">
            <img src="/Message.png" alt="" />
            <img src="/User.png" alt="" />
            <img src="/Shopping cart.png" alt="" />
          </div>
        </footer>
      </div>
    </>
  )
}