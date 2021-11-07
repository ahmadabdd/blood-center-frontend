import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const PieChart = () => {
    const [Apos, setApos] = useState();
    const [Bpos, setBpos] = useState();
    const [ABpos, setABpos] = useState();
    const [Opos, setOpos] = useState();
    const [Aneg, setAneg] = useState();
    const [Bneg, setBneg] = useState();
    const [ABneg, setABneg] = useState();
    const [Oneg, setOneg] = useState();

    useEffect(() => {
        getApos();
        getAneg();
        getBpos();
        getBneg();
        getABpos();
        getABneg();
        getOpos();
        getOneg();
    }, []);

    async function getApos() {
        await fetch("https://blood-center.tk/api/getApos", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setApos(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getAneg() {
        await fetch("https://blood-center.tk/api/getAneg", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setAneg(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getBpos() {
        await fetch("https://blood-center.tk/api/getBpos", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setBpos(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getBneg() {
        await fetch("https://blood-center.tk/api/getBneg", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setBneg(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getABpos() {
        await fetch("https://blood-center.tk/api/getABpos", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setABpos(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getABneg() {
        await fetch("https://blood-center.tk/api/getABneg", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setABneg(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getOpos() {
        await fetch("https://blood-center.tk/api/getOpos", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setOpos(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    async function getOneg() {
        await fetch("https://blood-center.tk/api/getOneg", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                setOneg(responseJson);
                // console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <header className="background" id="stats">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="mb-lg-0 text-center text-sm-start">
                            <h1 className="display-4 lh-1 mb-3" id='font'>Growing numbers</h1>
                            <h1 className="display-4 lh-1 mb-3" id='font'>of blood requests!</h1>
                            <h1 className="display-4 lh-1 mb-3" id='font'>Saving more <span className="primary">lives</span>!</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-lg-0 text-center text-lg-center">
                            <Chart
                                width={'800px'}
                                height={'400px'}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Blood type', 'requests'],
                                    ['A+', Apos*100],
                                    ['A-', Aneg*100],
                                    ['B+', Bpos*100],
                                    ['B-', Bneg*100],
                                    ['AB+', ABpos*100],
                                    ['AB-', ABneg*100],
                                    ['O+', Opos*100],
                                    ['O-', Oneg*100],
                                ]}
                                options={{
                                    backgroundColor: '#f8f9fa',
                                    slices: {
                                        0: { color: 'C35A5D' },
                                        1: { color: 'AB4F51' },
                                        2: { color: '924446' },
                                        3: { color: '7A393A' },
                                        4: { color: '622D2E' },
                                        5: { color: '492223' },
                                        6: { color: '311717' },
                                        7: { color: '180B0C' },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default PieChart;