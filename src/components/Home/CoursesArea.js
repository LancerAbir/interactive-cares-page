const CoursesArea = () => {
    return (
        <section className="course__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="section__title">
                            <h2>Most Trending Online Courses</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="course__box">
                            <img
                                src="/img/spoken-english-learning-path-cover-768x402.jpg"
                                alt="Course__Image"
                            />
                            <div className="course__content">
                                <i className="far fa-star"></i>
                                <h3>Spoken English Learning Path</h3>
                                <div className="course__by">
                                    <a className="ic" href="#">
                                        ic
                                    </a>
                                    by
                                    <a href="#">Interactive Cares</a>
                                </div>
                                <div className="course__rate">
                                    <h4 className="course__rate__delete">
                                        ৳ 3,000.00
                                    </h4>
                                    <h4>৳ 600.00</h4>
                                    <div className="course__addToCart">
                                        <i className="fas fa-shopping-cart"></i>
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-6">
                        <div className="course__area__pagination">
                            <i className="fas fa-angle-double-left"></i>
                            <p>Previous</p>
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesArea;
