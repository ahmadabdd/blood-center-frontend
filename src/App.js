import './constants/pallete'
import NavBar from './components/NavBar';
import Header1 from './components/Header1';
import PieChart from './components/Chart';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Header4 from './components/Header4';
import Header5 from './components/Header5';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <NavBar />
            <Header1 />
            <PieChart />
            <Header2 />
            <Header3 />
            <Header4 />
            <Header5 />
            <Download />
            <Footer />
        </div>

    );
}

export default App;
