import { list_collection } from "@/fake_data";
import React, { useEffect, useState } from "react";
import { Button, Container, NFTItem } from ".";
import { Reveal } from "react-awesome-reveal";

const btnList = [
  {
    name: "Art",
    delay: 100,
  },
  {
    name: "Sport",
    delay: 400,
  },
  {
    name: "Photography",
    delay: 700,
  },
  {
    name: "Pattern",
    delay: 1000,
  },
];
import { fadeInDownShorter, fadeInDownShorter2, fadeInLeft } from "@/keyframes";
const Collections = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    setItemList([]);
    const currentItemName = btnList[activeBtn].name;
    const currentData = list_collection.filter(
      (collectionItem) => collectionItem.category == currentItemName
    );
    const timerId = setTimeout(() => setItemList(currentData), 10);
    return () => {
      clearTimeout(timerId);
    };
  }, [activeBtn]);

  return (
    <Container id="collections" className={"mb-44 mt-10 scroll-mt-10"}>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Collection</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[400px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>
      </div>
      <div
        className="grid grid-cols-2 
      sm:grid-cols-4 gap-4 mb-5"
      >
        {btnList.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInLeft}
            duration={300}
            delay={item.delay}
          >
            <Button
              onClick={() => setActiveBtn(i)}
              variant={i == activeBtn ? "primary" : ""}
              className="w-full transition duration-1000 ease-in-out"
            >
              {item.name}
            </Button>
          </Reveal>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {itemList.map((item, i) => {
          return (
            <Reveal
              key={i}
              keyframes={fadeInDownShorter}
              duration={500}
              delay={50}
            >
              <NFTItem data={item} />
            </Reveal>
          );
        })}
      </div>{" "}
    </Container>
  );
};

export default Collections;
