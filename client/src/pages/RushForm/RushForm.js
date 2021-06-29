import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Student from '../../components/showStudent/showStudent.js'
import NewStudent from '../../components/createStudent/createStudent.js'
import useStyles  from './styles'
import './RushForm.css'

function RushForm() {
    const classes = useStyles()
    return (
        <>
            <Container maxWidth="lg">
                {/* <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> RUSH FORM </Typography>
                </AppBar> */}
                <header>
                    <div id="logo">
                        <img src="/images/pike.jpg" className="pike" alt="" />
                        <span>
                        <b>RUSH FORM</b>
                        </span>
                    </div>
                </header>

                <Grow in>
                <Grid className={classes.mainGrid} container spacing={7}>
                    {/* <div className="rush_form"> */}
                    {/* <Container className={classes.forms} spacing={3}> */}
                        <Grid item xs ={16} sm={5}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <NewStudent/>
                                </AppBar> 
                        </Grid>
                        {/* <Grid container justify="space-between"  alignItems="stretch"> */}
                        <Grid item xs ={12} sm={7}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                                <Student/>
                            </AppBar> 
                        </Grid>
                        {/* </Grid> */}
                    {/* </Container> */}
                    {/* </div> */}
                </Grid>
                </Grow>
            </Container>
        </>
    )
}

export default RushForm