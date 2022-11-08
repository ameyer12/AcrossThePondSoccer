import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import {  
  Home, 
  PremierLeagueTopScorersPage, 
  PremierLeagueTopAssistersPage, 
  LaLigaTopScorersPage, 
  LaLigaTopAssistersPage,
  BundesligaTopScorersPage,
  BundesligaTopAssistersPage,
  SerieATopScorersPage,
  SerieATopAssistersPage,
  Ligue1TopScorersPage,
  Ligue1TopAssistersPage
 } from "./components";
import { 
  getLiveScores,
  getPremierLeagueTopScorers, 
  getPremierLeagueTopAssisters, 
  getLaLigaTopScorers, 
  getLaLigaTopAssisters,
  getBundesligaTopScorers,
  getBundesligaTopAssisters,
  getSerieATopScorers,
  getSerieATopAssisters,
  getLigue1TopScorers,
  getLigue1TopAssisters
} from "./api";


const App = () => {

  const [liveScores, setLiveScores] = useState([]);

  const [topScorers, setTopScorers] = useState([]);
  const [topAssisters, setTopAssisters] = useState([]);
  
  const [topScorersLaLiga, setTopScorersLaLiga] = useState([]);
  const [topAssistersLaLiga ,setTopAssistersLaLiga] = useState([]);

  const [topScorersBundesliga, setTopScorersBundesliga] = useState([]);
  const [topAssistersBundesliga, setTopAssistersBundesliga] = useState([]);

  const [topScorersSerieA, setTopScorersSerieA] = useState([]);
  const [topAssistersSerieA, setTopAssistersSerieA] = useState([]);

  const [topScorersLigue1, setTopScorersLigue1] = useState([]);
  const [topAssistersLigue1, setTopAssistersLigue1] = useState([]);

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

  async function fetchBundesligaTopScorers() {
    const results = await getBundesligaTopScorers()
    // console.log(results)
    setTopScorersBundesliga(results)
    // console.log(topScorers)
  }

  async function fetchBundesligaTopAssisters() {
    const results = await getBundesligaTopAssisters()
    // console.log(results)
    setTopAssistersBundesliga(results)
    // console.log(topScorers)
  }

  async function fetchSerieATopScorers() {
    const results = await getSerieATopScorers()
    // console.log(results)
    setTopScorersSerieA(results)
    // console.log(topScorers)
  }

  async function fetchSerieATopAssisters() {
    const results = await getSerieATopAssisters()
    // console.log(results)
    setTopAssistersSerieA(results)
    // console.log(topScorers)
  }

  async function fetchLigue1TopScorers() {
    const results = await getLigue1TopScorers()
    // console.log(results)
    setTopScorersLigue1(results)
    // console.log(topScorers)
  }


  async function fetchLigue1TopAssisters() {
    const results = await getLigue1TopAssisters()
    // console.log(results)
    setTopAssistersLigue1(results)
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

  useEffect(() => {
    fetchBundesligaTopScorers()
  }, [])

  useEffect(() => {
    fetchBundesligaTopAssisters()
  }, [])

  useEffect(() => {
    fetchSerieATopScorers()
  }, [])

  useEffect(() => {
    fetchSerieATopAssisters()
  }, [])

  useEffect(() => {
    fetchLigue1TopScorers()
  }, [])

  useEffect(() => {
    fetchLigue1TopAssisters()
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
        <Route path="/bundesligatopscorers" element={<BundesligaTopScorersPage fetchBundesligaTopScorers={ fetchBundesligaTopScorers } topScorersBundesliga={ topScorersBundesliga }/>}/>
        <Route path="/bundesligatopassisters" element={<BundesligaTopAssistersPage fetchBundesligaTopAssisters={ fetchBundesligaTopAssisters } topAssistersBundesliga={ topAssistersBundesliga }/>}/>
        <Route path="/serieatopscorers" element={<SerieATopScorersPage fetchSerieATopScorers={ fetchSerieATopScorers } topScorersSerieA={ topScorersSerieA }/>}/>
        <Route path="/serieatopassisters" element={<SerieATopAssistersPage fetchSerieATopAssisters={ fetchSerieATopAssisters } topAssistersSerieA={ topAssistersSerieA }/>}/>
        <Route path="/ligue1topscorers" element={<Ligue1TopScorersPage fetchLigue1TopScorers={ fetchLigue1TopScorers } topScorersLigue1={ topScorersLigue1 }/>}/>
        <Route path="/ligue1topassisters" element={<Ligue1TopAssistersPage fetchLigue1TopAssisters={ fetchLigue1TopAssisters } topAssistersLigue1={ topAssistersLigue1 }/>}/>
      </Routes>
    </div>
  );
}

export default App;