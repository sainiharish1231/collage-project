"use client";
import { Hero, Sponsor } from "./components";
import React from "react";
import Features from "./components/Features";

const Home = () => {
  return (
    <>
      <div className="h-full overflow-hidden sm:mt-60" id="top">
        <Hero teamMembers={3} posts={20} visitors={220} />
        <Sponsor />
        <Features />
      </div>
    </>
  );
};

export default Home;
