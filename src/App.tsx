import GlobalStyle from './globalStyles.ts';
import { AppContextProvider } from './core/contexts/AppContext.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './core/routes/router.tsx';

function App() {
    return (
        <AppContextProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </AppContextProvider>
    );
}

export default App;
