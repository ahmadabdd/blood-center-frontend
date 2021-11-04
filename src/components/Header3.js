import newRequest from '../img/new-request.gif'
import notification from '../img/push.jpg'

const Header3 = () => {
    return (
        <header className="masthead" >
            <div className="container" id='new'>
                <div className="row gx-5 align-items-center" >
                    <div className="col-lg-4">
                        <div className="mb-5 mb-lg-0 text-center text-lg-left">
                            <h1 className="display-4 lh-1 mb-3" id='font'>Submit a<br/><span className="primary">New Request</span></h1>
                            <h1 className="display-5 lh-1 mb-3" id='font'>for you or for a <span className="primary">loved one</span></h1>
                            <p className="lead fw-normal text-muted mb-5" id='font'>
                                The app will send a push notification to all users with the same blood type so they can donate asap
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="masthead-device-mockup">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen bg-black">
                                                <img src={newRequest} alt="iPhone" id="iPhone" width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="masthead-device-mockup mt-5 mt-lg-0">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen bg-black">
                                                <img src={notification} alt="iPhone" id="iPhone" width="100%" height="100%" />
                                            </div>
                                        </div>
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

export default Header3;