const FeedbackArea = () => {
    return (
        <section className="feedback__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="section__title">
                            <h2>Student Feedback</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-4">
                        <div className="feedback__header__logo">
                            <img src="/img/download.png" alt="Feedback Logo" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="feedback__slider">
                        <p> feedback__slider</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackArea;
