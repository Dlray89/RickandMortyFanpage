import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import "./Dashboard.css";
import auth from "./auth";

const StyledHeader = styled.h2`
  text-align: center;
  color: white;
`;
const StyledNav = styled.button`
  padding: 2%;
  width: 29.5%;
  font-size: 20px;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  margin: 1% auto;
`;
const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  const [query, setQuery] = useState("");
  console.log("I am query", characters);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(res => {
        console.log(res.data.results)
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

  return (
    <StyledHeader className="character-list">
      <div>
        <StyledNav>
          <Link
            style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
            to={"/"}
          >
            Home
          </Link>
        </StyledNav>

        <StyledNav
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </StyledNav>
      </div>

        <SearchForm setQuery={setQuery} />
   

      <div>
        <h1>Welcome to your Dashboard</h1>
      </div>
      <StyleContainer>
        {characters.map(character => {
          return (
            <CharacterCard
              character={character}
              key={character.id}
              href={character.image}
            />
          );
        })}
      </StyleContainer>
    </StyledHeader>
  );
}
