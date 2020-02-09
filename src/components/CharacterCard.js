import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  text-align: center;
  border: solid 2px black;
  margin: 3% auto;
  border-radius: 20px;
  width: 50%;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  padding: 3%;
`;


export default function CharacterCard(props) {
  return (
  
      <StyleCard>
        <h2>Name: {props.character.name}</h2>
        <h3>Gender: {props.character.gender}</h3>
        <p>Staus: {props.character.status}</p>
        <img alt="characters of rick and morty" src={props.character.image} />
      </StyleCard>

  );
}
