import React from "react";
import { Button, Container } from ".";
import { JackInTheBox, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInDownShorter2,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/keyframes";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="flex flex-col sm:flex-row mt-20 mb-32">
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
            <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
              <Button
                isLink
                href={"/#about"}
                className="mr-3"
                variant="primary"
              >
                Explore Blog
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
              <div>
                <p className="font-bold text-2xl mb-1">3</p>
                <p className="opacity-50">Team Members</p>
              </div>
            </Reveal>
            <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
              <div>
                <p className="font-bold text-2xl mb-1">100+</p>
                <p className="opacity-50">Posts</p>
              </div>
            </Reveal>
            <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
              <div>
                <p className="font-bold text-2xl mb-1">500+</p>
                <p className="opacity-50">Visitors</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Section: Gallery */}
        <div className="flex-1 mt-14 sm:mt-0">
          <JackInTheBox keyframes={fadeInRight} duration={800} delay={200}>
            <div className="relative w-full h-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <Reveal keyframes={fadeInLeft} duration={800} delay={800}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal keyframes={fadeInRight} duration={300} delay={1000}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal
                      keyframes={fadeInDownShorter}
                      duration={1200}
                      delay={1000}
                    >
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Reveal
                      keyframes={fadeInDownShorter2}
                      duration={1400}
                      delay={1800}
                    >
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal keyframes={fadeInRight} duration={800} delay={800}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal keyframes={fadeInLeft} duration={1100} delay={800}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Reveal keyframes={fadeInUp} duration={800} delay={1200}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal keyframes={fadeInRight} duration={800} delay={800}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal
                      keyframes={fadeInDownShorter}
                      duration={800}
                      delay={1200}
                    >
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <Reveal keyframes={fadeInLeft} duration={1200} delay={1100}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal
                      keyframes={fadeInDownShorter}
                      duration={800}
                      delay={800}
                    >
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                  <div>
                    <Reveal keyframes={fadeInUp} duration={1000} delay={800}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                        alt="Gallery"
                      />
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </JackInTheBox>
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
