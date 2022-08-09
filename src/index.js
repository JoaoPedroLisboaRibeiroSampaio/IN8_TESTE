import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './router';
//index.js

 
ReactDOM.render(
  
  <BrowserRouter>
     <Rotas/>
  </BrowserRouter>,
  
  document.getElementById('root'),
  
);


reportWebVitals();
