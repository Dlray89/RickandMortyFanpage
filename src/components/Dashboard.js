import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardHeader, Divider, CardContent, CardActionArea, Button, TextField } from "@material-ui/core"
import "./Dashboard.css";





export default function CharacterList() {
    const [characters, setCharacters] = useState([]);    
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                console.log("Characters List", res.data)
                const list = res.data.results.filter(item => {
                    return item.name.toLowerCase().includes(query.toLowerCase());
                });
                // const list = res.data.results;

                setCharacters(list);
            })
            .catch(error => {
                console.log("an Error", error);
            });
    }, [query]);

    const handlechanges = event => {
        setQuery(event.target.value);
    }

    return (
        <div className="character-list">

            <div>
                <h1>Characters</h1>
            </div>

        <div style={{margin:"0 auto", textAlign:"center"}}>
            <TextField  style={{margin:"0 auto", width:"70%"}} variant="outlined" placeholder="search.." onChange={handlechanges} />
            </div>
            



            <div style={{display:"flex", flexWrap:"wrap"}}>
                {characters.map((character) =>
                    <Card variant="outlined" style={{ width: "30%", margin: "3% auto" }} key={character.id}>
                       <Link to={`${character.id}`} ><CardHeader title={character.name} subheader={character.gender} /></Link> 
                        <Divider />
                        <CardContent style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-evenly", alignContent: "center" }}>
                            <div>
                                <p>species: <br />{character.species}</p>
                                <p> Status: <br />{character.status}</p>
                            </div>

                            <img style={{ width: "50%" }} src={character.image} />

                        </CardContent>
                        <CardActionArea style={{textAlign:"center"}}>
                            <Button key={`${character.id}`}>Episodes</Button>
                            <Button>Location</Button>
                        </CardActionArea>






                    </Card>)}
                    
            </div>
          
        </div>
    );
}
