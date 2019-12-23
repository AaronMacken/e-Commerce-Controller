import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CartItem from './CartItem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: "#c0cbff40"
    },
    title: {
        fontSize: '10rem'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    gridItem: {
        margin: 'auto'
    },
    searchBar: {
        width: '100%'
    }
}));


export default function Products() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <main className={classes.content}>
                {/* AppBarSpacer div class for top margin */}
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>

                    <Grid container spacing={3}>

                        {/* grid items */}
                        <Grid item xs={12}>
                            <Input placeholder="Search Products" className={classes.searchBar}></Input>
                        </Grid>


                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <CartItem img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                                price={14.99} title="CBD Oil Product 1"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <CartItem img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                                price={14.99} title="CBD Oil Product 1"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <CartItem img="https://hemp-xr.com/wp-content/uploads/2019/12/hemp-xr-oil.jpg"
                                price={14.99} title="CBD Oil Product 1"/>
                            </Paper>
                        </Grid>
                        
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

