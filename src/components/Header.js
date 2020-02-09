import React from "react";
import styled from "styled-components";

const WrapperHeader = styled.header`
background: linear-gradient(to left, #bdc3c7, #2c3e50);
text-align: center;
color: white;
width: 100%;
margin: 0 auto;
` 
//styling up top
export default function Header() {
  return (
    <WrapperHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </WrapperHeader>
  );
}