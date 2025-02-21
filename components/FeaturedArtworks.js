import { list_artwork } from "@/fake_data";
import React from "react";
import { Container, NFTItem } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInDownShorter2 } from "@/keyframes";

const FeaturedArtworks = () => {
  return (
    <Container className={"mb-44 scroll-mt-20 mt-20 sm:mt-60"} id="feature">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Featured Artworks</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full sm:w-[400px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-flow-row-dense grid-flow-col-dense-dense sm:grid-cols-2  md:grid-cols-3 gap-4">
        {list_artwork.map((item, i) => (
          <Reveal
            key={i}
            keyframes={fadeInDownShorter}
            duration={500}
            delay={item.delay}
          >
            <NFTItem data={item} />
          </Reveal>
        ))}
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Projects we are proud of
          </h2>

          <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12 ">
            <div
              className="mb-6 block rounded-lg 
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   
                lg:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[#0000ff] ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
                  className="w-full  rounded-t-lg"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0     "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="blue"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Nostalgic waves</h5>
                <p className="mb-6">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal    shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div
              className="mb-6 block rounded-lg  
             shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   lg:mb-0"
            >
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat "
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/114.jpg"
                  className="w-full rounded-t-lg "
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0
                   left-0 h-full w-full bg-fixed opacity-0 transition duration-300 
                   ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"
                  ></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0     "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="blue"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Winter wildlife</h5>
                <p className="mb-6">
                  Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                  diam orci, nec ornare metus semper sed. Integer volutpat
                  ornare erat sit amet rutrum.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 
                  pt-2.5 text-xs font-medium uppercase leading-normal  
                    shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150
                     ease-in-out hover:bg-primary-600 
                     hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                      focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                      focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                      dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                       dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                       dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="block rounded-lg   shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/117.jpg"
                  className="w-full rounded-t-lg"
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0
                   left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"
                  ></div>
                </a>
                <svg
                  className="absolute left-0 bottom-0     "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="blue"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Camping travel</h5>
                <p className="mb-6">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal    shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default FeaturedArtworks;
