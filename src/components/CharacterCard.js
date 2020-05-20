import React,{ useEffect, useState } from "react";
import {Card, CardHeader, makeStyles} from "@material-ui/core"
import axios from "axios"


const useStyles = makeStyles((theme) => ({
    cards:{
        width:"30%",
        margin:"3% 0"
    },
    CharacterIMG:{
        width:"30%"
    }
}))


export default function CharacterCard() {
    const classes = useStyles()
    const [character , setCharacter ] = useState()
    const [query, setQuery] = useState('')


    useEffect(() => {
       
        axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(res => {
            const SoloEpi = res.data;
            setCharacter(SoloEpi)
            console.log("this is chacracter", res)
        })
    }, [character])
  return (
    <div>
        <div>
        
            <div>
                <p >{character.name}</p>
            </div>
        

            
</div>

      </div>

  );
}
