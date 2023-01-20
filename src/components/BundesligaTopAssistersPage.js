import React, { useEffect } from 'react';
import "./BundesligaTopAssistersPage.css"

const BundesligaTopAssistersPage = ( { topAssistersBundesliga, fetchBundesligaTopAssisters }) => {
    try {

         useEffect(() => {
            fetchBundesligaTopAssisters()
        }, [])

    //     <div>
    //     <h1 className="laLigaTopAssisters-h1">{topAssistersLaLiga.parameters.season} La Liga Top Assisters</h1>
    //     <table className="premierLeagueTopScorers-table">
    //       <tr>
    //         <th width={100}>#</th>
    //         <th width={400}>Player:</th>
    //         <th width={400}>Club:</th>
    //         <th width={400}>Assist Count:</th>
    //       </tr>
    //     </table>
    // <div> {
    //   topAssistersLaLiga.response.map((currentItem, index) => { 
    //       return <li className="card" key={index}> 
    //                 <tr>
    //                   <td id="laLigaTopAssisters-player-ranking"width={100}>{index + 1}</td>
    //                   <td width={400}>
    //                       <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
    //                       {currentItem.player.name}
    //                   </td>
    //                   <td id="laLigaAssisters-club" width={447}>
    //                       <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
    //                       {currentItem.statistics[0].team.name}
    //                   </td>
    //                   <td id="laLigaTopAssisters-assist-count" width={300}>{currentItem.statistics[0].goals.assists}</td>
    //                   <td id="laLigaTopAssisters-view-profile-link" width={86}><a href="/laligatopassisters">View Profile</a></td>
    //                   {/* <td width={100}><button type="button" className="btn btn-primary">View Player Stats</button></td> */}
    //                 </tr>
    //                 {/* <button type="button" className="btn btn-primary">View Player Stats</button> */}
    //               </li>
    //       })}
    //   </div>
    // </div>

        return (
                <div>
                    <h1 className='bundesligaTopAssisters-h1'>{topAssistersBundesliga.parameters.season} Bundesliga Top Assisters</h1>
                    <table className="bundesligaTopAssisters-table">
                        <tr>
                            <th width={100}>#</th>
                            <th width={400}>Player:</th>
                            <th width={400}>Club:</th>
                            <th width={400}>Assist Count:</th>
                        </tr>
                    </table>
                <div> {
                    topAssistersBundesliga.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                    <tr>
                                        <td id="bundesligaTopAssisters-player-ranking"width={100}>{index + 1}</td>
                                        <td width={400}>
                                            <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                            {currentItem.player.name}
                                        </td>
                                        <td id="bundesligaTopAssisters-club" width={450}>
                                            <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                            {currentItem.statistics[0].team.name}
                                        </td>
                                        <td id="bundesligaTopAssisters-assist-count" width={300}>{currentItem.statistics[0].goals.assists}</td>
                                        <td id="bundesligaTopAssisters-view-profile-link" width={86}><a href="/bundesligatopassisters">View Profile</a></td>
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

export default BundesligaTopAssistersPage