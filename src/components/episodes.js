import React, { useEffect, useState } from "react"
import { Card, CardHeader, Divider, CardContent, TextField } from "@material-ui/core"
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

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return(
        <div>
            <div>
                <p>Episodes</p>
                <TextField onChange={handleChange} placeholder="search..." />
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {episodes.map(episode => 
                        <Card style={{width:"20%", margin: " 2% 2%"}} key={episode.id}>
                        <CardHeader title={episode.name} subheader={episode.episode} />
                        <Divider  />
                        <CardContent>
                            Episode Aired: <br />
                             {episode.air_date} <br />
                         <a media={episode.url}>URL</a>
                        </CardContent>
                     
                        
                         </Card>
                        )}
                </div>
            </div>
        </div>
    )
}

export default EpisodesList