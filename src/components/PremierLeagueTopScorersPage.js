import "./PremierLeagueTopScorersPage.css"
import { Dropdown } from "bootstrap"

const PremierLeagueTopScorersPage = ( { topScorers }) => {
    try {
        
        // for( let i = 0; i < topScorers.response.length; i++) {
            // console.log(topScorers.response[i].statistics[0].team.name)
        // }
        
        // console.log(topScorers.response.map(() => {
        //     console.log(topScorers.response)
        // }))
        // console.log(topScorers.response.map(() => { console.log(topScorers.response)}))
        return (
            <div>
                <h1>{topScorers.parameters.season} Premier League Top Scorers:</h1>
                <div> {
                    topScorers.response.map((currentItem, index) => { 
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
                                    Goal Count: {currentItem.statistics[0].goals.total}
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
  
  export default PremierLeagueTopScorersPage