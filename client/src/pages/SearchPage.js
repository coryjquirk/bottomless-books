import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Results from "../components/Results";
import Search from "../components/Search";

const SearchPage = () => {
  return (
    <Container fluid>
        <Search></Search>
        <Results></Results>
    </Container>
  );
};

export default SearchPage;