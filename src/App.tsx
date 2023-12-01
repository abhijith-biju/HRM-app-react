import GlobalStyle from './globalStyles.ts';
import { AppContextProvider } from './core/contexts/AppContext.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './core/routes/router.tsx';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <AppContextProvider>
                <GlobalStyle />
                <RouterProvider router={router} />
            </AppContextProvider>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default App;
