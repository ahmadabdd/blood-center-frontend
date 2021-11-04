const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand fw-bold" href="#page-top">Blood Center</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#stats">Statistics</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#requests">Blood Requests</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#new">New request</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#follow-up">Follow up</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#profile">Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default NavBar;