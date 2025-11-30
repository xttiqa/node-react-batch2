import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import './style.css'

export default function App() {
  const [data, setDataProduk] = useState([]);

  useEffect(() => {
    fetchDataProduk()
  }, [])

  const fetchDataProduk = () => {
    axios.get('http://localhost:3000/api/produk')
      .then((response) => {
        setDataProduk(response.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="#" className="navbar-logo">Dessert Cake Raka</a>
          </div>
          <div className="navbar-right">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('menu')} className="nav-link">Menu</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Sweet Moments Start Here 🍰</h1>
          <p className="hero-subtitle">Kue lezat untuk setiap perayaan dan kebahagiaanmu</p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="menu-section">
        <h2 className="section-title">Menu Kami</h2>
        <div className="cake-container">
          {data.map((item, index) => (
            <article className="cake-card" key={index}>
              <img
                className="cake-image"
                src={item.gambar}
                alt={item.namaproduk}
                onError={(e) => {
                  e.target.src = "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg";
                }}
              />
              <div className="card-body">
                <h3 className="product-title">{item.namaproduk}</h3>
                <p className="product-desc">{item.deskripsi}</p>
                <div className="card-footer">
                  <div className="price">Rp{item.harga}</div>
                  <button className="btn-buy">Tambah</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Hubungi Kami</h2>
        <p className="contact-text">
          📍 Jl. Cendana, Samarinda<br />
          📞 0812-3456-7890<br />
          ✉️ info@dessertcakeraka.com
        </p>
      </section>
    </>
  )
}
