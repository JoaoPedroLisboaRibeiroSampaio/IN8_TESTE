import './App.css';
import {Table_App} from './components/table.jsx';
import  Navbar  from './components/cabeçalho.jsx';
import { UseStyles } from './components/style_components';
import Rodape, { Rodapemobile } from './components/rodape';



const App = () => {
  const classes = UseStyles();
  return (
    <div className="App">
      <header className="App-header">
        <nav ClassName='NavBar'>
          <Navbar/>
        </nav> 
        <body className={classes.Main}>
       
        </body>
      </header>
      <section>
      <div  className={classes.tablediv}>
        <Table_App/>
      </div>
      </section>
      <footer className={classes.Rodape}>
      <Rodape />
      </footer>
      <footer className={classes.RodapeMobile}>
      <Rodapemobile />
      </footer>
    </div>
  );
  
}

export default App;
