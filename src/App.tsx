import GlobalStyle from './globalStyles.ts';
// import { AppProvider } from './core/contexts/AppContext.tsx';
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
