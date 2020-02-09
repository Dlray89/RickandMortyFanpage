import React from "react";
import styled from "styled-components";


const StyleForm = styled.section`
text-align: center;
`


export default function SearchForm(props) {

const handlechanges = event => {
      props.setQuery(event.target.value);
  }

  

  return (

    <StyleForm className="search-form">
     <form>
     <label>Search: </label>
         <input 
         onChange={handlechanges}
         type="text"
         name="character"
         placeholders="Search"
         />
     </form>
    </StyleForm>
  );
}