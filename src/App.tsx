import Header from './components/header.tsx';
import Button from './components/Button/Button.tsx';
import Footer from './components/footer.tsx';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Button type="button">Add Employee</Button>
            </main>
            <Footer />
        </>
    );
}

export default App;
