import "rsuite/dist/rsuite.min.css";
import { Table } from "reactstrap";
import '../App.css';
import { useFetch } from '../hooks/useFetch';
import { UseStyles } from "./style_components";



export const Table_App_responsive = () =>  {
    const classes = UseStyles();
    const { data } = useFetch('http://localhost:3042')
    return(
        <>
    {data?.map( r =>{ 
      const sampleData = [
          { Nome: r['id']['1']['Nome'], Email: r['id']['1']['Email'], Nascimento: r['id']['1']['Nascimento'],Telefone:r['id']['1']['Telefone']},
          { Nome: r['id']['2']['Nome'], Email: r['id']['2']['Email'], Nascimento: r['id']['2']['Nascimento'],Telefone:r['id']['2']['Telefone']},
          { Nome: r['id']['3']['Nome'], Email: r['id']['3']['Email'], Nascimento: r['id']['3']['Nascimento'],Telefone:r['id']['3']['Telefone']},
          { Nome: r['id']['4']['Nome'], Email: r['id']['4']['Email'], Nascimento: r['id']['4']['Nascimento'],Telefone:r['id']['4']['Telefone']},
  
      ]
        return (

<div  className={classes.tablediv}>
<Table

  className={classes.tablediv}
  
>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        1
      </th>
      <th>
        2
      </th>
      <th>
        3
      </th>
      <th>
        4
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Nome
      </th>
      <td>
      {sampleData[0].Nome}
      </td>
      <td>
      {sampleData[1].Nome}
      </td>
      <td>
      {sampleData[2].Nome}
      </td>
      <td>
      {sampleData[3].Nome}
      </td>
    </tr>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
      {sampleData[0].Email}
      </td>
      <td>
      {sampleData[1].Email}
      </td>
      <td>
      {sampleData[2].Email}
      </td>
      <td>
      {sampleData[3].Email}
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
      {sampleData[0].Nascimento}
      </td>
      <td>
      {sampleData[1].Nascimento}
      </td>
      <td>
      {sampleData[2].Nascimento}
      </td>
      <td>
      {sampleData[3].Nascimento}
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
      {sampleData[0].Telefone}
      </td>
      <td>
      {sampleData[1].Telefone}
      </td>
      <td>
      {sampleData[2].Telefone}
      </td>
      <td>
      {sampleData[3].Telefone}
      </td>
    </tr>
  </tbody>
</Table>
</div>
   
        
      )
    })}
    </>
    )
}


export const Table_App = () =>  {
    const classes = UseStyles();
    const { data } = useFetch('http://localhost:3042')
    return(
        <>
    {data?.map( r =>{ 
        console.log(r['id']['1']['Nascimento']);
      const sampleData = [
          { Nome: r['id']['1']['Nome'], Email: r['id']['1']['Email'], Nascimento: r['id']['1']['Nascimento'],Telefone:r['id']['1']['Telefone']},
          { Nome: r['id']['2']['Nome'], Email: r['id']['2']['Email'], Nascimento: r['id']['2']['Nascimento'],Telefone:r['id']['2']['Telefone']},
          { Nome: r['id']['3']['Nome'], Email: r['id']['3']['Email'], Nascimento: r['id']['3']['Nascimento'],Telefone:r['id']['3']['Telefone']},
          { Nome: r['id']['4']['Nome'], Email: r['id']['4']['Email'], Nascimento: r['id']['4']['Nascimento'],Telefone:r['id']['4']['Telefone']},
  
      ]
        return (

<div  className={classes.tablediv}>
<Table
  size="sm"	
  className={classes.tablediv}
  bordered
>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        1
      </th>
      <th>
        2
      </th>
      <th>
        3
      </th>
      <th>
        4
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        Nome
      </th>
      <td>
      {sampleData[0].Nome}
      </td>
      <td>
      {sampleData[1].Nome}
      </td>
      <td>
      {sampleData[2].Nome}
      </td>
      <td>
      {sampleData[3].Nome}
      </td>
    </tr>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
      {sampleData[0].Email}
      </td>
      <td>
      {sampleData[1].Email}
      </td>
      <td>
      {sampleData[2].Email}
      </td>
      <td>
      {sampleData[3].Email}
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
      {sampleData[0].Nascimento}
      </td>
      <td>
      {sampleData[1].Nascimento}
      </td>
      <td>
      {sampleData[2].Nascimento}
      </td>
      <td>
      {sampleData[3].Nascimento}
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
      {sampleData[0].Telefone}
      </td>
      <td>
      {sampleData[1].Telefone}
      </td>
      <td>
      {sampleData[2].Telefone}
      </td>
      <td>
      {sampleData[3].Telefone}
      </td>
    </tr>
  </tbody>
</Table>
</div>
   
        
      )
    })}
    </>
    )
}


