import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadingStyled = styled.header`
  margin: 0 auto;
  display: flex;
  width: 86%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: white;
`;
const StyleNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 3%;
  width: 80%;
`;
const Stylebuttons = styled.button`
  width: 70%;
  padding: 2%;
  font-size: 20px;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  border: solid 2px grey;
`;

const Styledimg = styled.div`
  display: flex;
  justify-content: center;
  border: solid 2px black;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  width: 68%;
  margin: 2% auto;
`;
const StyledP = styled.p`
  padding: 3%;
`;
const Styledimg1 = styled.div`
  display: flex;
  justify-content: center;
  border: solid 2px black;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  width: 68%;
  margin: 2% auto;
`;

const Styledintro = styled.p`
  padding: 3%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeadingStyled>
        <StyleNav>
          <Stylebuttons>
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              Home
            </Link>
          </Stylebuttons>

          <Stylebuttons>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/login"}
            >
              Login
            </Link>
          </Stylebuttons>

          <Stylebuttons>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/sign-up"}
            >
              {" "}
              Sign-Up{" "}
            </Link>
          </Stylebuttons>
        </StyleNav>
      </HeadingStyled>

      <div className='intro'>
          <h1>Welcome</h1>
          <p> Hello and welcome to the Rick and Morty Fan page!
          Here is where you can see all the latest episodes along
          with some of your favorite characters from the show. Feel 
          free to to sign up and login to check out som eof the features
          this page provides. Have fun and enjoy</p>
      </div>

      <Styledimg>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <StyledP>
          {" "}
          Right, Crocubot. So, you're half cold unfeeling reptile, half also
          cold equally unfeeling machine? Where do you want to die? If I've
          learned one thing, it's that before you get anywhere in life, you
          gotta stop listening to yourself. There is no god, Summer; gotta rip
          that band-aid off now you'll thank me later.
          <br />
          <br />
          Cool. Just stay in the driveway; the kill-bots are live, and I took
          you off the whitelist. Save it for the Semantics Dome, E.B. White.
          You're talking about Inception? A price for everything.{" "}
        </StyledP>
      </Styledimg>

      <Styledimg1>
        <StyledP>
          Right, Crocubot. So, you're half cold unfeeling reptile, half also
          cold equally unfeeling machine? Where do you want to die? If I've
          learned one thing, it's that before you get anywhere in life, you
          gotta stop listening to yourself. There is no god, Summer; gotta rip
          that band-aid off now you'll thank me later.
          <br />
          <br />
          Cool. Just stay in the driveway; the kill-bots are live, and I took
          you off the whitelist. Save it for the Semantics Dome, E.B. White.
          You're talking about Inception? A price for everything.{" "}
        </StyledP>

        <img
          className="morty-img"
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty"
        />
      </Styledimg1>
    </section>
  );
}
