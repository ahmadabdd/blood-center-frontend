import main from '../img/main-filter.gif'

const Header2 = () => {
    return (
        <header className="header2 p-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="masthead-device-mockup">
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">
                                        <img src={main} alt="iPhone" id="iPhone" width="100%" height="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-5 mb-lg-0 text-left text-lg-left">
                            <h1 className="display-5 lh-1 mb-3">Filter all the</h1>
                            <h1 className="display-5 lh-1 mb-3">available blood requests</h1>
                            <h1 className="display-4 lh-1 mb-3">on <span className="text-white">blood type</span> or <span className="text-white">city</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header2;