import React from "react"
import { Card, AppBar, Toolbar, Button, Typography, makeStyles, InputBase, fade, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import intro from "../images/INTRO.jpg"
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    introRoot: {
        border: "solid 2px red"
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
        display:"flex"
    }

}))


const WelcomePage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.introRoot} >
                <img className={classes.introPic} src={intro} alt="Rick and morty family" />
            </div>
            <AppBar position="static">
                <Toolbar>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.searchInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>


            {/* //container for sidebar and content starts here */}
            <div className={classes.welcomeContainer}>
                {/* //sidebar for home page */}
                <div style={{border: "solid 2px yellow", width:"15%"}}>
                    <List style={{ border: "solid 2px red", width: "95%", margin:"0 auto", textAlign:"center" }} disablePadding dense>
                        <ListItem button>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText button>Episodes</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>Pictures</ListItemText>
                        </ListItem>
                    </List>
                </div>
                {/* //end of sidebar navigation */}


                {/* //welcome page content here */}
                <div style={{border: "solid 2px green", width:"100%", textAlign:"center"}}>
                    <Typography variant="h4" style={{border:"solid 2px red", padding:"3%"}}>Welcome to the Rick and Morty Fan page</Typography>

                    <div>
                        <Typography>
                            Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                        </Typography>
                    </div>
                        <Divider /> 

                        {/* video container starts here */}
                    <div style={{display:"flex", border:"solid 2px yellow", justifyContent:"space-evenly", alignContent:"center"}}>
                        <div style={{border:"solid 2px yellow", width:"40%"}}> video 1</div>


                        {/* <Divider orientation="vertical" style={{background:"red"}} /> */}


                        <div style={{border:"solid 2px yellow", width:"40%"}}> video 2</div>
                    </div>
                </div>
                {/* //end of home page content */}

            </div>
            {/* //end of container here */}
        </div>
    )
}

export default WelcomePage