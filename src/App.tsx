import GlobalStyle from './globalStyles.ts';
import Layout from './layout/Layout.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './core/routes/router.tsx';

function App() {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <RouterProvider router={router}></RouterProvider>
            </Layout>
        </>
    );
}

export default App;
