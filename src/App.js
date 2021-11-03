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

function App() {
    return (
        <div>
            <NavBar />
            <Header1 />
            <Header2 />
            <Header3 />
            <Bottom />
            <Download />
            <Footer />
        </div>

    );
}

export default App;
