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
                                            <p>
                                                Browse Courses
                                                <i className="fas fa-sort-down"></i>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col col-lg-auto main__menu">
                                        <nav className="navbar navbar-expand-lg">
                                            <li>
                                                <a className="active" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Courses
                                                    <i className="fas fa-sort-down"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Blogs</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Career
                                                    <i className="fal fa-sort-down"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">Faq</a>
                                            </li>
                                            <li>
                                                <a href="#">Affiliation</a>
                                            </li>
                                        </nav>
                                    </div>
                                    <div className="col ml-auto col-auto">
                                        <div className="header__search">
                                            <i className="fas fa-search"></i>
                                            <form action="/">
                                                <input
                                                    type="text"
                                                    name="text"
                                                    placeholder="Search tutorial & article"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-auto col-auto">
                                        <div className="header__login__Cart">
                                            <div className="header__cart">
                                                <i className="fas fa-shopping-cart"></i>
                                            </div>
                                            <div className="header__login">
                                                <p> Login</p>
                                                <p> Sign Up</p>
                                            </div>
                                        </div>
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
