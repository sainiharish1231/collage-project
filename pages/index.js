import { Button, Container, Footer, Hero, Sponsor } from "@/components";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInRight, fadeInUp } from "@/keyframes";
import Features from "@/components/Features";

const Home = () => {
  return (
    <>
      <div className="h-full overflow-hidden mt-30 sm:mt-60" id="top">
        <Hero />
        <Sponsor />
        <Features />
        <Container>
          <div
            className={
              "bg-gradient-to-b from-[#B75CFF] to-[#671AE4] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44"
            }
          >
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center">
              Get ready to collect our NFT
            </h2>
            <div className="flex mt-10">
              <Reveal duration={1000} delay={200}>
                <Button
                  isLink
                  href={"#"}
                  className={"mr-3"}
                  variant={"primary"}
                >
                  Get Start
                </Button>
              </Reveal>
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
