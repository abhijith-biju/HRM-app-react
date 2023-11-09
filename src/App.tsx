import GlobalStyle from './globalStyles.ts';
// import Layout from './layout/Layout.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './core/routes/router.tsx';

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
