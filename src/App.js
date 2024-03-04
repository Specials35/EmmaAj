import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import AppCard from './Card';

function App() {
    return (
        <div className="App">
            <AppNavbar />
            <AppCard />
            <h1>CS 230L</h1>
            <h2>Section - 002</h2>
            <p>WVU ID: 800375481</p>
            <p>Hi, I am Alexander Korpon</p>
        </div>
    );
}

export default App;