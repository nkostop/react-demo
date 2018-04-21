import React, { Component } from 'react';
import '../App.css';
import List from "material-ui/List";
import ListItem from "material-ui/es/List/ListItem";
import Avatar from "material-ui/es/Avatar/Avatar";
import ListItemText from "material-ui/es/List/ListItemText";
import ImageIcon from 'material-ui-icons/Image';
import {Link} from "react-router-dom";

const MainListComponent = (props) => {
    return(
      <List>
        {props.shops.map((shop) => {
            return(
              <Link to={"/shop/"+shop.name}>
                <ListItem>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary={shop.name} secondary={shop.city} />
                </ListItem>
              </Link>
            )
          })
        }
      </List>
    )
}

export default MainListComponent;