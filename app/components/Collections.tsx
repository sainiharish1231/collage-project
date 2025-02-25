"use client";
import React from "react";
import { Container } from ".";
import NewBlog from "./Newblog";

const Collections: React.FC = () => {
  return (
    <Container id="collections" className={"mb-44 mt-10 scroll-mt-10"}>
      <NewBlog />
    </Container>
  );
};

export default Collections;
