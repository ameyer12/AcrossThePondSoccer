import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import { TopScorersPage, TopAssistersPage, Home } from "./components";
import { getTopScorers, getTopAssisters } from "./api"

const App = () => {

  const [topScorers, setTopScorers] = useState([]);
  const [topAssisters ,setTopAssisters] = useState([]);


  async function fetchTopScorers() {
    const results = await getTopScorers()
    // console.log(results)
    setTopScorers(results)
    // console.log(topScorers)
  }

  async function fetchTopAssisters() {
    const results = await getTopAssisters()
    // console.log(results)
    setTopAssisters(results)
  }

  useEffect(() => {
    fetchTopScorers()
}, [])

useEffect(() => {
  fetchTopAssisters()
}, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/topscorers" element={<TopScorersPage fetchTopScorers={ fetchTopScorers } topScorers={ topScorers } />}/>
        <Route path="/topassisters" element={<TopAssistersPage fetchTopAssisters={ fetchTopAssisters } topAssisters={ topAssisters }/>}/>
      </Routes>
    </div>
  );
}

export default App;
