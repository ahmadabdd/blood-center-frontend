import main from '../../img/notifications.gif'

const PhoneView = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" id="phoneViewText">
                        <div className="text-center mb-lg-0 text-lg-center" >
                            <h3 className="font-alt">Flexible Use</h3>
                            <p className="text-muted mb-0">Put an image, video, animation, or anything else in the screen!</p>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3 mb-5">
                        <div className="features-device-mockup">
                            <div className="device-wrapper">
                                <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div className="screen bg-black">
                                        <img src={main} alt="iPhone" id="iPhone" width="100%" height="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PhoneView;