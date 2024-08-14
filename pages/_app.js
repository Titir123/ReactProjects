import Wrapper from "@/layout/wrapper/Wrapper";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { Provider } from "react-redux";
import { store } from "@/toolkit/store";
import { useRouter } from "next/router";


const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
        
            
        const router = useRouter();

        const noWrapperRoutes = ['/', '/auth/login', '/auth/register'];
    
        const shouldWrap = !noWrapperRoutes.includes(router.pathname);
    
        return (
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {shouldWrap ? (
                        <Wrapper>
                            <Component {...pageProps} />
                        </Wrapper>
                    ) : (
                        <Component {...pageProps} />
                    )}
                    <ToastContainer />
                </Provider>
            </QueryClientProvider>
    );
}
