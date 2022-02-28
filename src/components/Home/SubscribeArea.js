const SubscribeArea = () => {
    return (
        <section className="subscribe__area">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="subscribe__content">
                            <h2>Subscribe To Us</h2>
                            <p>Subscribe to our newsletter</p>

                            <div className="subscribe__input">
                                <form action="/">
                                    <input
                                        type="mail"
                                        id="fname"
                                        name="fname"
                                        placeholder="Email"
                                    />

                                    <input
                                        type="submit"
                                        defaultValue="Subscribe Now"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeArea;
