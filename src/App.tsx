import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import GlobalStyle from './globalStyles.ts';
import Button from './components/Button.ts';
import Input from './components/Input.ts';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Button>Button</Button>
                <Button $outline>Outline Button</Button>
                <Button $iconBtn>
                    <span>Button with icon</span>
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Button $iconBtn $outline>
                    <span>Outline button with icon</span>
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Button $iconBtn>
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Button $iconBtn $outline>
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Input placeholder="Search by employee name" />
            </main>
            <Footer />
        </>
    );
}

export default App;
