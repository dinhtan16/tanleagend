import React, { useRef, useEffect } from "react";
import "./championdetail.scss";

import { closeIcon } from "../../../assets/images";

const ChampionDetail = (props) => {
  const iframeRef = useRef(null);
  const item = props.item;

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  const onclose = () => {
    document
      .querySelector(`#champ-detail-${props.id}`)
      .classList.remove("active");
    iframeRef.current.setAttribute("src", "");
    const img = document.querySelector(`#champ-img-${props.id}`);
    img.style.opacity = 0;
    setTimeout(() => {
      img.remove();
    }, 500);
  };
  return (
    <div
      id={`champ-detail-${props.id}`}
      className={`champ-detail bg-card-image ${
        props.active ? "active" : ""
      }`}
      style={{backgroundImage: `url(${item.bgLarge})`}}
    >
      <div className="champ-detail__content">
        <span>{item.nickName}</span>
        <h4 className="name main-color">{item.name}</h4>
        <span>
          Role : <span className="second-color">{item.role}</span>
        </span>
        <span style={{marginLeft:20}}>
             Difficulty : <span className="second-color">{item.difficulty}</span>
        </span>
        <div className="story">{item.description}</div>
        <span>Champion spotlight</span>
        <div className="video">
          <iframe
            title="champion spotlight"
            ref={iframeRef}
            width="100%"
          ></iframe>
        </div>
      </div>
      <div className="champ-detail__close" onClick={onclose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
};

export default ChampionDetail;
