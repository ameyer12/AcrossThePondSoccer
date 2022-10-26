import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import {  Home, PremierLeagueTopScorersPage, PremierLeagueTopAssistersPage, LaLigaTopScorersPage, LaLigaTopAssistersPage } from "./components";
import { 
  getLiveScores,
  getPremierLeagueTopScorers, 
  getPremierLeagueTopAssisters, 
  getLaLigaTopScorers, 
  getLaLigaTopAssisters, 
} from "./api"

const App = () => {

  const [liveScores, setLiveScores] = useState([]);

  const [topScorers, setTopScorers] = useState([]);
  const [topAssisters, setTopAssisters] = useState([]);
  
  const [topScorersLaLiga, setTopScorersLaLiga] = useState([]);
  const [topAssistersLaLiga ,setTopAssistersLaLiga] = useState([]);

  async function fetchLiveScores() {
    const results = await getLiveScores()
    // console.log(results)
    setLiveScores(results)
    // console.log(liveScores)
  }


  async function fetchPremierLeagueTopScorers() {
    const results = await getPremierLeagueTopScorers()
    // console.log(results)
    setTopScorers(results)
    // console.log(topScorers)
  }

  async function fetchPremierLeagueTopAssisters() {
    const results = await getPremierLeagueTopAssisters()
    // console.log(results)
    setTopAssisters(results)
  }

  async function fetchLaLigaTopScorers() {
    const results = await getLaLigaTopScorers()
    // console.log(results)
    setTopScorersLaLiga(results)
    // console.log(topScorers)
  }

  async function fetchLaLigaTopAssisters() {
    const results = await getLaLigaTopAssisters()
    // console.log(results)
    setTopAssistersLaLiga(results)
    // console.log(topScorers)
  }

  useEffect(() => {
    fetchLiveScores()
  }, [])

  useEffect(() => {
    fetchPremierLeagueTopScorers()
  }, [])
  
  useEffect(() => {
    fetchPremierLeagueTopAssisters()
  }, [])
  
  useEffect(() => {
    fetchLaLigaTopScorers()
  }, [])

  useEffect(() => {
    fetchLaLigaTopAssisters()
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home fetchLiveScores={ fetchLiveScores } liveScores={ liveScores } />}/>
        <Route path="/pltopscorers" element={<PremierLeagueTopScorersPage fetchPremierLeagueTopScorers={ fetchPremierLeagueTopScorers } topScorers={ topScorers } />}/>
        <Route path="/pltopassisters" element={<PremierLeagueTopAssistersPage fetchPremierLeagueTopAssisters={ fetchPremierLeagueTopAssisters } topAssisters={ topAssisters }/>}/>
        <Route path="/laligatopscorers" element={<LaLigaTopScorersPage fetchLaLigaTopScorers={ fetchLaLigaTopScorers } topScorersLaLiga={ topScorersLaLiga } />}/>
        <Route path="/laligatopassisters" element={<LaLigaTopAssistersPage fetchLaLigaTopAssisters={ fetchLaLigaTopAssisters } topAssistersLaLiga={ topAssistersLaLiga }/>}/>
      </Routes>
    </div>
  );
}

export default App;
