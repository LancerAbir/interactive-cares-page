const HeaderHero = () => {
    return (
        <section className="header__hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header__hero__content">
                            <h1>
                                Enhance Your
                                <span>Learning </span>
                            </h1>
                            <div className="header__hero__popular__item">
                                <h3>Popular</h3>
                                <h3 className="header__hero__popular__itemList">
                                    Gre
                                </h3>
                                <h3 className="header__hero__popular__itemList">
                                    Ielts
                                </h3>
                                <h3 className="header__hero__popular__itemList">
                                    Python
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header__hero__video">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderHero;