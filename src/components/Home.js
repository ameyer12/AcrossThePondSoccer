import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import homeBackground from './home-background.png';
import './Home.css';

const Home = ({liveScores, fetchLiveScores}) => {
    try{

        useEffect(() => {
            fetchLiveScores()
          }, [])
        
        return (
            <div className="homepage">
                <div className="homepage-header">
                    <h1 className="homepage-h1"> Welcome to Across the Pond Soccer!</h1>
                    <p>Europe's best
                        <span>
                            <Typewriter 
                                loop
                                cursor
                                cursorStyle= "|"
                                typeSpeed={80}
                                deleteSpeed={70}
                                delaySpeed={2000}
                                words={[' goal scorers', ' assisters', ' footballers, all in one place']}
                            />
                        </span>
                    </p>
                </div>
                <div className="live-scores-header">
                    <h2 id="live-scores-h2">Live scores:</h2>
                </div>
                <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        { 
                                    liveScores.response.map((currentItem, index) => { 
                                        if(index === 0 && currentItem.score.fulltime.home === null && currentItem.score.fulltime.away === null){
                                            return  <div class="carousel-item active" key={index}>
                                                        <p className="card border-0">
                                                            <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                            <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                            <div className='live-score-container'>
                                                                <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                                <p className='homepage-home-team-name'>{currentItem.teams.home.name}</p>

                                                                <span className="homepage-score"> {currentItem.score.halftime.home} : {currentItem.score.halftime.away} </span>

                                                                <p className='homepage-away-team-name'>{currentItem.teams.away.name}</p>

                                                                <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                            </div>
                                                        </p>
                                                    </div>
                                        } else if(index === 0 && currentItem.score.fulltime.home !== null && currentItem.score.fulltime.away !== null){
                                            return  <div class="carousel-item active" key={index}>
                                                        <p className="card">
                                                            
                                                            <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                            <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                            <div className='live-score-container'>
                                                                <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                                <p className='homepage-home-team-name'>{currentItem.teams.home.name}</p>
                                                                
                                                                <span className="homepage-score"> {currentItem.score.fulltime.home} : {currentItem.score.fulltime.away} </span> 
                                                                
                                                                <p className='homepage-away-team-name'>{currentItem.teams.away.name}</p>
                                                                
                                                                <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                            </div>

                                                            </p>
                                                    </div>   
                                        }
                                    })
                            }
                        {
                            liveScores.response.map((currentItem, index) => {
                                    if(index > 0 && currentItem.score.fulltime.home === null && currentItem.score.fulltime.away === null){
                                        return <div class="carousel-item" key={index}>
                                                    <p className="card border-0">

                                                        <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                        <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                        <div className='live-score-container'>
                                                            <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                            <p className='homepage-home-team-name'>{currentItem.teams.home.name}</p>

                                                            <span className="homepage-score"> {currentItem.score.halftime.home} : {currentItem.score.halftime.away} </span>

                                                            <p className='homepage-away-team-name'>{currentItem.teams.away.name}</p>

                                                            <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                        </div>
                                                    </p>
                                                </div>
                                    } else if(index === 0 && currentItem.score.fulltime.home !== null && currentItem.score.fulltime.away !== null){
                                        return  <div class="carousel-item" key={index}>
                                                    <p className="card">

                                                        <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                        <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                        <div className='live-score-container'>
                                                            <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                            <p className='homepage-home-team-name'>{currentItem.teams.home.name}</p>
                                                            
                                                            <span className="homepage-score"> {currentItem.score.fulltime.home} : {currentItem.score.fulltime.away} </span> 
                                                            
                                                            <p className='homepage-away-team-name'>{currentItem.teams.away.name}</p>

                                                            <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                        </div>
                                                    </p>
                                                </div>
                                    }
                            })
                        }
                    </div>
                    <a class="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                    </div>
            </div>
        )
    } catch(error) {
        console.log(error)
    }
}

export default Home