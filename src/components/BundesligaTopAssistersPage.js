import React, { useEffect } from 'react';
import "./BundesligaTopAssistersPage.css"

const BundesligaTopAssistersPage = ( { topAssistersBundesliga, fetchBundesligaTopAssisters }) => {
    try {

         useEffect(() => {
            fetchBundesligaTopAssisters()
        }, [])

        return (
                <div>
                    <h1>{topAssistersBundesliga.parameters.season} Bundesliga Top Assisters:</h1>
                <div> {
                    topAssistersBundesliga.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                    <p>
                                        <img className="player-image" src={currentItem.player.photo} alt="player" height="100" width="100"/> 
                                        {currentItem.player.name}
                                    </p>
                                    <p>
                                        <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/> 
                                        {currentItem.statistics[0].team.name}
                                    </p>
                                    <p>
                                    Assist Count: {currentItem.statistics[0].goals.assists}
                                    </p>
                                    <button type="button" className="btn btn-primary">View Player Stats</button>
                                </li>
                    })}
                </div>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
    
}

export default BundesligaTopAssistersPage