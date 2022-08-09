import {makeStyles} from '@material-ui/core/styles';
import rodapedesktop from './mídia/img/rodape-desktop.jpg';
import rodapemobile from './mídia/img/rodape-mobile.jpg';
import index from './mídia/img/index-image.jpg'


export const UseStyles = makeStyles((theme) => ({ 
    appBarSolid: {
    
        backgroundColor: 'rgba(255 ,255 ,255,0);',
      

    },
    logo_IN8:{
        position:'absolute',
        top:0,
        zIndex:1,

    },
    hamburguer_menu:{
        right:'0',
        left:'auto',
        color:'white',

        '@media (max-width: 1349px)' :{
            display:'block',
            marginLeft:'5%'
        },
        '@media (min-width: 1349px)' :{
            display:'none',
            marginRight:'auto'
        },
    },
    Main:{
        width:'100%',
         height:'1000px',
        backgroundSize:'100% 100%',
        backgroundImage: `url(${index})`,

    },
    Rodape:{
        padding:'3%',
        color:'white',
        fontFamily:'Roboto Light',
        backgroundSize:'cover',
        backgroundImage: `url(${rodapedesktop})`,
        width:'100%',
        '@media (max-width: 1349px)' :{
            display:'none',
        },
    },
    hamburguer_menu:{
        right:'0',
        left:'auto',
        '@media (max-width: 1349px)' :{
            display:'block',
            marginLeft:'5%'
        },
        '@media (min-width: 1349px)' :{
            display:'none',
            marginRight:'auto'
        },
    },
    RodapeMobile:{
        backgroundSize:'cover',
        color:'white',
        padding:'3%',
        backgroundImage: `url(${rodapemobile})`,
        width:'100%',
        '@media (min-width: 1349px)' :{
            display:'none',
        },
    },
    tablediv:{
        padding: '3%',
        marginLeft:'auto',
        marginRight:'auto',
        borderCollapse:'unset',
        borderSpacing: '20px',
        marginLeft: 'auto',
        marginRight:'auto',

    },
    MenuButtonAtive:{
        '&:hover': {
            
            backgroundColor:'rgba(2, 8, 44, 0.2); ',
         },
        marginRight: theme.spacing(2),
        color: '#004F80;',
       
    },
    root:{
          flexGrow: 1,
    },
    MenuButton: {
           marginRight: theme.spacing(2),
           color: '#004F80;',
          

    },
    title: {
        flexGrow: 1,
        color: 'black',
       
    },
    Meio:{
       marginRight:'auto',
       marginLeft:'auto',
        
        
    },
    
    Link:{
        '&:hover': {
            color:'#BC9C20;',
          
         },
        
        flexGrow: 1,
        color: '#004F80;',
    }


}));

