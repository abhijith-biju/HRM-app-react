import GlobalStyle from './globalStyles.ts';
import Layout from './layout/Layout.tsx';
import EmployeesListing from './pages/EmployeeListing/EmployeeListing.tsx';

function App() {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <EmployeesListing />
            </Layout>
        </>
    );
}

export default App;
