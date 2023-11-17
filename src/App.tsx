import GlobalStyle from './globalStyles.ts';
import AppProvider from './core/contexts/AppContext.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './core/routes/router.tsx';

function App() {
    return (
        <AppProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </AppProvider>
    );
}

export default App;
