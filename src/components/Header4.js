import main from '../img/requests.gif'

const Header4 = () => {
    return (
        <header className="header2" id="follow-up">
            <div className="container">
                <div className="row align-items-center">
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
                        <div className="mb-5 mb-lg-0 text-center">
                            <h1 className="display-4 lh-1 mb-3" id='font'>Follow up your</h1>
                            <h1 className="display-5 lh-1 mb-3" id='font'><span className="text-white">in-progress</span> requests</h1>
                            <h1 className="display-5 lh-1 mb-3" id='font'>and check your <span className="text-white">fulfilled</span> ones too</h1>
                            <p className="lead fw-normal text-white mb-5" id='font'>
                                You can accept or decline the donation request after checking the donator's health record
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header4;