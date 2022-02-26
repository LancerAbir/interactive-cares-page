const SubscribeArea = () => {
    return (
        <section className="subscribe__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="subscribe__content">
                            <h2>Subscribe To Us</h2>
                            <p>Subscribe to our newsletter</p>

                            <div className="subscribe__input">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                        >
                                            Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeArea;
