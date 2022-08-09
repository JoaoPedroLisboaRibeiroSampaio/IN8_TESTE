import { UseStyles } from './style_components';
import { useFetch } from '../hooks/useFetch';




export const Rodape = () => {
  const classes = UseStyles();
  const { data } = useFetch('http://localhost:3042');
  return (
    <div className="Rodape">
        {data?.map( r =>{
        return(
      <footer className={classes.Meio}>
        <p>{r['id']['1']['Nome']}</p>
        <p>{r['id']['1']['Email']}</p>
        <p>{r['id']['1']['Nascimento']}</p>
        <p>{r['id']['1']['Telefone']}</p>
      </footer>
         )
        })}

    </div>
  );
  
}

export const Rodapemobile = () => {
    const classes = UseStyles();
    const { data } = useFetch('http://localhost:3042');
    return (
      <div className="Rodapemobile">
           {data?.map( r =>{
        return(
      <footer className={classes.Meio}>
        <p>{r['id']['1']['Nome']}</p>
        <p>{r['id']['1']['Email']}</p>
        <p>{r['id']['1']['Nascimento']}</p>
        <p>{r['id']['1']['Telefone']}</p>
      </footer>
         )
        })}
      </div>
    );
    
  }

  export default Rodape;
