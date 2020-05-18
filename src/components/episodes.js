import React, { useEffect, useState } from "react"
import axios from "axios"

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/episode")
        .then(res => {
            console.log("all episodes", res.data)
              const list = res.data.results.filter(show => {
                  return show.name.toLowerCase().includes(query.toLowerCase())
              })

              setEpisodes(list)
                
        })
        .catch(error => {
            console.log("error", error)
        })
    }, [query])


    return(
        <div>
            <div>
                <p>Episodes</p>
                <div>
                    {episodes.map(episode => 
                        <div key={episode.id}>
                         {episode.name} <br />
                         {episode.episode}  <br />
                         {episode.air_date} <br />
                         <a href={episode.url}>URL</a>
                         </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default EpisodesList