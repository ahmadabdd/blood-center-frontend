import profile from '../img/profile.gif'


const Header5 = () => {
    return (
        <header className="masthead" id="profile">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="mb-5 mb-lg-0 text-left text-lg-left">
                            <h1 className="display-5 lh-1 mb-3">Keep track of <br/>your <span className="primary">Donations</span></h1>
                            <h1 className="display-5 lh-1 mb-3">Set yourself <span className="primary">Available</span></h1>
                            <p className="lead fw-normal text-muted mb-5">
                                So you receive notifications when people need blood
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="masthead-device-mockup">
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">
                                        <img src={profile} alt="iPhone" id="iPhone" width="100%" height="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header5;