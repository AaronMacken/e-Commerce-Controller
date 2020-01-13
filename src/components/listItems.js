import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from "@material-ui/icons/Add";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

const linkStyle = { color: "rgba(0,0,0,.87)", textDecoration: "none" };

export const mainListItems = (
  <div>
    <Link to="/products" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="See Products" />
      </ListItem>
    </Link>

    <Link to="/products/new" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add New Product" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <a href="localhost:3000/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
      <ListItem button key="1">
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Visit Store" />
      </ListItem>
    </a>


    <a href="https://dashboard.stripe.com/dashboard" target="_blank" rel="noopener noreferrer" style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <ListItemText primary="Stripe Dashboard" />
      </ListItem>
    </a>

  </div>
);
