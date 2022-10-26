import React from 'react';
import "./PremierLeagueTopAssistersPage.css"

  

const PremierLeagueTopAssistersPage = ( { topAssisters }) => {
    try {
        return (
                <div>
                    <h1>{topAssisters.parameters.season} Premier League Top Assisters:</h1>
                <div> {
                    topAssisters.response.map((currentItem, index) => { 
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

export default PremierLeagueTopAssistersPage