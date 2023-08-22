import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import {WelcomePage} from './components/WelcomePage/WelcomePage'
import {Tictac} from "./components/Tictac/Tictac";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/tictac" element={<Tictac />}/>
      </Routes>
    </>
  )
}

export default App
