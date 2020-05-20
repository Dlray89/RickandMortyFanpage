import React from "react"
import { Link } from "react-router-dom"
import { Typography, makeStyles, fade, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import intro from "../images/INTRO.jpg"

//icons
import HULU from "../Icons/HULU.png"
import YOUTUBE from "../Icons/YOUTUBE.png"
import AMAZON from "../Icons/AMAZON.png"


const useStyles = makeStyles((theme) => ({
    introRoot: {
      
    },
    introPic: {
        width: "98.5vw",
        height: "75vh"
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "20%",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: "inherit"
    },
    searchInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    welcomeContainer:{
        display:"flex",
        padding:"0.5%",
    },
    ICONS:{
        width:"10%"
    }

}))


const WelcomePage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.introRoot} >
                <img className={classes.introPic} src={intro} alt="Rick and morty family" />
            </div>
          


            {/* //container for sidebar and content starts here */}
            <div className={classes.welcomeContainer}>
                {/* //sidebar for home page */}
                <div style={{ width:"10%",
            padding:"1%", border: "solid 2px white",}}>
                    <List style={{ width: "100%",padding:"1%", margin:"0 auto", textAlign:"center" }} disablePadding dense>

                        <ListItem button style={{ padding:"3%"}}>
                          <Link to="/" style={{textDecoration:"none", color:"white",  width:"100%", padding:"3%"}}> 
                          
                           <ListItemText style={{padding:"10%", fontSize:"1rem",   textAlign:'center'}}>Home</ListItemText></Link>
                        </ListItem>


                        <Divider style={{background:"white"}} />

                        
                        <ListItem button style={{ padding:"3%"}}>
                          <Link to="/episodes" style={{textDecoration:"none", color:"white",  width:"100%", padding:"3%"}}> 
                          
                           <ListItemText style={{padding:"10%", fontSize:"1rem", textAlign:'center'}}>Episodes</ListItemText></Link>
                        </ListItem>

 <Divider style={{background:"white"}} />

                        <ListItem button style={{ padding:"3%"}}>
                          <Link to="/characters" style={{textDecoration:"none", color:"white",width:"100%", padding:"3%"}}> 
                          
                           <ListItemText style={{padding:"10%", fontSize:"1rem",textAlign:'center'}}>Characters</ListItemText></Link>
                        </ListItem>
 <Divider style={{background:"white"}} />
                    </List>

                    <div>
                        <p>Contact me model</p>
                        </div>
                </div>
                {/* //end of sidebar navigation */}


                {/* //welcome page content here */}
                <div style={{border: "solid 2px white", width:"100%", textAlign:"center", margin: "0 auto"}}>
                    <Typography variant="h4" style={{border:"solid 2px white", padding:"3%"}}>Welcome to the Rick and Morty Fan page</Typography>

                    <div>
                        <Typography style={{padding:"5%"}}>
                            Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                        </Typography>
                    </div>
                        <Divider /> 

                        {/* video container starts here */}
                    <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center", margin:" 3% 0"}}>


                        <div style={{border:"solid 2px white", width:"40%"}}> video 1
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/NJR8YkABcwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>


                        <Divider orientation="vertical" />


                        <div style={{border:"solid 2px white", width:"40%"}}> video 2
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/s_1lP4CBKOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    {/* Video container ends here */}
                            <Divider style={{background:"white"}} />
                    <div>
                        <p>TV Networks where you can find your favorite episodes of Rick and Morty</p>

                        <img src={HULU} className={classes.ICONS} />
                        <img  src={YOUTUBE} className={classes.ICONS} />
                        <img src={AMAZON} className={classes.ICONS} />
                       
                    
                    </div>

                
                </div>
                {/* //end of home page content */}

            </div>
            {/* //end of container here */}
        </div>
    )
}

export default WelcomePage