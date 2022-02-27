const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="primary__menu">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="header__logo">
                                            <img
                                                src="/img/header-logo.png"
                                                alt="Header Logo"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-auto thm-cat-col d-none d-lg-block">
                                        <div className="browser__menu">
                                            <p>Browse Courses </p>
                                        </div>
                                    </div>

                                    <div className="col col-lg-auto main__menu">
                                        <nav className="navbar navbar-expand-lg">
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                <a href="#">Courses</a>
                                            </li>
                                            <li>
                                                <a href="#">Blogs</a>
                                            </li>
                                            <li>
                                                <a href="#">Career</a>
                                            </li>
                                            <li>
                                                <a href="#">Faq</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliation</a>
                                            </li>
                                        </nav>
                                    </div>
                                    <div className="col ml-auto col-auto header__search">
                                        header__search
                                    </div>
                                    <div className="col-md-auto col-auto header__login__Cart">
                                        header__login
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
