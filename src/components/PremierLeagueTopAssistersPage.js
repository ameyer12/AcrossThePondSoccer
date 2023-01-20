import { useEffect } from 'react';
import React from 'react';
import "./PremierLeagueTopAssistersPage.css"

const PremierLeagueTopAssistersPage = ( { topAssisters, fetchPremierLeagueTopAssisters }) => {

    useEffect(() => {
        fetchPremierLeagueTopAssisters()
      }, [])

    try {
        return (
                <div>
                    <h1 className='premierLeagueTopAssisters-h1'>{topAssisters.parameters.season} Premier League Top Assisters</h1>
                    <table className="premierLeagueTopAssisters-table">
                        <tr>
                            <th width={100}>#</th>
                            <th width={400}>Player:</th>
                            <th width={400}>Club:</th>
                            <th width={400}>Assist Count:</th>
                        </tr>       
                    </table>
                <div> {
                    topAssisters.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                    <tr>
                                     <td id="premierLeagueTopAssisters-player-ranking"width={100}>{index + 1}</td>
                                        <td width={400}>
                                            <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                            {currentItem.player.name}
                                        </td>
                                        <td id="premierLeagueTopAssisters-club" width={450}>
                                            <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                            {currentItem.statistics[0].team.name}
                                        </td>
                                        <td id="premierLeagueTopAssisters-assist-count" width={300}>{currentItem.statistics[0].goals.assists}</td>
                                        <td id="premierLeagueTopAssisters-view-profile-link" width={86}><a href="/pltopassisters">View Profile</a></td>
                                        {/* <td width={100}><button type="button" className="btn btn-primary">View Player Stats</button></td> */}
                                    </tr>
                                    {/* <button type="button" className="btn btn-primary">View Player Stats</button> */}
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