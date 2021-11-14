import donation from '../img/bc.jpg'

const Bottom = () => {
    return ( 
        <div>
        <section className="cta">
            <div className="cta-content">
                <div className="container px-5">
                    <h2 className="text-white display-1 lh-1 mb-4">
                        Stop waiting.
                        <br />
                        Start building.
                    </h2>
                    <a className="btn btn-outline-light py-3 px-4 rounded-pill" href={donation}>Download for free</a>
                </div>
            </div>
        </section>
        </div>
     );
}
 
export default Bottom;