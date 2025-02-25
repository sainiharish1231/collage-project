import { AboutUs, Navbar } from "../components";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
        <div className="About">
          <div className="card">
            <div className="card-img">
              <Image
                src="/my.jpeg"
                alt="Harish Saini"
                width={200}
                height={200}
              />
            </div>
            <div className="desc">
              <h6 className="secondary-text">Web Developer</h6>
            </div>
            <a className="button" href="">
              Harish Saini
            </a>
            <div className="details">
              <div className="rating">
                <h6 className="primary-text">6</h6>
                <h6 className="secondary-text">Project</h6>
              </div>
              <div className="activity">
                <h6 className="primary-text">92%</h6>
                <h6 className="secondary-text">Activity</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="About">
          <div className="card">
            <div className="card-img">
              <Image
                className="cover"
                src="/abhi.jpeg"
                alt="Abhimanyu"
                width={200}
                height={200}
              />
            </div>
            <div className="desc">
              <h6 className="secondary-text">FullStack Developer</h6>
            </div>
            <a className="button" href="">
              Abhimanyu
            </a>
            <div className="details">
              <div className="rating">
                <h6 className="primary-text">3</h6>
                <h6 className="secondary-text">Project</h6>
              </div>
              <div className="activity">
                <h6 className="primary-text">96%</h6>
                <h6 className="secondary-text">Activity</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="About">
          <div className="card">
            <div className="card-img">
              <Image src="/mahesh.jpeg" alt="Mahesh" width={200} height={200} />
            </div>
            <div className="desc">
              <h6 className="secondary-text">FullStack Developer</h6>
            </div>
            <a className="button" href="">
              Mahesh
            </a>
            <div className="details">
              <div className="rating">
                <h6 className="primary-text">5</h6>
                <h6 className="secondary-text">Project</h6>
              </div>
              <div className="activity">
                <h6 className="primary-text">98%</h6>
                <h6 className="secondary-text">Activity</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      <AboutUs />
    </>
  );
}
