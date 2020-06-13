import React from "react"
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar } from "@material-ui/core";

const TopMenu = () => {
    return ( 
       <AppBar>
       <Toolbar>
      <Typography>
          <Link to="/">Home</Link>

      </Typography>
       </Toolbar>
       </AppBar>
     );
}
 
export default TopMenu;