import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Input } from '@material-ui/core';

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
                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <h1>Derp</h1>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <h1>Derp</h1>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItem}>
                            <Paper>
                                <h1>Derp</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

