import React, { useEffect } from "react";
import "./welcome.scss";
import "../../../App.scss";

import Button from "../../button/Button";
import HomeSection from "../HomeSection";
import {
  bg1,
  champAshe,
  champAhri,
  distortion,
  champGaren,
} from "../../../assets/images";

import hoverEffect from "hover-effect";

const champImgs = [champAshe, champGaren, champAhri];
const Welcome = (props) => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll("#welcome__img__slide > img");
    let animates = [];
    welcomeImgs.forEach((item, i) => {
      let nextImg =
        welcomeImgs[i === welcomeImgs.length - 1 ? 0 : i + 1].getAttribute(
          "src"
        );
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;
    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 2000);
    };

    setInterval(autoImageSlide, 2000);
  }, []);
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content bg-image"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome to</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians
            , and content creators who are waiting for you to join them.
          </div>
          <div className="btns m-t-4">
            <Button className="btn-main">PLAY NOW</Button>
            <Button className="btn-second">GET STARTED</Button>
          </div>
        </div>
      </div>
      <div className="welcome__img relative">
        <div className="welcome__img__slide" id="welcome__img__slide">
          {champImgs.map((champ, i) => (
            <img src={champ} key={i} alt="" />
          ))}
        </div>
      </div>
      
    </HomeSection>
  );
};

export default Welcome;
