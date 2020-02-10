import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Dashboard.css";

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
  border: solid 2px black;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  width: 69.6%;
  margin: 0% auto;
`;
const StyledP = styled.p`
  padding: 3%;
`;


const Styledintro = styled.p`
  text-align: center;
  border: solid 2px black;
  padding: 1%;
  box-sizing: border-box;
  width: 70%;
  margin: 0% auto;
  background: linear-gradient(to top, #2193b0, #6dd5ed);
`;

const StyledWelCont = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const StyledVideo = styled.iframe`
  margin: 2% 5%;
`;
const StyledVideoCont = styled.div`
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  border: solid 2px black;
  display: flex;
  width: 70%;
  margin: 2% auto;
  box-sizing: border-box;
`;
const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Styledfooter = styled.footer`
  background: linear-gradient(to top, #2193b0, #6dd5ed);
  width: 69.5%;
  margin: 1% auto;
  text-align: center;
  border: solid 2px black;

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
              to={"/dashboard"}
            >
              Dashboard
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
      <StyledIntroContainer>
        <Styledintro className="intro">
              <h1>Welcome</h1>

          <p>
            {" "}
            Hello and welcome to the Rick and Morty Fan page! Here is where you
            can see all the latest episodes along with some of your favorite
            characters from the show. Feel free to to sign up and login to check
            out som eof the features this page provides. Have fun and enjoy
            <br />
            <br />
            YOU MUST BE LOGGED IN TO ACCESS THE DASHBOARD
          </p>
        </Styledintro>
        <StyledVideoCont>
          <StyledVideo
            width="460"
            height="215"
            src="https://www.youtube.com/embed/E6TUs69Cw94"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></StyledVideo>

          <StyledVideo
            width="460"
            height="215"
            src="https://www.youtube.com/embed/4ctK1aoWuqY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></StyledVideo>
        </StyledVideoCont>
      </StyledIntroContainer>

      <StyledWelCont>
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
            You're talking about Inception? A price for everything.
            {" "}
          </StyledP>
          <img
            className="morty-img"
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="Morty"
          />
        </Styledimg>

        <Styledfooter>
          <p> Site created by Dap the Dev
          <br />
          <a target="_blank" href="https://www.dapthedev.com">www.dapthedev.com</a>
          </p>
        </Styledfooter>

     
      </StyledWelCont>
    </section>
  );
}
