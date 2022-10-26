import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';
import './Home.css';

const Home = ({liveScores}) => {

    // console.log(liveScores.response)

        // for(let i = 0; i < liveScores.response.length; i++) {

        //     if(i === 0){
        //         console.log(liveScores.response[i])
        //     }
        // }


    try{
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
                    <h2>Live scores:</h2>
                </div>
                <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        { 
                                    liveScores.response.map((currentItem, index) => { 
                                        if(index === 0 && currentItem.score.fulltime.home === null && currentItem.score.fulltime.away === null){
                                            console.log(currentItem.league.name)
                                        return  <div class="carousel-item active" key={index}>
                                                    <p className="card border-0">
                                                        <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                        <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                        <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                        {currentItem.teams.home.name} 

                                                        <span className="homepage-score"> {currentItem.score.halftime.home} : {currentItem.score.halftime.away} </span>

                                                        {currentItem.teams.away.name}

                                                        <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                    </p>
                                                </div>
                                        } else if(index === 0 && currentItem.score.fulltime.home !== null && currentItem.score.fulltime.away !== null){
                                            return  <div class="carousel-item active" key={index}>
                                                        <p className="card">
                                                            
                                                            <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                            <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                            <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                            {currentItem.teams.home.name} 
                                                            
                                                            <span className="homepage-score"> {currentItem.score.fulltime.home} : {currentItem.score.fulltime.away} </span> 
                                                            
                                                            {currentItem.teams.away.name}
                                                            
                                                            <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
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

                                                    <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>
                                                    
                                                    {currentItem.teams.home.name} 

                                                    <span className="homepage-score"> {currentItem.score.halftime.home} : {currentItem.score.halftime.away} </span> 

                                                    {currentItem.teams.away.name}

                                                    <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
                                                    </p>
                                                </div>
                                    } else if(index === 0 && currentItem.score.fulltime.home !== null && currentItem.score.fulltime.away !== null){
                                        return  <div class="carousel-item" key={index}>
                                                    <p className="card">

                                                        <p className='homepage-league-name'>{currentItem.league.name}</p>

                                                        <p className='homepage-league-name'>{currentItem.league.country}</p>

                                                        <img className="homepage-team-logo" src={currentItem.teams.home.logo} alt="player" height="100" width="100"/>

                                                        {currentItem.teams.home.name} 
                                                        
                                                        <span className="homepage-score"> {currentItem.score.fulltime.home} : {currentItem.score.fulltime.away} </span> 
                                                        
                                                        {currentItem.teams.away.name}

                                                         <img className="homepage-team-logo" src={currentItem.teams.away.logo} alt="player" height="100" width="100"/> 
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

