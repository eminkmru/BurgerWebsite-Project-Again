import React from "react";
import "../styles/About.css";
import BannerImage from "../assets/banneryeni.jpg";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eum suscipit iste voluptatem cumque voluptas dignissimos, id, amet
          quidem iusto minima dolorem deserunt itaque sapiente? Ex natus odit
          reiciendis laboriosam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur eum suscipit iste voluptatem cumque
          voluptas dignissimos, id, amet quidem iusto minima dolorem deserunt
          itaque sapiente? Ex natus odit reiciendis laboriosam? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur eum suscipit
          iste voluptatem cumque voluptas dignissimos, id, amet quidem iusto
          minima dolorem deserunt itaque sapiente? Ex natus odit reiciendis
          laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur eum suscipit iste voluptatem cumque voluptas dignissimos,
          id, amet quidem iusto minima dolorem deserunt itaque sapiente? Ex
          natus odit reiciendis laboriosam?
        </p>
      </div>
    </div>
  );
};
