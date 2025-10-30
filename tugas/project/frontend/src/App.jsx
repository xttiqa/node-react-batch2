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
        axios.get('http://localhost:3000/api/produk').then((response) => {
            setDataProduk(response.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <>
      <div className="cake-container">
          {data.map((item, index) => (
          <article className="cake-card" key={index}>
            <img
              className="cake-image"
              src={item.gambar}
              alt={item.namaproduk}
              onError={(e) => {
                e.target.src =
                  "https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg";
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

    </>
  )
}
