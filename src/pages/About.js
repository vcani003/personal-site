import React from "react";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";

const useStyles = makeStyles({
    title: {
        textAlign: 'center'
    },
    aboutBody: {
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h5'>About Me</Typography>
            <div className={classes.aboutBody}>

                My name is Veronica Canido and I was born in Miami, Florida.
                🌞
                <p>I graduated in 2019 with my Bachelors in I.T. at Florida International University but had a focus in a software developement track.</p>
                <p>I've had an interest in web development for some time,
                    in  middle school I had a class that taught HTML and CSS
                    where I made a cute little website about red pandas.
                    I learned some more html semanatics during my tumblr phase in highschool.
                    When I started college I eventually took a Web Development class
                    and made this cute site of my favorite things for my class project!</p>
                <a href='https://ocelot.aul.fiu.edu/~vcani003/index.html'>Link to class project</a>
                <p>Nowadays, you can catch me doing some neat frontend stuff with React, Redux, and other cool techs. 🤓 I currently work on developing features and creating high fidelity protoypes @ JPMC.</p>

                <p>Currently I'm located in Tampa and live with my fiancé and our beautiful kitty gals Lumi, Luci and sometimes Coco. We love food and dream of traveling southeast asia and finding the best eats out there.</p>

                <p>Enough about me, <a href='/cats'>look at my amazing beautiful perfect cats 🐈🐈</a></p>
            </div>

        </>

    )
}

export default About;