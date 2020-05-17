import React from "react"
import { List, ListItem, ListItemText} from "@material-ui/core"



const SideBar = () => {
    return(
        <List disablePadding dense>
            <ListItem button >
                <ListItemText button>Episodes</ListItemText>
            </ListItem>
            <ListItem button >
                <ListItemText>Pictures</ListItemText>
            </ListItem>
        </List>
    )
}

export default SideBar