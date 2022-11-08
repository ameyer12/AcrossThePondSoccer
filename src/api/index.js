// export const getLiveScores = async () => {
//     try {
//         const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', 
//         {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '0c59b2f3ebmsh3c13f6b4fc1865fp100b8ajsnaebdba8feddc',
//                 'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//                 }
//             }
//         );

//         const results = await response.json()
//         // console.log(results)

//         return results

//     } catch (error) {
//         console.log(error)
//     }
// }


export const getLiveScores = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', 
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            }
        );

        const results = await response.json()
        // console.log(results)

        return results

    } catch (error) {
        console.log(error)
    }
}

export const getPremierLeagueTopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getPremierLeagueTopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
    
        return results
    } catch (error) {
        console.log(error)
    }
}
    
export const getLaLigaTopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=140&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getLaLigaTopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=140&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getBundesligaTopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=78&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getBundesligaTopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=78&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getSerieATopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=135&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getSerieATopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=135&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getLigue1TopScorers = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=61&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}

export const getLigue1TopAssisters = async () => {
    try {
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=61&season=2022', 
            {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            } 
        );

        const results = await response.json();
        // console.log(results)
        
        return results
    } catch (error) {
        console.log(error)
    }
}