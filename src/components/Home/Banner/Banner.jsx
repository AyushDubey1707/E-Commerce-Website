import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.webp";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALE</h1>
                    <p>
                        Change Your Experience of listening to music with Boat and Explore All New Boat Rockerz 365 with 40 Hour Long Battery Backup which will help in listening to the music without disturbance
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
