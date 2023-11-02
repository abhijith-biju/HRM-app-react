import Header from './components/Header.tsx';
import Button from './components/Button/Button.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Button>Add Employee</Button>
            </main>
            <Footer />
        </>
    );
}

export default App;
