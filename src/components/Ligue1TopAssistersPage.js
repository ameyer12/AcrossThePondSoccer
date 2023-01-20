import React, { useEffect } from 'react';
import "./Ligue1TopAssistersPage.css"

const Ligue1TopAssistersPage = ( { topAssistersLigue1, fetchLigue1TopAssisters }) => {
    try {

        useEffect(() => {
            fetchLigue1TopAssisters()
        }, [])

        return (
                <div>
                    <h1 className="ligue1TopAssisters-h1">{topAssistersLigue1.parameters.season} Ligue 1 Top Assisters</h1>
                    <table className="ligue1TopAssisters-table">
                        <tr>
                            <th width={100}>#</th>
                            <th width={400}>Player:</th>
                            <th width={400}>Club:</th>
                            <th width={400}>Assist Count:</th>
                        </tr>       
                    </table>
                <div> {
                    topAssistersLigue1.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                    <tr>
                                        <td id="ligue1TopAssisters-player-ranking"width={100}>{index + 1}</td>
                                        <td width={400}>
                                            <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                            {currentItem.player.name}
                                        </td>
                                        <td id="ligue1TopAssisters-club" width={450}>
                                            <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                            {currentItem.statistics[0].team.name}
                                        </td>
                                        <td id="ligue1TopAssisters-assist-count" width={300}>{currentItem.statistics[0].goals.assists}</td>
                                        <td id="ligue1TopAssisters-view-profile-link" width={86}><a href="/ligue1topassisters">View Profile</a></td>
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

export default Ligue1TopAssistersPage