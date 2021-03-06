import dynamic from "next/dynamic";
import React, { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const HeaderHero = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="header__hero">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-5">
                        <div className="header__hero__content">
                            <h1>
                                Enhance Your
                                <span>Learning </span>
                            </h1>
                            <div className="header__hero__popular__item d-inline-flex">
                                <h3>Popular</h3>
                                <h3 className="header__hero__popular__itemList">
                                    GRE
                                </h3>
                                <h3 className="header__hero__popular__itemList">
                                    IELTS
                                </h3>
                                <h3 className="header__hero__popular__itemList">
                                    Python
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div className="header__hero__video ">
                            <i
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(true);
                                }}
                                className="fas fa-play"
                            ></i>
                        </div>
                        <ModalVideo
                            channel="youtube"
                            className="video-popup"
                            autoplay
                            isOpen={isOpen}
                            videoId="zB6JLN06Ix4"
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHero;
