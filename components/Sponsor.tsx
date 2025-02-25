import React from "react";
import { Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "../keyframes";

const Sponsor = () => {
  const sponsors = ["Harish","abhimanyu", "Mahesh", ];

  return (
    <Container className="grid grid-cols-3 gap-5 items-center">
      {sponsors.map((sponsor, index) => (
        <Reveal key={index} keyframes={fadeInUp} duration={800} delay={600}>
          <div className="flex items-center justify-center relative w-full h-[60px]">
            <span className="font-bold text-2xl opacity-60 uppercase">
              {sponsor}
            </span>
          </div>
        </Reveal>
      ))}
    </Container>
  );
};

export default Sponsor;
