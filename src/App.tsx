import Header from './components/Header.tsx';
import Button from './components/Button/Button.tsx';
import Footer from './components/Footer.tsx';
import GlobalStyle from './globalStyles.ts';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Button>Add Employee</Button>
            </main>
            <Footer />
        </>
    );
}

export default App;
