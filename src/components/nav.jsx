import Toolbar from '@material-ui/core/toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { AppBar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Logo_nav } from './svg/logo-in8-dev.svg'
import {UseStyles} from './style_components.js'
import { Link } from 'react-router-dom';
import { Trigger } from "./react-simple-offcanvas/src/Components/Trigger";
import { OffcanvasProvider } from "./react-simple-offcanvas/src/Context";
import { Offcanvas } from "./react-simple-offcanvas/src/Components/Offcanvas";


export default function Nav() {
    const classes = UseStyles();

     // Callback function that is triggered when the Offcanvas is opened
 const handleOpen = () => {
}
 // Callback function that is triggered when the Offcanvas is closed
 const handleClose = () => {
}

    return (
        <div className={classes.root}>
           
            <AppBar position="fixed" Style="background-color:rgba(255 ,255 ,255,0)" className={classes.appBarSolid}>
                <Toolbar>  
                    <div className='tittle_espaco'>
                    <Typography variant="h4" className={classes.title}>
                        <Link  to="/" id="grupo_"className={classes.logo_IN8}>
                            <Logo_nav/>
                        </Link>
                        
                    </Typography>
                    </div>
                    <div id="menu_no_t">
                        
                    <div className='tittle_espaco'>
                    <Typography variant="h5"  className={classes.title}>
                    <Link  to="/" className={classes.Link}>
                        cadastro
                    </Link>
                    </Typography>
                    </div>

                    <div className='tittle_espaco'>
                    <Typography variant="h5"  className={classes.title}>
                    <Link  to="/" className={classes.Link}>
                       lista
                    </Link>
                    </Typography>
                    </div>
                    
                    <div className='tittle_espaco'>
                    <Typography variant="h5"  className={classes.title}>
                    <Link  to="/" className={classes.Link}>
                      sobre min 
                    </Link>
                    </Typography>
                    </div>

                    <div className='tittle_espaco'>
                
                    
                    </div>
                    </div>
                    <div className='tittle_espaco'>
                    
                    </div>
        <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        
        <Trigger component={"div"}> 
             <div className={classes.hamburguer_menu} >
                        
                        <a  className="d-block m-3" date-bs-toggle="offcanvas" role="button" >
                            
                            <IconButton className={classes.MenuButtonAtive}
 >                     
        
                                <MenuIcon color="white"/>
                              
        
                            </IconButton>
                        </a>
                            </div>
                            </Trigger>
      
      <Offcanvas title='' className='left'>
        
                    <div >
                    <Typography variant="h5" Style="display:block;"  className={classes.title}>
                    <Link   Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to="/" >
                       lista
                    </Link>
                    </Typography>
                    </div>
                    <div >
                    <Typography variant="h5"Style="display:block;"  >
                    <Link  Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"to='/' >
                      sobre min
                    </Link>
                    
                    </Typography>
                    
                    </div>
                    <div >
                    <Typography variant="h5" Style="display:block;" >
                    <Link  to="/"  Style="color: white;
    text-decoration: none;
    display: block;
    
    padding: 5px;
    margin-bottom: 10px;
    text-align: left;"id="biblioteca_">
                      cadastro
                    </Link> 
                    </Typography>
                    </div>
                   </Offcanvas>
    </OffcanvasProvider>
                    </Toolbar>
            </AppBar>
        </div>
    );
}
