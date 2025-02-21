import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "@/keyframes";
import Image from "next/image";
const Sponsor = () => {
  return (
    <Container className={"grid grid-cols-3 gap-5  items-center"}>
      {/*    <Reveal keyframes={fadeInUp} duration={800} delay={200}>
        <div className="flex items-center justify-center relative w-full h-[60px]">
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition={"center"}
            src="/SANRAJ.svg"
            alt="binance"
          />
        </div>
      </Reveal> */}
      <Reveal keyframes={fadeInUp} duration={800} delay={400}>
        <div className="flex items-center justify-center relative w-full h-[60px]">
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition={"center"}
            src="/sainiharish.svg"
            alt="ethereum"
          />
        </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} duration={800} delay={600}>
        <div className="flex items-center justify-center relative w-full h-[60px]">
          <text className="font-bold text-lg opacity-60 uppercase">
            Abhimanyu
          </text>
        </div>
      </Reveal>
      <Reveal keyframes={fadeInUp} duration={800} delay={600}>
        <div className="flex items-center justify-center relative w-full h-[60px]">
          <text className="font-bold text-lg opacity-60  uppercase">
            Mahesh
          </text>
        </div>
      </Reveal>
    </Container>
  );
};

export default Sponsor;
