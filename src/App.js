import logo from './logo.svg';
import './App.css';
import './constants/pallete'
import NavBar from './components/NavBar';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Header3 from './components/Header3';
import Footer from './components/Footer';
import Download from './components/Download';
import Bottom from './components/Bottom';
import Header4 from './components/Header4';
import Header5 from './components/Header5';
import PieChart from './components/Chart';

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
