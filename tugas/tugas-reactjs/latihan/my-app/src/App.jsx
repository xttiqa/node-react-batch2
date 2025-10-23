import './App.css'
import Welcome from './components/welcome'

function App() {
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  return(
    <>
    <div class="body">
      <div class="container"> 
        <img src="/src/assets/logo.jpeg" alt="logo thingstodo"/>
        <h2>THINGS TO DO</h2>
        <h6>During bootcamp in sanbercode</h6>
        <form action="/action_page.php">
              {thingsToDo.map((item, index) => (
              <div key={index} class="bagian-list">
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
            <input class="submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </>
  )
}

export default App