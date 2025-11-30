import './App.css'
import Welcome from './components/welcome'
import { useState, useEffect } from 'react'

function App() {
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]

  // State untuk jam & hitung mundur
  const [currentTime, setCurrentTime] = useState(new Date())
  const [countdown, setCountdown] = useState(100)
  const [visible, setVisible] = useState(true)

  // Update jam setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Hitung mundur
  useEffect(() => {
    if (countdown <= 0) {
      setVisible(false)
      return
    }

    const interval = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [countdown])

  return (
    <>
      <div className="body">
        <div className="container">
          <img src="/src/assets/logo.jpeg" alt="logo thingstodo" />
          <h2>THINGS TO DO</h2>
          <h6>During bootcamp in sanbercode</h6>

          <form action="/action_page.php">
            {thingsToDo.map((item, index) => (
              <div key={index} className="bagian-list">
                <input
                  type="checkbox"
                  id={`task-${index}`}
                  name={`task-${index}`}
                  value={item}
                />
                <label htmlFor={`task-${index}`}> {item}</label>
                <br />
              </div>
            ))}
            <br />
            <input className="submit" type="submit" value="Submit" />
          </form>

          {/* Timer hanya muncul jika masih visible */}
          {visible ? (
            <div className="timer-section">
              <h3>Jam Sekarang: {currentTime.toLocaleTimeString()}</h3>
              <h3>Hitung Mundur: {countdown}</h3>
            </div>
          ) : (
            <h3 className="timer-end">Waktu Habis!</h3>
          )}
        </div>
      </div>
    </>
  )
}

export default App
