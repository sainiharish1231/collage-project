import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
import Image from "next/image";
const AboutUs = () => {
  return (
    <Container className={"mb-44 scroll-mt-10 mt-60 sm:mt-60"} id="about">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">About Us</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full  sm:w-[400px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>
      </div>
      <div className="flex items-center">
        <div className="w-[44%] hidden sm:block">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
                src="/aboutus.png"
                alt="about us"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <h3 className="font-bold text-2xl mb-3">Welcome to My Greed</h3>
          <p className="mb-3 opacity-50">
            My Greed is your go-to platform for unique digital assets and NFTs.
            Founded with passion and expertise, we bring exclusive collections
            to enthusiasts and collectors worldwide.
          </p>
          <p className="mb-3 opacity-50">
            Our team, including experts like podar, ensures a
            seamless experience, curating top-tier NFTs for your portfolio.
            Explore, trade, and invest with confidence.
          </p>
          <p className="hidden lg:block mb-3 opacity-50">
            Join our growing community and experience the next era of digital
            collectibles. Whether you're a seasoned investor or just getting
            started, My Greed offers something for everyone.
          </p>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
            <Button variant={"primary"}>Explore Now</Button>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
