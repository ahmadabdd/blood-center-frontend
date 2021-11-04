import main from '../img/main-filter.gif'

const Header2 = () => {
    return (
        <header className="header2" id='requests'>
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="masthead-device-mockup p-5">
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
                        <div className="mb-5 mb-lg-0 text-center text-lg-left mt-sm-5">
                            <h1 className="display-5 lh-1 mb-3" id='font'>Filter all the</h1>
                            <h1 className="display-5 lh-1 mb-3" id='font'>available blood requests</h1>
                            <h1 className="display-4 lh-1 mb-3" id='font'>on <span className="text-white">Blood type</span> or <span className="text-white">City</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header2;