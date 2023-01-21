import { useEffect } from "react"
import "./BundesligaTopScorersPage.css"
import { Dropdown } from "bootstrap"

const BundesligaTopScorersPage = ( { topScorersBundesliga, fetchBundesligaTopScorers }) => {
    try {

        useEffect(() => {
            fetchBundesligaTopScorers()
        }, [])

        return (
            <div>
                <h1 className="bundesligaTopScorers-h1">{topScorersBundesliga.parameters.season} Bundesliga Top Scorers</h1>
                <table className="premierLeagueTopAssisters-table">
                    <tr>
                        <th width={100}>#</th>
                        <th width={400}>Player:</th>
                        <th width={400}>Club:</th>
                        <th width={400}>Goal Count:</th>
                    </tr>       
                </table>
                <div> {
                    topScorersBundesliga.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                  <tr>
                                    <td id="bundesligaTopScorers-player-ranking"width={100}>{index + 1}</td>
                                    <td width={400}>
                                        <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                        {currentItem.player.name}
                                    </td>
                                    <td id="bundesligaTopScorers-club" width={441}>
                                        <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                        {currentItem.statistics[0].team.name}
                                    </td>
                                    <td id="bundesligaTopScorers-goal-count" width={300}>{currentItem.statistics[0].goals.total}</td>
                                    <td id="bundesligaTopScorers-view-profile-link" width={86}><a href="/bundesligatopscorers">View Profile</a></td>
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
  
  export default BundesligaTopScorersPage