const InstructorsArea = () => {
    return (
        <section className="instructors__area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="professional__instructors__Image">
                                <img
                                    src="img/9-min-150x150.png"
                                    alt="Professional Instructors Image"
                                />
                            </div>
                            <div className="professional__instructors__Image">
                                <img
                                    src="img/1-min-150x150.jpg"
                                    alt="Professional Instructors Image"
                                />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="instructors__image">
                                <img
                                    src="img/ROKSHANA-AKTER-RUPEE-150x150.png"
                                    alt="Professional Instructors Image"
                                />
                            </div>
                            <div className="instructors__image">
                                <img
                                    src="img/CCP-Instructor-7-150x150.jpg"
                                    alt="Professional Instructors Image"
                                />
                            </div>
                            <div className="instructors__image">
                                <img
                                    src="img/SABRINA-RASHID-SHEONTY-Canada-150x150.png"
                                    alt="Professional Instructors Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="instructors__content">
                            <h2>
                                Professional <span> Instructors</span>
                            </h2>
                            <div className="instructors__icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>
                                Join the team of professional instructors today!
                            </p>
                            <div className="instructors__btn">
                                <a href="#"> Become Instructor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorsArea;
