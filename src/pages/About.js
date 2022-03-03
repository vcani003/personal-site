import React from "react";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        margin: '16px 0px 12px 0px'
    },
    aboutBody: {
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        textAlign: 'justify'
    },
    img: {
        float: 'left',
        height: '370px',
        width: '50%',
        margin: '6px 12px 0px 0px'
    },
    typographyBodyRoot:{
        margin: '10px 0px !important'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h5' className={classes.title}>About Me</Typography>
            <div className={classes.aboutBody}>
                <div>


                    <img className={classes.img} height={300} src={'https://lh3.googleusercontent.com/A_4pRBg2VNDbLsrPe7GYGUfvCLjQOHcQH9oL6fmc-bndAWjcg_m2zmxa8bp8oDlhAmtkAkho-oL0F-8hrxYPocw65JXEaxjJLUECL-qu6iWyfNdkxWI5j81p36CdqAEAhfPoq7PCGrc=w2400'} />
                    <div>

                        <div>Your probably here for my resume</div>
                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>My name is Veronica Canido and I was born in Miami, Florida.
                            🌞</Typography>
                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>I graduated in 2019 with my Bachelors in I.T. at Florida International University
                            but had a focus in a software developement track.</Typography>
                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>I've had an interest in web development for some time,
                            in  middle school I had a class that taught HTML and CSS
                            where I made a cute little website about red pandas.
                            I learned some more html semanatics during my tumblr phase in highschool.
                            When I started college I eventually took a Web Development class
                            and made a cute site of my favorite things for my class project!</Typography>

                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}><a href='https://ocelot.aul.fiu.edu/~vcani003/index.html'>Link to class project</a></Typography>
                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>Nowadays, you can catch me doing some neat frontend stuff with React, Redux, and other cool techs. 🤓
                            I currently work on developing features and creating high fidelity prototypes @ JPMC.</Typography>

                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>Currently I'm located in Tampa and live with my fiancé and our adorable cats
                            Lumi, Luci and sometimes Coco. We love food and dream of traveling southeast asia
                            and finding the best eats out there.</Typography>

                        <Typography variant="body2" classes={{root: classes.typographyBodyRoot}}>Enough about me, <a href='/cats'>look at my amazing beautiful perfect cats 🐈🐈</a></Typography>
                    </div>

                </div>
            </div>

        </>

    )
}

export default About;