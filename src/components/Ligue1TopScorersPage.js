import { useEffect } from "react"
import "./ligue1TopScorersPage.css"
import { Dropdown } from "bootstrap"

const Ligue1TopScorersPage = ( { topScorersLigue1, fetchLigue1TopScorers }) => {
    try {
          
        useEffect(() => {
            fetchLigue1TopScorers()
        }, [])

        return (
            <div>
                <h1 className="ligue1TopScorers-h1">{topScorersLigue1.parameters.season} Ligue 1 Top Scorers</h1>
                <table className="ligue1TopScorers-table">
                    <tr>
                        <th width={100}>#</th>
                        <th width={400}>Player:</th>
                        <th width={400}>Club:</th>
                        <th width={400}>Goal Count:</th>
                    </tr>
                </table>
                <div> {
                    topScorersLigue1.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                <tr>
                                    <td id="ligue1TopScorers-player-ranking"width={100}>{index + 1}</td>
                                    <td width={400}>
                                        <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                        {currentItem.player.name}
                                    </td>
                                    <td id="ligue1TopScorers-club" width={441}>
                                        <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                        {currentItem.statistics[0].team.name}
                                    </td>
                                    <td id="ligue1TopScorers-goal-count" width={300}>{currentItem.statistics[0].goals.total}</td>
                                    <td id="ligue1TopScorers-view-profile-link" width={86}><a href="/pltopscorers">View Profile</a></td>
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
  
  export default Ligue1TopScorersPage