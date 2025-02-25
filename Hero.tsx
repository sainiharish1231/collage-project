"use client";
import React from "react";
import Image from "next/image";
import {  Container } from "../components";
import { Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../keyframes";
// import Button from "./Button";

interface HeroProps {
  teamMembers: number;
  posts: number;
  visitors: number;
}

const Hero: React.FC<HeroProps> = ({ teamMembers, posts, visitors }) => {
  return (
    <div className="relative">
      <Container className="flex flex-col sm:flex-row sm:mt-10 mb-32">
        {/* Left Section: Intro & Team */}
        <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[20px] sm:mt-5 lg:mt-10">
          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <h1 className="text-3xl lg:text-6xl font-bold mb-5">
              Welcome to <br /> MyGreed Blog
            </h1>
            <h2 className="font-bold">A College Project Blog</h2>
            <h6>
              A collaborative platform showcasing innovative projects and ideas.
            </h6>
          </Reveal>
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
            <p className="mb-8 opacity-50">
              Join us on our journey as we explore technology, creativity, and
              teamwork.
            </p>
          </Reveal>
          <div className="flex mb-10">
          {/*   <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
              <Button
                isLink
                href={"/#about"}
                className="mr-3"
                variant="primary"
              >
                Explore Blog
              </Button>
            </Reveal> */}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
              <div>
                <p className="font-bold text-2xl mb-1">{teamMembers}</p>
                <p className="opacity-50">Team Members</p>
              </div>
            </Reveal>
            <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
              <div>
                <p className="font-bold text-2xl mb-1">{posts}+</p>
                <p className="opacity-50">Posts</p>
              </div>
            </Reveal>
            <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
              <div>
                <p className="font-bold text-2xl mb-1">{visitors}+</p>
                <p className="opacity-50">Visitors</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Section: Gallery */}
        <div className="flex-1 mt-14 sm:mt-0">
          <Reveal keyframes={fadeInRight} duration={800} delay={200}>
            <div className="relative w-full h-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(11)].map((_, index) => (
                  <Reveal
                    key={index}
                    keyframes={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    duration={800}
                    delay={200 * index}
                  >
                    <Image
                      className="h-auto max-w-full rounded-lg"
                      src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${
                        index + 1
                      }.jpg`}
                      alt={`Gallery Image`}
                      width={300} // Adjust as needed
                      height={200}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={1500}>
          <svg
            className="w-8 h-8 animate-bounce text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
