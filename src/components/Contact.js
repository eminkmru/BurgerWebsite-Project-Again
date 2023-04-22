import React from "react";
import "../styles/Contact.css";
import BannerImage from "../assets/banner.png";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen Emailinizi Giriniz..."
          />
          <label>Mesajınız</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı Soyadınızı Giriniz..."
          />
        </form>
      </div>
    </div>
  );
};
