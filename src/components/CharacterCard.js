import React from "react";
import {Card, CardHeader, makeStyles} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    cards:{
        width:"30%",
        margin:"3% 0"
    },
    CharacterIMG:{
        width:"30%"
    }
}))


export default function CharacterCard(props) {
    const classes = useStyles()
  return (
    <div>
  
      <Card className={classes.cards}>
          <CardHeader title={props.character.name} subheader={props.character.status} />
        <h3>Gender: {props.character.gender}</h3>
        <img className={classes.CharacterIMG} alt="characters of rick and morty" src={props.character.image} />
      </Card>

      </div>

  );
}
