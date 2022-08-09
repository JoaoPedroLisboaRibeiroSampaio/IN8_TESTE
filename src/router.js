import App from './App.jsx';
import { Routes,Route,useLocation } from "react-router-dom";
import { useLayoutEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryCliente = new QueryClient();

const Wrapper = ({children}) => {

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 1);
  }, [location.pathname]);
  return children
} 

export const Rotas = () => {


    return (

      <Wrapper>
        <QueryClientProvider client={queryCliente}>
      <Routes>
          <Route path="/" element={<App/>} exact />
      </Routes>
      </QueryClientProvider>
      </Wrapper>
 

    )
}

