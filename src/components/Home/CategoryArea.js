import CategorySlider from "../../Third-Party-Components/CategorySlider";

const CategoryArea = () => {
    return (
        <section className="category__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="category__area__heading">
                            <h2 className="text-center">
                                Select Your <span>Favourite</span> Category &
                                Start Learning
                            </h2>
                            <div className="category__area__slider text-center">
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryArea;
