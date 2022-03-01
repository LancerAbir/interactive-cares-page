import FeedbackSlider from "../../Third-Party-Components/FeedbackSlider";

const FeedbackArea = () => {
    return (
        <section className="feedback__area">
            <div className="feedback__top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section__title text-center">
                                <h2>Student Feedback</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feedback__bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="feedback__slider paddingPlus15">
                                <FeedbackSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackArea;
