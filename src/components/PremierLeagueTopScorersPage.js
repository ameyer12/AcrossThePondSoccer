import { useEffect } from "react"
import "./PremierLeagueTopScorersPage.css"

const PremierLeagueTopScorersPage = ( { topScorers, fetchPremierLeagueTopScorers }) => {
    try {
        
        // for( let i = 0; i < topScorers.response.length; i++) {
            // console.log(topScorers.response[i].statistics[0].team.name)
        // }
        
        // console.log(topScorers.response.map(() => {
        //     console.log(topScorers.response)
        // }))
        // console.log(topScorers.response.map(() => { console.log(topScorers.response)}))

        useEffect(() => {
            fetchPremierLeagueTopScorers()
          }, [])

        return (
            <div>
                <h1 className="premierLeagueTopScorers-h1">{topScorers.parameters.season} Premier League Top Scorers</h1>
                <table className="premierLeagueTopScorers-table">
                    <tr>
                        <th width={100}>#</th>
                        <th width={400}>Player:</th>
                        <th width={400}>Club:</th>
                        <th width={400}>Goal Count:</th>
                    </tr>
                </table>
                <div> {
                    topScorers.response.map((currentItem, index) => { 
                        return <li className="card" key={index}>
                                   <tr>
                                        <td id="premierLeagueTopScorers-player-ranking"width={100}>{index + 1}</td>
                                        <td width={400}>
                                            <img className="player-image" src={currentItem.player.photo} alt="player" height="75" width="75"/> 
                                            {currentItem.player.name}
                                        </td>
                                        <td id="premierLeagueTopScorers-club" width={445}>
                                            <img className="team-logo-image" src={currentItem.statistics[0].team.logo} alt="team logo" height="50" width="50"/>
                                            {currentItem.statistics[0].team.name}
                                        </td>
                                        <td id="premierLeagueTopScorers-goal-count" width={300}>{currentItem.statistics[0].goals.total}</td>
                                        <td id="premierLeagueTopScorers-view-profile-link" width={86}><a href="/pltopscorers">View Profile</a></td>
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
  
  export default PremierLeagueTopScorersPage