import { useEffect } from "react"
import "./SerieATopScorersPage.css"
import { Dropdown } from "bootstrap"

const SerieATopScorersPage = ( { topScorersSerieA, fetchSerieATopScorers }) => {
    try {

        useEffect(() => {
            fetchSerieATopScorers()
        }, [])

        return (
            <div>
                <h1>{topScorersSerieA.parameters.season} Serie A Top Scorers:</h1>
                <div> {
                    topScorersSerieA.response.map((currentItem, index) => { 
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
  
  export default SerieATopScorersPage