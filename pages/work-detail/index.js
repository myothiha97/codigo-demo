import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";

import Link from "next/link";
import images from "./imagelists.data";
const WorkDetailPage = () => {
  const [slickImages, setSlickImages] = useState(images);
  const [imageIndex, setImageIndex] = useState(0);
  const navigateBtn = useRef();

  const handleBtnState = (img) => {
    let newImages = slickImages.map((image) => {
      if (image.imageUrl === img.imageUrl) {
        image.className = "is-active";
        return image;
      } else {
        image.className = "";
        return image;
      }
    });
    setSlickImages(newImages);
  };

  return (
    <div className="work-detail">
      <div className="work-detail__wrapper">
        <div className="project-details__wrapper">
          <p className="details__header-hidden">OCBC Pay Anyone</p>
          <div className="project-details__wrapper--left">
            <p className="details__header">OCBC Pay Anyone</p>
            <div className="logo__wrapper">
              <Link href="https://apps.apple.com/sg/app/ocbc-pay-anyone/id1238648978">
                <div className="logo-item">
                  <div
                    className="logo"
                    style={{
                      backgroundImage: `url(https://www.codigo.co/img/ui/ico-app_store.png)`,
                    }}
                  ></div>

                  <p className="label-top">AVAILABEL ON</p>
                  <p className="label-bottom">App Store</p>
                </div>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.ocbc.pay&hl=en_SG&gl=US">
                <div className="logo-item">
                  <div
                    className="logo"
                    style={{
                      backgroundImage:
                        "url(https://www.codigo.co/img/ui/ico-google_play-store.png)",
                    }}
                  ></div>
                  <p className="label-top">AVAILABEL</p>
                  <p className="label-bottom">Google Play</p>
                </div>
              </Link>
            </div>
            <div className="project-details__body">
              You can now pay kopitiam uncles, merchants, peers, and dears with
              the OCBC Pay Anyone app, and you can even withdraw cash by
              scanning the QR code at OCBC’s ATMs without your card!
            </div>
            <div className="project-keyfeatures">
              <p className="keyfeatures-label">Key Features</p>
              <div className="keyfeatues-texts__wrapper">
                <ul>
                  <li>Scan to pay</li>
                  <li>Transfer cash and request payment</li>
                  <li>ATM QR cash withdrawal</li>
                  <li>Access exclusive discounts and promotions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-details__wrapper--right">
            <div className="workdetail-slider__ballbg"></div>
            <div className="workdetail-slider__wrapper">
              <div className="slide-lists">
                <div className="slide-track">
                  <div className="slick-slide">
                    <img
                      className="slick-slide-image"
                      src={slickImages[imageIndex].imageUrl}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <ul className="slick-dots">
                {images.map((image, idx) => (
                  <li key={idx}>
                    <button
                      onClick={(e) => {
                        setImageIndex(idx);
                        handleBtnState(image);
                      }}
                      data-index={idx}
                      className={image.className}
                    >
                      {idx}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;
